FROM node:12-alpine as builder
WORKDIR /appdir
COPY . .
RUN npm i
RUN npm run ng build -- --prod

FROM nginx:alpine
COPY --from=builder /appdir/dist/Angular8 /usr/share/nginx/html

# docker build -t angular8 .
# docker run -p 80:80 -d angular8