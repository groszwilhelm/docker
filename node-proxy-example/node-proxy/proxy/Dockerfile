FROM node:6

ENV NPM_CONFIG_LOGLEVEL info

COPY . /opt/proxy

EXPOSE 80

ENTRYPOINT node /opt/proxy/app.js
