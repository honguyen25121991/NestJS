-- Adminer 4.8.1 MySQL 8.0.32 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

CREATE DATABASE `db_user_upload_image` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_user_upload_image`;

DROP TABLE IF EXISTS `binh_luan`;
CREATE TABLE `binh_luan` (
  `binh_luan_id` int NOT NULL AUTO_INCREMENT,
  `nguoi_dung_id` int DEFAULT NULL,
  `hinh_id` int DEFAULT NULL,
  `ngay_binh_luan` date DEFAULT NULL,
  `noi_dung` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`binh_luan_id`),
  KEY `nguoi_dung_id` (`nguoi_dung_id`),
  KEY `hinh_id` (`hinh_id`),
  CONSTRAINT `binh_luan_ibfk_1` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`nguoi_dung_id`),
  CONSTRAINT `binh_luan_ibfk_2` FOREIGN KEY (`hinh_id`) REFERENCES `hinh_anh` (`hinh_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `binh_luan` (`binh_luan_id`, `nguoi_dung_id`, `hinh_id`, `ngay_binh_luan`, `noi_dung`) VALUES
(1,	1,	1,	NULL,	'aaaaaaa'),
(2,	1,	1,	NULL,	'aaaaaaa'),
(3,	1,	1,	NULL,	'wưqqqưqưqưqưqưqqwq'),
(4,	3,	2,	NULL,	'1231232312312'),
(5,	1,	2,	NULL,	'aaaaaa'),
(6,	1,	2,	NULL,	'aaaaaa'),
(7,	4,	2,	NULL,	'aaaaaa'),
(21,	1,	2,	NULL,	'aaaaaa'),
(22,	1,	2,	NULL,	'aaaaaa'),
(23,	1,	2,	NULL,	'aaaaaa'),
(24,	1,	2,	NULL,	'aaaaaa'),
(25,	1,	2,	NULL,	'aaaaaa'),
(26,	1,	2,	NULL,	'aaaaaa'),
(27,	1,	2,	NULL,	'aaaaaa'),
(28,	1,	2,	NULL,	'aaaaaa');

