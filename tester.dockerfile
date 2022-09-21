FROM personal-finance-builder

# debt: should do this in one line so its one layer
RUN apk --no-cache upgrade && apk add --no-cache chromium
ENV CHROME_BIN=/usr/bin/chromium-browser \
  CHROME_PATH=/usr/lib/chromium/