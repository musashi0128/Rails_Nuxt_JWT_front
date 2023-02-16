FROM node:16.13.1-alpine

ARG WORKDIR
# ARG CONTAINER_PORT

# ENV HOST=0.0.0.0 = これを指定しないとブラウザからhttp://localhost へアクセスすることができません
ENV HOME=/${WORKDIR} \
  LANG=C.UTF-8 \
  TZ=Asia/Tokyo \
  HOST=0.0.0.0

WORKDIR ${HOME}

# EXPOSE <ポート番号> = コンテナ公開用のポート番号を指定します。
# EXPOSE ${CONTAINER_PORT}