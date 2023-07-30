import { Trans, useTranslation } from "next-i18next"
import {
  FunctionComponent,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react"
import { unverifyApp } from "src/asyncs/app"
import { Notice } from "src/components/Notice"
import {
  fetchVerificationAvailableMethods,
  fetchVerificationStatus,
} from "src/fetchers"
import { Appstream } from "src/types/Appstream"
import { VerificationAvailableMethods } from "src/types/VerificationAvailableMethods"
import { VerificationStatus } from "src/types/VerificationStatus"
import { verificationProviderToHumanReadable } from "src/verificationProvider"
import Button from "../../Button"
import ConfirmDialog from "../../ConfirmDialog"
import Spinner from "../../Spinner"
import LoginVerification from "./LoginVerification"
import WebsiteVerification from "./WebsiteVerification"
import InlineError from "src/components/InlineError"

interface Props {
  app: Appstream
  isNewApp: boolean
  onVerified?: () => void
}

const StatusInfo = ({ status }: { status: VerificationStatus }) => {
  const { t } = useTranslation()

  switch (status.method) {
    case "none" || !status.verified:
      return <span>{t("app-is-currently-not-verified")}</span>
    case "login_provider":
      return (
        <Trans i18nKey="app-is-currently-verified-by-login-provider">
          Your app is currently verified by your login
          <span className="font-medium">
            @{{ login_name: status.login_name }}
          </span>
          on
          <span className="font-medium">
            {{
              login_provider: verificationProviderToHumanReadable(
                status.login_provider,
              ),
            }}
          </span>
          .
        </Trans>
      )
    case "website":
      return (
        <Trans i18nKey="app-is-currently-verified-by-website">
          Your app is currently verified by your website
          <span className="font-medium">{{ website: status.website }}</span>
        </Trans>
      )
    case "manual":
      return <span>{t("app-is-currently-verified-manually")}</span>
  }
}

const AppVerificationSetup: FunctionComponent<Props> = ({
  app,
  isNewApp,
  onVerified,
}) => {
  const { t } = useTranslation()

  const [verificationMethods, setVerificationMethods] =
    useState<VerificationAvailableMethods>(null)
  const [verificationStatus, setVerificationStatus] =
    useState<VerificationStatus>(null)
  const [status, setStatus] = useState<
    "idle" | "pending" | "success" | "error"
  >("idle")
  const [error, setError] = useState(null)

  const [confirmUnverify, setConfirmUnverify] = useState<boolean>(false)

  const doFetch = useCallback(async () => {
    try {
      const fetchStatus = await fetchVerificationStatus(app.id)
      setVerificationStatus(fetchStatus)

      if (!fetchStatus?.verified) {
        const fetch = await fetchVerificationAvailableMethods(app.id, isNewApp)
        setVerificationMethods(fetch)
      } else {
        setVerificationMethods(null)
      }

      setStatus("success")
    } catch (err) {
      setStatus("error")
      setError(err)
    }
  }, [app.id, isNewApp])

  const onChildVerified = useCallback(() => {
    doFetch()
    onVerified?.()
  }, [doFetch, onVerified])

  useEffect(() => {
    doFetch()
  }, [app.id, doFetch])

  if (["pending", "idle"].includes(status)) {
    return <Spinner size="m" />
  }

  let content: ReactElement
  if (error) {
    content = <InlineError shown={true} error={error} />
  } else if (verificationMethods?.detail) {
    let errorCode: string
    switch (verificationMethods.detail) {
      case "app_already_exists":
        errorCode = t("app-already-exists")
        break
      case "malformed_app_id":
        errorCode = t("malformed-app-id")
        break
      default:
        errorCode = t("error-code", { code: verificationMethods.detail })
    }
    content = <InlineError shown={true} error={errorCode} />
  } else if (verificationStatus?.verified) {
    if (isNewApp) {
      content = <InlineError shown={true} error={t("app-already-exists")} />
    } else {
      content = (
        <div className="space-y-3">
          <StatusInfo status={verificationStatus} />

          <br />

          <Button onClick={() => setConfirmUnverify(true)}>
            {t("unverify")}
          </Button>

          <ConfirmDialog
            isVisible={confirmUnverify}
            prompt={t("unverify-app-prompt", { appId: app.id })}
            action={t("unverify")}
            actionVariant="destructive"
            onConfirmed={() => {
              setConfirmUnverify(false)
              unverifyApp(app.id).then(doFetch)
            }}
            onCancelled={() => setConfirmUnverify(false)}
          />
        </div>
      )
    }
  } else {
    content = (
      <div className="space-y-3">
        <p className="xl:max-w-[75%]">{t("verification-instructions")}</p>
        <div className="xl:max-w-[75%]">
          <Notice>{t("verification-warning")}</Notice>
        </div>

        {verificationMethods?.methods.map((methodType) => {
          if (methodType.method === "website") {
            return (
              <WebsiteVerification
                key={methodType.method}
                appId={app.id}
                method={methodType}
                isNewApp={isNewApp}
                onVerified={onChildVerified}
              ></WebsiteVerification>
            )
          }
          if (methodType.method === "login_provider") {
            return (
              <LoginVerification
                key={methodType.method}
                appId={app.id}
                method={methodType}
                isNewApp={isNewApp}
                onVerified={onChildVerified}
                onReloadNeeded={doFetch}
              ></LoginVerification>
            )
          }
        })}
      </div>
    )
  }

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold">{t("verification")}</h2>
      {content}
    </>
  )
}

export default AppVerificationSetup