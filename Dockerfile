FROM ubuntu:13.04
RUN apt-get install -y software-properties-common
RUN add-apt-repository ppa:chris-lea/node.js
RUN apt-get update
RUN apt-get install -y nodejs
ADD app.js /app/app.js
WORKDIR /app
CMD node app.js
EXPOSE 3000
