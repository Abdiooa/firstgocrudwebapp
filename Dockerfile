# Stage 1: Compile and Build angular codebase

FROM node:20-alpine as build

WORKDIR /webapp

COPY ./ /webapp

RUN npm install

RUN npm run build --prod

# Stage 2: Serve app with nginx server

FROM nginx:latest

COPY --from=build /webapp/dist/gofirstcrud /usr/share/nginx/html

EXPOSE 81

CMD ["nginx", "-g", "daemon off;"]