FROM node:16-alpine as builder
WORKDIR /personal-finance

# update os dependencies
RUN apk update && apk upgrade

# debt: document containers example https://github.com/Zenika/alpine-chrome/blob/master/Dockerfile#L6-L13

# update npm
RUN npm install -g npm@latest

# copy giving user ownership
COPY package*.json ./
COPY packages ./packages

RUN npm install

RUN npm run build