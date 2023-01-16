# Dockerfile
FROM node:16.15.0-alpine

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

COPY . /usr/src/nuxt-app/
RUN npm ci
RUN npm run build

EXPOSE 8888

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=8888

CMD [ "npm", "start" ]
