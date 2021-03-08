FROM node:latest
WORKDIR /app
COPY . /app
RUN npm rebuild
RUN npm i
EXPOSE 3000
CMD [ "node", "index.js" ]