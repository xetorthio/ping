FROM google/nodejs
ADD app.js /app/app.js
WORKDIR /app
CMD node app.js
EXPOSE 3000
