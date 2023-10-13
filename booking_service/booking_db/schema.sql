-- Create the bookings table
use `booking_db`;
CREATE TABLE `bookings` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,
    `booking_type` tinyint(3) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `date_created` bigint(20) NOT NULL,
    `date_updated` bigint(20) NOT NULL
);

INSERT INTO `bookings` VALUES(0, 1, 1, 'Flight BOM-DEL', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());
INSERT INTO `bookings` VALUES(0, 1, 1, 'Flight BOM-FRA', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());
INSERT INTO `bookings` VALUES(0, 2, 2, 'Hotel in Mumbai', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());
INSERT INTO `bookings` VALUES(0, 3, 1, 'Flight BOM-SFO', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());
INSERT INTO `bookings` VALUES(0, 3, 1, 'Flight BOM-HYD', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());
INSERT INTO `bookings` VALUES(0, 4, 2, 'Hotel in Mumbai', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());
INSERT INTO `bookings` VALUES(0, 4, 1, 'Flight DEL-BOM', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());
