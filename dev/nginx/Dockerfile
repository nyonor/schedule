FROM nginx:1.21.1-alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./localhost.crt /etc/nginx/ssl/
COPY ./localhost.key /etc/nginx/ssl/