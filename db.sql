CREATE TABLE `userInfo` (
  `userId` VARCHAR(100) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `public_key` VARCHAR(255) NOT NULL,
  `private_key` VARCHAR(255) NOT NULL UNIQUE, 
  `createDate` DATETIME NOT NULL,  
  `deleteDate` DATETIME NULL, 
  `isDeleted` INT(11) NOT NULL,
  PRIMARY KEY (`userid`)
);

CREATE TABLE `txHash`(
  `num` INT(11) NOT NULL AUTO_INCREMENT,
  `userId` VARCHAR(100) NOT NULL,
  `txHash` VARCHAR(255) NOT NULL,
  `toAddress` VARCHAR(255) NULL,
  PRIMARY KEY (`num`)
);

CREATE TABLE `master`(
  `userId` VARCHAR(100) NOT NULL,
  `master` INT(11) NOT NULL,
  PRIMARY KEY (`userId`)
);