DROP TABLE IF EXISTS `hinh_anh`;
CREATE TABLE `hinh_anh` (
  `hinh_id` int NOT NULL AUTO_INCREMENT,
  `ten_hinh` varchar(255) DEFAULT NULL,
  `duong_dan` varchar(255) DEFAULT NULL,
  `mo_ta` varchar(255) DEFAULT NULL,
  `nguoi_dung_id` int DEFAULT NULL,
  PRIMARY KEY (`hinh_id`),
  KEY `nguoi_dung_id` (`nguoi_dung_id`),
  CONSTRAINT `hinh_anh_ibfk_1` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`nguoi_dung_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `hinh_anh` (`hinh_id`, `ten_hinh`, `duong_dan`, `mo_ta`, `nguoi_dung_id`) VALUES
(1,	'1682940362363_340770410_1418401762313066_1056989702900640444_n.jpg',	'aaaa',	'aaaa',	1),
(2,	'1682935667000_340770410_1418401762313066_1056989702900640444_n.jpg',	'aaaa',	'aaaa',	2),
(3,	'2222',	'22222',	'2222',	3),
(4,	'a2',	'aaaa',	'aaaa',	4);

DROP TABLE IF EXISTS `luu_anh`;
CREATE TABLE `luu_anh` (
  `nguoi_dung_id` int NOT NULL,
  `hinh_id` int NOT NULL,
  `ngay_luu` date DEFAULT NULL,
  PRIMARY KEY (`nguoi_dung_id`,`hinh_id`),
  KEY `hinh_id` (`hinh_id`),
  CONSTRAINT `luu_anh_ibfk_1` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`nguoi_dung_id`),
  CONSTRAINT `luu_anh_ibfk_2` FOREIGN KEY (`hinh_id`) REFERENCES `hinh_anh` (`hinh_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `luu_anh` (`nguoi_dung_id`, `hinh_id`, `ngay_luu`) VALUES
(1,	1,	NULL),
(1,	2,	NULL),
(2,	2,	NULL);

DROP TABLE IF EXISTS `nguoi_dung`;
CREATE TABLE `nguoi_dung` (
  `nguoi_dung_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `mat_khau` varchar(255) DEFAULT NULL,
  `ho_ten` varchar(255) DEFAULT NULL,
  `tuoi` int DEFAULT NULL,
  `anh_dai_dien` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`nguoi_dung_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `nguoi_dung` (`nguoi_dung_id`, `email`, `mat_khau`, `ho_ten`, `tuoi`, `anh_dai_dien`) VALUES
(1,	'sena@gmail',	'88888',	'join wick',	22,	'anh_join_but_chi'),
(2,	'sena@gmail',	'88888',	'join wick',	22,	'anh_join_but_chi'),
(3,	'join@gmail',	'1234',	'join wick',	30,	'anh_join_but_chi'),
(4,	'join@gmail',	'1234',	'join wick',	30,	'anh_join_but_chi'),
(5,	'join@gmail',	'1234',	'join wick',	30,	'anh_join_but_chi'),
(6,	'join@gmail',	'1234',	'join wick',	30,	'anh_join_but_chi'),
(7,	'join@gmail',	'1234',	'join wick',	30,	'anh_join_but_chi'),
(8,	'join@gmail',	'1234',	'join wick',	30,	'anh_join_but_chi'),
(9,	'join@gmail',	'123456',	'join wick',	30,	'anh_join_but_chi'),
(10,	'join@gmail',	'123456',	'join wick',	30,	'anh_join_but_chi'),
(11,	'join@gmail',	'123456',	'join wick',	30,	'anh_join_but_chi'),
(12,	'sena@gmail',	'88888',	'join wick',	22,	'anh_join_but_chi'),
(13,	'join@gmail',	'123456',	'join wick',	30,	'anh_join_but_chi'),
(14,	'join@gmail',	'123456',	'join wick',	30,	'anh_join_but_chi'),
(15,	'join@gmail',	'123456',	'join wick',	30,	'anh_join_but_chi'),
(27,	'join2@gmail',	'1234567',	'join wick',	22,	'anh_join_but_chi'),
(28,	'sena@gmail',	'1234567',	'join wick',	22,	'anh_join_but_chi'),
(29,	'sena@gmail',	'1234567',	'join wick',	22,	'anh_join_but_chi'),
(30,	'sena@gmail',	'1234567',	'join wick',	22,	'anh_join_but_chi'),
(31,	'sena@gmail',	'1234567',	'join wick',	22,	'anh_join_but_chi'),
(32,	'sena@gmail',	'1234567',	'join wick',	22,	'anh_join_but_chi'),
(33,	'sena@gmail',	'1234567',	'join wick',	22,	'anh_join_but_chi'),
(34,	'sena@gmail',	'1234567',	'join wick',	22,	'anh_join_but_chi'),
(35,	'sena@gmail',	'1234567',	'join wick',	22,	'anh_join_but_chi'),
(36,	'sena@gmail',	'1234567',	'join wick',	22,	'anh_join_but_chi'),
(37,	'sena@gmail',	'1234567',	NULL,	22,	'anh_join_but_chi'),
(38,	'sena@gmail',	'1234567',	'join wick',	22,	'anh_join_but_chi'),
(39,	'sena@gmail',	'1234567',	'join wick',	22,	'anh_join_but_chi'),
(40,	'sena@gmail',	'1234567',	'join wick',	22,	'anh_join_but_chi'),
(41,	'sena@gmail',	'1234567',	'join wick',	22,	'anh_join_but_chi'),
(42,	'sena@gmail',	'1234567',	'join wick',	22,	'anh_join_but_chi'),
(43,	'sena@gmail',	'1234567',	'join wick',	22,	'anh_join_but_chi'),
(44,	'sena@gmail',	'1234567',	'join wick',	22,	'anh_join_but_chi'),
(45,	'sena@gmail',	'1234567',	'join wick',	22,	'anh_join_but_chi'),
(46,	'sena@gmail',	'1234567',	'join wick',	22,	'anh_join_but_chi'),
(47,	'sena@gmail',	'1234567',	'join wick',	22,	'anh_join_but_chi'),
(48,	'sena@gmail',	'1234567',	'join wick',	22,	'anh_join_but_chi'),
(49,	'sena@gmail',	'1234567',	'join wick',	22,	'anh_join_but_chi'),
(50,	'sena@gmail',	'1234567',	'join wick',	22,	'anh_join_but_chi');

-- 2023-05-01 11:43:19
1