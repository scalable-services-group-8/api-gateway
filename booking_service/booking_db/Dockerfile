# Use the official MySQL image as the parent image
FROM mysql:5.7

# Environment variables for MySQL configuration
ENV MYSQL_ROOT_PASSWORD=a7Z4T&BrWYBX7Ptx
ENV MYSQL_DATABASE=booking_db
ENV MYSQL_USER=web
ENV MYSQL_PASSWORD=dp7Pw9Fhr54&LjaiR

# Copy custom MySQL configuration (if needed)
# COPY ./my-custom.cnf /etc/mysql/conf.d/my-custom.cnf

# Copy SQL scripts to import data
COPY ./schema.sql /docker-entrypoint-initdb.d/

# Expose the MySQL port
EXPOSE 3306

# Start MySQL service
CMD ["mysqld"]
