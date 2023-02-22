FROM node:16.13.1-alpine

ARG WORKDIR
ARG API_URL
# ARG CONTAINER_PORT

# ENV HOST=0.0.0.0 = これを指定しないとブラウザからhttp://localhost へアクセスすることができません
ENV HOME=/${WORKDIR} \
  LANG=C.UTF-8 \
  TZ=Asia/Tokyo \
  HOST=0.0.0.0 \
  API_URL=${API_URL} \
  NPM_CONFIG_PRODUCTION=false

WORKDIR ${HOME}

COPY package*.json ./

# RUN apk update && \
#   apk upgrade && \
#   apk add --no-cache make gcc g++ python &&

COPY . ./

RUN yarn install

RUN yarn run build

# EXPOSE <ポート番号> = コンテナ公開用のポート番号を指定します。
# EXPOSE ${CONTAINER_PORT}