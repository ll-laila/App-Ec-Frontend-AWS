FROM node:alpine3.18 as build


# Build App
WORKDIR /app
COPY package.json .
RUN npm install -g npm@10.4.0

# Install react-scripts globally
RUN npm install -g react-scripts@latest

COPY . .
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]




# Serve with Nginx
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/build .
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]