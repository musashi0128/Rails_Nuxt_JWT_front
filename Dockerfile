FROM node:16.13.1-alpine

ARG WORKDIR
ARG API_URL
# ARG CONTAINER_PORT

# ENV HOST=0.0.0.0 = これを指定しないとブラウザからhttp://localhost へアクセスすることができません
ENV HOME=/${WORKDIR} \
  LANG=C.UTF-8 \
  TZ=Asia/Tokyo \
  HOST=0.0.0.0 \
  API_URL=${API_URL}

WORKDIR ${HOME}

COPY package*.json ./
RUN yarn install

COPY . ./

RUN yarn run build

# EXPOSE <ポート番号> = コンテナ公開用のポート番号を指定します。
# EXPOSE ${CONTAINER_PORT}