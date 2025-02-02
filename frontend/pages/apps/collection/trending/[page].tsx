import { GetStaticPaths, GetStaticProps } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { NextSeo } from "next-seo"
import ApplicationCollection from "../../../../src/components/application/Collection"
import fetchCollection from "../../../../src/fetchers"
import {
  AppsIndex,
  MeilisearchResponse,
  mapAppsIndexToAppstreamListItem,
} from "src/meilisearch"

export default function TrendingApps({
  applications,
  locale,
}: {
  applications: MeilisearchResponse<AppsIndex>
  locale: string
}) {
  const { t } = useTranslation()
  return (
    <>
      <NextSeo
        title={t("trending-apps")}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_SITE_BASE_URI}/apps/collection/trending`,
        }}
        noindex={locale === "en-GB"}
      />
      <div className="max-w-11/12 mx-auto my-0 mt-12 w-11/12 2xl:w-[1400px] 2xl:max-w-[1400px]">
        <ApplicationCollection
          title={t("trending-apps")}
          applications={applications.hits.map(mapAppsIndexToAppstreamListItem)}
          page={applications.page}
          totalPages={applications.totalPages}
        />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  if (isNaN(params.page as unknown as number)) {
    return {
      notFound: true,
      revalidate: 60,
    }
  }

  const applications = await fetchCollection(
    "trending",
    params.page as unknown as number,
    30,
    locale,
  )

  if (applications.page > applications.totalPages) {
    return {
      notFound: true,
      revalidate: 60,
    }
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      applications,
      locale,
    },
    revalidate: 900,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  }
}
