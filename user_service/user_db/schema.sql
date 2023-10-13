-- Create the users table
use `user_db`;
CREATE TABLE `users` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `fname` VARCHAR(255) NOT NULL,
    `lname` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `date_created` bigint(20) NOT NULL,
    `date_updated` bigint(20) DEFAULT 0 NOT NULL
);
INSERT INTO `users` VALUES(0, 'Nitesh', 'Bits', 'n@m.com', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());
INSERT INTO `users` VALUES(0, 'Sumesh', 'Bits', 's@m.com', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());
INSERT INTO `users` VALUES(0, 'Nitish', 'Bits', 'nb@m.com', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());
INSERT INTO `users` VALUES(0, 'Yashi', 'Bits', 'y@m.com', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());
