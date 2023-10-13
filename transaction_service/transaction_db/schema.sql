-- Create the transactions table
use `transaction_db`;
CREATE TABLE `transactions` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `booking_id` INT NOT NULL,
    `amount` DECIMAL(10, 2) NOT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `date_created` bigint(20) NOT NULL,
    `date_updated` bigint(20) NOT NULL
);

INSERT INTO `transactions` VALUES(0, 1, 200.0, '', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());
INSERT INTO `transactions` VALUES(0, 1, 1000.0, '', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());
INSERT INTO `transactions` VALUES(0, 2, 200.0, '', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());
INSERT INTO `transactions` VALUES(0, 3, 220.0, '', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());
INSERT INTO `transactions` VALUES(0, 3, 200.0, '', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());
INSERT INTO `transactions` VALUES(0, 4, 200.0, '', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());
INSERT INTO `transactions` VALUES(0, 4, 2000.0, '', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());
