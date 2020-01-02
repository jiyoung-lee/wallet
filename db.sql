CREATE TABLE `wallet_info` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `userid` VARCHAR(100) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `public_key` VARCHAR(255) NOT NULL,
  `private_key` VARCHAR(255) NOT NULL UNIQUE, 
  `createDate` DATETIME NOT NULL,  
  `deleteDate` DATETIME NULL, 
  `isDeleted` INT(11) NOT NULL,  
  `master` INT(11) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `txhash`(
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `userid` VARCHAR(100) NOT NULL,
  `txhash` VARCHAR(255) NOT NULL,
  `toAddress` VARCHAR(255) NULL,
  PRIMARY KEY (`id`)
);