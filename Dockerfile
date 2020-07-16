FROM node:alpine as builder
WORKDIR '/app'
COPY ./build ./build

FROM nginx as runner
COPY --from=builder /app/build /usr/share/nginx/html
