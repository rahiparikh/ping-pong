FROM node:lts-bullseye-slim

RUN apt update && \
    apt install -y wget && \
    rm -rf /var/lib/{apt,dpkg,cache,log}/
EXPOSE 3000
COPY app /app

WORKDIR /app
RUN npm install
CMD node index.js
