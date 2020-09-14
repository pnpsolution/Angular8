FROM node:12-alpine as builder
WORKDIR /appdir
COPY . .
RUN npm i
RUN npm run ng build -- --prod

FROM nginx:alpine
COPY --from=builder /appdir/dist/Angular8 /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/

# docker stop $(docker ps -a -q)
# docker rm $(docker ps -a -q)
# docker build -t angular8 .
# docker run --name angular8 -p 80:80 -d angular8