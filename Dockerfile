FROM nginx:1.19.6-alpine

# config
COPY conf/nginx.conf /etc/nginx

# static assets
ADD build /usr/share/nginx/html

# web server
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
