FROM node:14.17.1-alpine as build-stage
WORKDIR /app
COPY package.json /app
RUN npm install
COPY ./ /app
RUN npm run build -- --output-path=out
FROM nginx:1.21.1
COPY --from=build-stage /app/out /usr/share/nginx/html
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]