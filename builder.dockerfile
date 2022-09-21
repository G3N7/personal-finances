FROM node:16-alpine as builder
WORKDIR /personal-finance

# update os dependencies
RUN apk update && apk upgrade

# debt: document containers example https://github.com/Zenika/alpine-chrome/blob/master/Dockerfile#L6-L13

# debt: should do this in one line so its one layer
RUN apk --no-cache upgrade && apk add --no-cache chromium
ENV CHROME_BIN=/usr/bin/chromium-browser \
  CHROME_PATH=/usr/lib/chromium/

# update npm
RUN npm install -g npm@latest

# copy giving user ownership
COPY package*.json ./
COPY packages ./packages

RUN npm install

RUN npm run build