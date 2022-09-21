FROM node:16-alpine
WORKDIR /personal-finance

# update os dependencies
RUN apk update && apk upgrade

# show base image node/npm versions
RUN node -v && npm -v

# update npm
RUN NPM_VERSION=$(npm -v | awk -F\. '{print $1}')
RUN npm install -g npm@${NPM_VERSION}

# show updated versions of node/npm
RUN node -v && npm -v

# copy giving user ownership
COPY --from=personal-finance-builder personal-finance/package*.json ./
COPY --from=personal-finance-builder personal-finance/packages ./packages

CMD ["npm", "start", "--workspace=docs"]