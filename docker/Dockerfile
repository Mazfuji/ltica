FROM node:12-slim

RUN apt-get update && \
    apt-get -y install node-gyp && \
    npm install rpi-gpio && \
    groupadd -g 997 gpio