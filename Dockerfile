FROM node

WORKDIR /usr/src/app
COPY package*.json .

COPY . .
EXPOSE 3000

CMD ["echo", "11.04.2002"]
ENTRYPOINT ["npm", "test"]