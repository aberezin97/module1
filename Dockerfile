FROM ubuntu:20.04
RUN apt update && apt install -y nodejs && apt install -y npm && npm install -G express
WORKDIR /var/www
COPY ./app.js app.js
COPY ./dist dist
EXPOSE 3000
CMD node app.js