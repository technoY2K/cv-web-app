FROM node:18.16.0-alpine

RUN apk update && apk upgrade
WORKDIR /nuxt3
COPY --chown=node:node . /nuxt3
RUN npm install --quiet
EXPOSE 3000
EXPOSE 24678
CMD ["npm", "run", "dev"]