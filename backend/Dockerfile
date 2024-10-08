FROM debian:testing AS builder

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        python3 python3-dev python3-pip python-is-python3 python3-venv build-essential libpq-dev libcairo2-dev libgirepository1.0-dev \
        gir1.2-ostree-1.0 gir1.2-appstream-1.0 flatpak

RUN python -m pip install --no-cache-dir --break-system-packages pipx && \
    pipx install poetry

COPY pyproject.toml poetry.lock /

RUN /root/.local/bin/poetry export -f requirements.txt --output requirements.txt && \
    python -m venv /venv && \
    /venv/bin/python -m pip install --no-cache-dir -r requirements.txt

FROM debian:testing-slim
ARG SENTRY_RELEASE
ENV PATH="/venv/bin:$PATH"

EXPOSE 8000

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        python3 python-is-python3 python3-venv ca-certificates libcairo2 libpq5 \
        libgirepository-1.0-1 gir1.2-ostree-1.0 gir1.2-appstream-1.0 flatpak && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

RUN flatpak --user remote-add flathub https://flathub.org/repo/flathub.flatpakrepo && \
    flatpak --user remote-add flathub-beta https://flathub.org/beta-repo/flathub-beta.flatpakrepo

COPY --from=builder /venv /venv
COPY . /app
WORKDIR /app

ENV SENTRY_RELEASE="$SENTRY_RELEASE"

CMD ["/app/docker-entrypoint.sh"]
