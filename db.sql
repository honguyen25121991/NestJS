-- Adminer 4.8.1 MySQL 8.0.32 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

CREATE DATABASE `db_user_upload_image` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_user_upload_image`;

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
(1,	'dasdsdadasda',	'localhost:3000/public/img/1683977499647_342815658_1377388623051133_7902821614612842902_n.jpg',	'dadsadasdas',	12),
(2,	'dasdsdadasda',	'localhost:3000/public/img/1683976702572_342815658_1377388623051133_7902821614612842902_n.jpg',	'dadsadasdas',	12),
(12,	'dasdsdadasda',	'localhost:3000/public/img/1683981902913_342815658_1377388623051133_7902821614612842902_n.jpg',	'dadsadasdas',	12),
(13,	'string11111',	'string11111',	'string111111',	2),
(14,	'conmeo_cam_dao',	'string11111',	'string111111',	2),
(15,	'conmeo_cam_dao',	'string11111',	'string111111',	2),
(16,	NULL,	NULL,	NULL,	2),
(17,	'conmeo_cam_dao',	'string11111',	'string111111',	2),
(18,	'conmeo_cam_dao',	'string11111',	'string111111',	2),
(19,	'conmeo_cam_dao',	'localhost:3000/public/img/conmeo_cam_dao',	'string111111',	2),
(20,	'conmeo_cam_dao',	'localhost:3000/public/img/conmeo_cam_dao',	'string111111',	2),
(21,	'conmeo_cam_dao',	'localhost:3000/public/img/conmeo_cam_dao',	'string111111',	2),
(22,	'conmeo_cam_dao',	'localhost:3000/public/img/conmeo_cam_dao',	'string111111',	2),
(23,	'conmeo_cam_dao',	'localhost:3000/public/img/conmeo_cam_dao',	'string111111',	2),
(24,	'conmeo_cam_dao',	'localhost:3000/public/img/conmeo_cam_dao',	'string111111',	2),
(25,	'conmeo_cam_dao',	'localhost:3000/public/img/conmeo_cam_dao',	'string111111',	2),
(26,	'conmeo_cam_dao',	'localhost:3000/public/img/conmeo_cam_dao',	'string111111',	2),
(27,	'conmeo_cam_dao',	'localhost:3000/public/img/conmeo_cam_dao',	'string111111',	2),
(28,	NULL,	'localhost:3000/public/img/undefined',	NULL,	2),
(29,	'dsadsdasds',	'localhost:3000/public/img/dsadsdasds',	NULL,	2),
(30,	'dsadsdasds',	'localhost:3000/public/img/dsadsdasds',	'dsadsda',	2),
(31,	NULL,	NULL,	NULL,	2),
(32,	NULL,	NULL,	NULL,	2),
(33,	NULL,	NULL,	NULL,	2),
(34,	NULL,	NULL,	NULL,	2),
(35,	'dsadsdasds',	'localhost:3000/public/img/dsadsdasds',	'dsadsda',	2),
(36,	'2 con meo',	'localhost:3000/public/img/2 con meo',	'dsadsda',	2),
(37,	'2 con meo',	'localhost:3000/public/img/2 con meo',	'dsadsda',	2),
(38,	'2 con meo',	'localhost:3000/public/img/2 con meo',	'dsadsda',	2),
(39,	'2 con meo',	'localhost:3000/public/img/1683972472970_342815658_1377388623051133_7902821614612842902_n.jpg',	'dsadsda',	2),
(40,	'2 con meo',	'localhost:3000/public/img/1683972503107_aDUehIXwGBeG2WK5xUUT_62149c41d613f_cvtpl.jpg',	'dsadsda',	2),
(41,	'2 con meo',	'localhost:3000/public/img/1683972683073_aDUehIXwGBeG2WK5xUUT_62149c41d613f_cvtpl.jpg',	'dsadsda',	2),
(42,	'2 con meo',	'localhost:3000/public/img/1683972689867_aDUehIXwGBeG2WK5xUUT_62149c41d613f_cvtpl.jpg',	'dsadsda',	2),
(43,	'2 con meo',	'localhost:3000/public/img/1683973545941_aDUehIXwGBeG2WK5xUUT_62149c41d613f_cvtpl.jpg',	'dsadsda',	2),
(44,	'2 con meo',	'localhost:3000/public/img/1683973643299_aDUehIXwGBeG2WK5xUUT_62149c41d613f_cvtpl.jpg',	'dsadsda',	2),
(45,	'2 con meo',	'localhost:3000/public/img/1683973674533_aDUehIXwGBeG2WK5xUUT_62149c41d613f_cvtpl.jpg',	'dsadsda',	2),
(46,	'2 con meo',	'localhost:3000/public/img/1683973679110_aDUehIXwGBeG2WK5xUUT_62149c41d613f_cvtpl.jpg',	'dsadsda',	2),
(47,	NULL,	'localhost:3000/public/img/1683973745948_aDUehIXwGBeG2WK5xUUT_62149c41d613f_cvtpl.jpg',	'dsadsda',	2),
(48,	'2 con meo',	'localhost:3000/public/img/1683973751187_aDUehIXwGBeG2WK5xUUT_62149c41d613f_cvtpl.jpg',	'dsadsda',	2),
(49,	'2 con meo',	'localhost:3000/public/img/1683974859118_aDUehIXwGBeG2WK5xUUT_62149c41d613f_cvtpl.jpg',	'dsadsda',	2),
(50,	'2 con meo',	'localhost:3000/public/img/1683975873760_aDUehIXwGBeG2WK5xUUT_62149c41d613f_cvtpl.jpg',	'dsadsda',	2),
(51,	'2 con meo',	'localhost:3000/public/img/1683976052679_aDUehIXwGBeG2WK5xUUT_62149c41d613f_cvtpl.jpg',	'dsadsda',	2),
(52,	'2 con meo',	'localhost:3000/public/img/1683976189547_aDUehIXwGBeG2WK5xUUT_62149c41d613f_cvtpl.jpg',	'dsadsda',	2),
(53,	'2 con meo',	'localhost:3000/public/img/1683981873633_aDUehIXwGBeG2WK5xUUT_62149c41d613f_cvtpl.jpg',	'dsadsda',	2),
(54,	'2 con meo',	'localhost:3000/public/img/1683981885080_340770410_1418401762313066_1056989702900640444_n.jpg',	'dsadsdac',	2);

-- 2023-05-13 12:50:01
1