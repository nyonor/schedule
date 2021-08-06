FROM alpine:3.14
ENV CONTENTDIR='/var/www/html'
RUN apk add --update nodejs=14.17.4-r0 \
    && apk add --update npm
RUN mkdir -p ${CONTENTDIR}
COPY . ${CONTENTDIR}
WORKDIR ${CONTENTDIR}
RUN npm install
CMD [ "npm", "start" ]