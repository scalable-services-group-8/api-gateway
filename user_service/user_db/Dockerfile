# Use the official MySQL image as the parent image
FROM mysql:5.7

# Environment variables for MySQL configuration
ENV MYSQL_ROOT_PASSWORD=7Z4T&BrWYBX7Pt
ENV MYSQL_DATABASE=user_db
ENV MYSQL_USER=web
ENV MYSQL_PASSWORD=p7P9Fhr54&Ljai

# Copy custom MySQL configuration (if needed)
# COPY ./my-custom.cnf /etc/mysql/conf.d/my-custom.cnf

# Copy SQL scripts to import data
COPY ./schema.sql /docker-entrypoint-initdb.d/

# Expose the MySQL port
EXPOSE 3306

# Start MySQL service
CMD ["mysqld"]
