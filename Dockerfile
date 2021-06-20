FROM node:14.15.4

RUN apt-get update && apt-get install -y locales && localedef -f UTF-8 -i ja_JP ja_JP
ENV LANG ja_JP.UTF-8
ENV TZ Asia/Tokyo
WORKDIR /njs-express-api01

