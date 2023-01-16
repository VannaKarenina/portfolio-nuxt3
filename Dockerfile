# Dockerfile
FROM node:16.15.0-alpine as dep-base

RUN mkdir -p /nuxt
WORKDIR /nuxt

COPY package.json .
COPY package-lock.json .
RUN npm ci

FROM dep-base as prod-base

COPY . .
RUN npm run build

FROM node:16.15.0-slim as production

COPY --from=prod-base /nuxt/.output /nuxt/.output

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "/nuxt/.output/server/index.mjs"]
