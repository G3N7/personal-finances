# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 18, 16, 14, 18-bullseye, 16-bullseye, 14-bullseye, 18-buster, 16-buster, 14-buster
ARG NODE_RELEASE=18
ARG VARIANT=bullseye
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${NODE_RELEASE}-${VARIANT}

# debt: should do this in one line so its one layer
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN echo "deb http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google.list
RUN apt-get update
RUN apt-get install -y google-chrome-stable xvfb

# RUN nvm install --lastest-npm $(echo ${NODE_RELEASE} | awk -F. '{print $1}')