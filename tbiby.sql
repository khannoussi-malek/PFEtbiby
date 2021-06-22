-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 21, 2021 at 10:01 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tbiby`
--

-- --------------------------------------------------------

--
-- Table structure for table `acte`
--

CREATE TABLE `acte` (
  `id` int(10) UNSIGNED NOT NULL,
  `consultation_id` int(10) UNSIGNED DEFAULT NULL,
  `medecin_id` int(10) UNSIGNED DEFAULT NULL,
  `patient_id` int(10) UNSIGNED DEFAULT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `designation` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `prix` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `note` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `acte`
--

INSERT INTO `acte` (`id`, `consultation_id`, `medecin_id`, `patient_id`, `code`, `designation`, `prix`, `note`, `created_at`, `updated_at`) VALUES
(1, 1, 4, 2, 'MAB020020', 'Un os de l\'avant-bras : extrémité inférieure (avec ou sans fracture associée de l\'autre styloide) diaphyse ou extrémité supérieure', '40.000', NULL, '2021-06-19 13:43:21', NULL),
(2, 2, 6, 2, NULL, NULL, NULL, NULL, '2021-06-19 13:55:43', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `antecedants`
--

CREATE TABLE `antecedants` (
  `id` int(10) UNSIGNED NOT NULL,
  `patient_id` int(10) UNSIGNED DEFAULT NULL,
  `medecin_id` int(10) UNSIGNED DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `antecedants`
--

INSERT INTO `antecedants` (`id`, `patient_id`, `medecin_id`, `type`, `description`, `created_at`, `updated_at`) VALUES
(1, 2, 4, 'pollens', 'utilisation d\'alargix CETIRIZINE 10MG CPR SEC 7', '2021-06-19 13:43:21', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `certificat`
--

CREATE TABLE `certificat` (
  `id` int(10) UNSIGNED NOT NULL,
  `patient_id` int(10) UNSIGNED DEFAULT NULL,
  `medecin_id` int(10) UNSIGNED DEFAULT NULL,
  `structure` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `consultation_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `certificat`
--

INSERT INTO `certificat` (`id`, `patient_id`, `medecin_id`, `structure`, `consultation_id`, `created_at`, `updated_at`) VALUES
(1, 2, 4, '<p style=\"text-align: center;\"><span style=\"font-family: Impact; font-size: 18px;\">CERTIFICAT MEDICAL&nbsp;</span></p><p style=\"text-align: center;\"><span style=\"font-size: 11px;\"><span style=\"font-family: Impact; font-size: 12px;\">​</span></span><span style=\"font-family: Impact; font-size: 18px;\">DE NON CONTRE-INDICATION A LA PRATIQUE DU SPORT</span></p><p>Je soussigné(e),&nbsp;<span class=\"se-custom-tag\">Mr.&nbsp;<span class=\"se-custom-tag\">khannoussi malek&nbsp;</span></span></p><p><span class=\"se-custom-tag\"><span class=\"se-custom-tag\">Docteur en Médecine, certifie avoir examiné&nbsp;<span class=\"se-custom-tag\">Mrs.&nbsp;<span class=\"se-custom-tag\">ben daoued sarah né le&nbsp; <span class=\"se-custom-tag\">1997-12-02</span>​&nbsp;<span class=\"se-custom-tag\">et avoir constaté, ce jour, l’absence de signe clinique décelable contre-indiquant lapratique de la course à pied en compétition.</span>​</span>​</span>​</span></span></p><p><span class=\"se-custom-tag\">​</span></p><p><br></p><p><br></p><p>Signature et Cachet du Médecin​<br></p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; .<br></p>', 1, '2021-06-19 13:43:21', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `certificat_type`
--

CREATE TABLE `certificat_type` (
  `id` int(10) UNSIGNED NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `structure` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cms_users_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `certificat_type`
--

INSERT INTO `certificat_type` (`id`, `type`, `structure`, `cms_users_id`, `created_at`, `updated_at`) VALUES
(1, 'sport', '<p style=\"text-align: center;\"><span style=\"font-family: Impact; font-size: 18px;\">CERTIFICAT MEDICAL&nbsp;</span></p><p style=\"text-align: center;\"><span style=\"font-size: 11px;\"><span style=\"font-family: Impact; font-size: 12px;\">​</span></span><span style=\"font-family: Impact; font-size: 18px;\">DE NON CONTRE-INDICATION A LA PRATIQUE DU SPORT</span></p><p>Je soussigné(e),&nbsp;<span class=\"se-custom-tag\">{sexesmedecin}&nbsp;<span class=\"se-custom-tag\">{medecinNomPrenom}&nbsp;</span></span></p><p><span class=\"se-custom-tag\"><span class=\"se-custom-tag\">Docteur en Médecine, certifie avoir examiné&nbsp;<span class=\"se-custom-tag\">{sexesPatient}&nbsp;<span class=\"se-custom-tag\">{patientNomPrenom} né le&nbsp; <span class=\"se-custom-tag\">{datePatient}</span>​&nbsp;<span class=\"se-custom-tag\">et avoir constaté, ce jour, l’absence de signe clinique décelable contre-indiquant lapratique de la course à pied en compétition.</span>​</span>​</span>​</span></span></p><p><span class=\"se-custom-tag\">​</span></p><p><br></p><p><br></p><p>Signature et Cachet du Médecin​<br></p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; .<br></p>', 4, '2021-06-19 13:18:36', '2021-06-19 13:32:10');

-- --------------------------------------------------------

--
-- Table structure for table `cms_apicustom`
--

CREATE TABLE `cms_apicustom` (
  `id` int(10) UNSIGNED NOT NULL,
  `permalink` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tabel` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `aksi` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `kolom` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `orderby` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sub_query_1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sql_where` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `keterangan` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parameter` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `method_type` varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parameters` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `responses` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cms_apicustom`
--

INSERT INTO `cms_apicustom` (`id`, `permalink`, `tabel`, `aksi`, `kolom`, `orderby`, `sub_query_1`, `sql_where`, `nama`, `keterangan`, `parameter`, `created_at`, `updated_at`, `method_type`, `parameters`, `responses`) VALUES
(1, 'login', 'cms_users', 'detail', NULL, NULL, NULL, NULL, 'login', NULL, NULL, NULL, NULL, 'post', 'a:2:{i:0;a:5:{s:4:\"name\";s:4:\"user\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"0\";s:4:\"used\";s:1:\"0\";}i:1;a:5:{s:4:\"name\";s:8:\"password\";s:4:\"type\";s:8:\"password\";s:6:\"config\";N;s:8:\"required\";s:1:\"0\";s:4:\"used\";s:1:\"0\";}}', 'a:13:{i:0;a:4:{s:4:\"name\";s:2:\"id\";s:4:\"type\";s:3:\"int\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:1;a:4:{s:4:\"name\";s:3:\"nom\";s:4:\"type\";s:6:\"string\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:2;a:4:{s:4:\"name\";s:6:\"prenom\";s:4:\"type\";s:6:\"string\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:3;a:4:{s:4:\"name\";s:9:\"telephone\";s:4:\"type\";s:6:\"string\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:4;a:4:{s:4:\"name\";s:5:\"photo\";s:4:\"type\";s:5:\"image\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:5;a:4:{s:4:\"name\";s:5:\"email\";s:4:\"type\";s:5:\"email\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:6;a:4:{s:4:\"name\";s:3:\"cin\";s:4:\"type\";s:6:\"string\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:7;a:4:{s:4:\"name\";s:8:\"password\";s:4:\"type\";s:8:\"password\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:8;a:4:{s:4:\"name\";s:17:\"id_cms_privileges\";s:4:\"type\";s:7:\"integer\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:9;a:4:{s:4:\"name\";s:19:\"cms_privileges_name\";s:4:\"type\";s:6:\"string\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:10;a:4:{s:4:\"name\";s:28:\"cms_privileges_is_superadmin\";s:4:\"type\";s:7:\"tinyint\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:11;a:4:{s:4:\"name\";s:26:\"cms_privileges_theme_color\";s:4:\"type\";s:6:\"string\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:12;a:4:{s:4:\"name\";s:6:\"status\";s:4:\"type\";s:6:\"string\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}}'),
(2, 'singup', 'cms_users', 'save_add', NULL, NULL, NULL, NULL, 'singup', NULL, NULL, NULL, NULL, 'post', 'a:1:{i:0;a:5:{s:4:\"name\";s:3:\"nom\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"0\";s:4:\"used\";s:1:\"0\";}}', 'a:13:{i:0;a:4:{s:4:\"name\";s:2:\"id\";s:4:\"type\";s:3:\"int\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:1;a:4:{s:4:\"name\";s:3:\"nom\";s:4:\"type\";s:6:\"string\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:2;a:4:{s:4:\"name\";s:6:\"prenom\";s:4:\"type\";s:6:\"string\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:3;a:4:{s:4:\"name\";s:9:\"telephone\";s:4:\"type\";s:6:\"string\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:4;a:4:{s:4:\"name\";s:5:\"photo\";s:4:\"type\";s:5:\"image\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:5;a:4:{s:4:\"name\";s:5:\"email\";s:4:\"type\";s:5:\"email\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:6;a:4:{s:4:\"name\";s:3:\"cin\";s:4:\"type\";s:6:\"string\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:7;a:4:{s:4:\"name\";s:8:\"password\";s:4:\"type\";s:8:\"password\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:8;a:4:{s:4:\"name\";s:17:\"id_cms_privileges\";s:4:\"type\";s:7:\"integer\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:9;a:4:{s:4:\"name\";s:19:\"cms_privileges_name\";s:4:\"type\";s:6:\"string\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:10;a:4:{s:4:\"name\";s:28:\"cms_privileges_is_superadmin\";s:4:\"type\";s:7:\"tinyint\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:11;a:4:{s:4:\"name\";s:26:\"cms_privileges_theme_color\";s:4:\"type\";s:6:\"string\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:12;a:4:{s:4:\"name\";s:6:\"status\";s:4:\"type\";s:6:\"string\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}}'),
(3, 'rmp', 'relation', 'detail', NULL, NULL, NULL, NULL, 'relation medicine patient', NULL, NULL, NULL, NULL, 'post', 'a:2:{i:0;a:5:{s:4:\"name\";s:10:\"patient_id\";s:4:\"type\";s:7:\"integer\";s:6:\"config\";N;s:8:\"required\";s:1:\"0\";s:4:\"used\";s:1:\"0\";}i:1;a:5:{s:4:\"name\";s:10:\"medecin_id\";s:4:\"type\";s:7:\"integer\";s:6:\"config\";N;s:8:\"required\";s:1:\"0\";s:4:\"used\";s:1:\"0\";}}', 'a:3:{i:0;a:4:{s:4:\"name\";s:2:\"id\";s:4:\"type\";s:3:\"int\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:1;a:4:{s:4:\"name\";s:10:\"patient_id\";s:4:\"type\";s:7:\"integer\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:2;a:4:{s:4:\"name\";s:10:\"medecin_id\";s:4:\"type\";s:7:\"integer\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}}'),
(4, 'lrmp', 'relation', 'list', NULL, NULL, NULL, NULL, 'liste relation medicine patient', NULL, NULL, NULL, NULL, 'get', 'a:2:{i:0;a:5:{s:4:\"name\";s:10:\"patient_id\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"0\";s:4:\"used\";s:1:\"0\";}i:1;a:5:{s:4:\"name\";s:10:\"medecin_id\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"0\";s:4:\"used\";s:1:\"0\";}}', 'a:3:{i:0;a:4:{s:4:\"name\";s:2:\"id\";s:4:\"type\";s:3:\"int\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:1;a:4:{s:4:\"name\";s:10:\"patient_id\";s:4:\"type\";s:7:\"integer\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:2;a:4:{s:4:\"name\";s:10:\"medecin_id\";s:4:\"type\";s:7:\"integer\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}}'),
(5, 'listpatientdashboard', 'relation', 'list', NULL, NULL, NULL, NULL, 'ListPatientDashboard', NULL, NULL, NULL, NULL, 'get', 'a:1:{i:0;a:5:{s:4:\"name\";s:10:\"medecin_id\";s:4:\"type\";s:7:\"integer\";s:6:\"config\";N;s:8:\"required\";s:1:\"0\";s:4:\"used\";s:1:\"0\";}}', 'a:3:{i:0;a:4:{s:4:\"name\";s:2:\"id\";s:4:\"type\";s:3:\"int\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:1;a:4:{s:4:\"name\";s:10:\"patient_id\";s:4:\"type\";s:7:\"integer\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:2;a:4:{s:4:\"name\";s:10:\"medecin_id\";s:4:\"type\";s:7:\"integer\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}}'),
(6, 'cr', 'rendez_vous', 'save_add', NULL, NULL, NULL, NULL, 'cr', NULL, NULL, NULL, NULL, 'post', 'a:4:{i:0;a:5:{s:4:\"name\";s:10:\"patient_id\";s:4:\"type\";s:7:\"integer\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}i:1;a:5:{s:4:\"name\";s:10:\"medecin_id\";s:4:\"type\";s:7:\"integer\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}i:2;a:5:{s:4:\"name\";s:4:\"etat\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}i:3;a:5:{s:4:\"name\";s:16:\"date_reservation\";s:4:\"type\";s:23:\"date_format:Y-m-d H:i:s\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}}', 'a:7:{i:0;a:4:{s:4:\"name\";s:2:\"id\";s:4:\"type\";s:3:\"int\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:1;a:4:{s:4:\"name\";s:10:\"patient_id\";s:4:\"type\";s:7:\"integer\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:2;a:4:{s:4:\"name\";s:10:\"medecin_id\";s:4:\"type\";s:7:\"integer\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:3;a:4:{s:4:\"name\";s:4:\"etat\";s:4:\"type\";s:6:\"string\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:4;a:4:{s:4:\"name\";s:17:\"date_réservation\";s:4:\"type\";s:23:\"date_format:Y-m-d H:i:s\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:5;a:4:{s:4:\"name\";s:16:\"date_acceptation\";s:4:\"type\";s:23:\"date_format:Y-m-d H:i:s\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:6;a:4:{s:4:\"name\";s:12:\"date_dentré\";s:4:\"type\";s:23:\"date_format:Y-m-d H:i:s\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}}'),
(7, 'listrm', 'rendez_vous', 'list', NULL, NULL, NULL, NULL, 'list rendez vous medecine', NULL, NULL, NULL, NULL, 'get', 'a:1:{i:0;a:5:{s:4:\"name\";s:10:\"medecin_id\";s:4:\"type\";s:7:\"integer\";s:6:\"config\";N;s:8:\"required\";s:1:\"0\";s:4:\"used\";s:1:\"0\";}}', 'a:7:{i:0;a:4:{s:4:\"name\";s:2:\"id\";s:4:\"type\";s:3:\"int\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:1;a:4:{s:4:\"name\";s:10:\"patient_id\";s:4:\"type\";s:7:\"integer\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:2;a:4:{s:4:\"name\";s:10:\"medecin_id\";s:4:\"type\";s:7:\"integer\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:3;a:4:{s:4:\"name\";s:4:\"etat\";s:4:\"type\";s:6:\"string\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:4;a:4:{s:4:\"name\";s:16:\"date_reservation\";s:4:\"type\";s:23:\"date_format:Y-m-d H:i:s\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:5;a:4:{s:4:\"name\";s:16:\"date_acceptation\";s:4:\"type\";s:23:\"date_format:Y-m-d H:i:s\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:6;a:4:{s:4:\"name\";s:12:\"date_dentré\";s:4:\"type\";s:23:\"date_format:Y-m-d H:i:s\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}}'),
(8, 'updater', 'rendez_vous', 'save_edit', NULL, NULL, NULL, NULL, 'updaterendez_vous', NULL, NULL, NULL, NULL, 'post', 'a:2:{i:0;a:5:{s:4:\"name\";s:2:\"id\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}i:1;a:5:{s:4:\"name\";s:16:\"date_reservation\";s:4:\"type\";s:23:\"date_format:Y-m-d H:i:s\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}}', 'a:7:{i:0;a:4:{s:4:\"name\";s:2:\"id\";s:4:\"type\";s:3:\"int\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:1;a:4:{s:4:\"name\";s:10:\"patient_id\";s:4:\"type\";s:7:\"integer\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:2;a:4:{s:4:\"name\";s:10:\"medecin_id\";s:4:\"type\";s:7:\"integer\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:3;a:4:{s:4:\"name\";s:4:\"etat\";s:4:\"type\";s:6:\"string\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:4;a:4:{s:4:\"name\";s:16:\"date_reservation\";s:4:\"type\";s:23:\"date_format:Y-m-d H:i:s\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:5;a:4:{s:4:\"name\";s:16:\"date_acceptation\";s:4:\"type\";s:23:\"date_format:Y-m-d H:i:s\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:6;a:4:{s:4:\"name\";s:12:\"date_dentré\";s:4:\"type\";s:23:\"date_format:Y-m-d H:i:s\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}}'),
(9, 'deleter', 'rendez_vous', 'delete', NULL, NULL, NULL, NULL, 'deleterendez_vous', NULL, NULL, NULL, NULL, 'post', 'a:1:{i:0;a:5:{s:4:\"name\";s:2:\"id\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}}', 'a:7:{i:0;a:4:{s:4:\"name\";s:2:\"id\";s:4:\"type\";s:3:\"int\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:1;a:4:{s:4:\"name\";s:10:\"patient_id\";s:4:\"type\";s:7:\"integer\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:2;a:4:{s:4:\"name\";s:10:\"medecin_id\";s:4:\"type\";s:7:\"integer\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:3;a:4:{s:4:\"name\";s:4:\"etat\";s:4:\"type\";s:6:\"string\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:4;a:4:{s:4:\"name\";s:16:\"date_reservation\";s:4:\"type\";s:23:\"date_format:Y-m-d H:i:s\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:5;a:4:{s:4:\"name\";s:16:\"date_acceptation\";s:4:\"type\";s:23:\"date_format:Y-m-d H:i:s\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:6;a:4:{s:4:\"name\";s:12:\"date_dentré\";s:4:\"type\";s:23:\"date_format:Y-m-d H:i:s\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}}'),
(10, 'lrd', 'rendez_vous', 'list', NULL, NULL, NULL, NULL, 'List ReservationDashboard', NULL, NULL, NULL, NULL, 'get', 'a:1:{i:0;a:5:{s:4:\"name\";s:10:\"patient_id\";s:4:\"type\";s:7:\"integer\";s:6:\"config\";N;s:8:\"required\";s:1:\"0\";s:4:\"used\";s:1:\"0\";}}', 'a:7:{i:0;a:4:{s:4:\"name\";s:2:\"id\";s:4:\"type\";s:3:\"int\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:1;a:4:{s:4:\"name\";s:10:\"patient_id\";s:4:\"type\";s:7:\"integer\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:2;a:4:{s:4:\"name\";s:10:\"medecin_id\";s:4:\"type\";s:7:\"integer\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:3;a:4:{s:4:\"name\";s:4:\"etat\";s:4:\"type\";s:6:\"string\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:4;a:4:{s:4:\"name\";s:16:\"date_reservation\";s:4:\"type\";s:23:\"date_format:Y-m-d H:i:s\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:5;a:4:{s:4:\"name\";s:16:\"date_acceptation\";s:4:\"type\";s:23:\"date_format:Y-m-d H:i:s\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:6;a:4:{s:4:\"name\";s:12:\"date_dentré\";s:4:\"type\";s:23:\"date_format:Y-m-d H:i:s\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}}'),
(11, 'cp', 'rendez_vous', 'list', NULL, NULL, NULL, NULL, 'Consultation Patient', NULL, NULL, NULL, NULL, 'get', 'a:1:{i:0;a:5:{s:4:\"name\";s:10:\"patient_id\";s:4:\"type\";s:7:\"integer\";s:6:\"config\";N;s:8:\"required\";s:1:\"0\";s:4:\"used\";s:1:\"0\";}}', 'a:7:{i:0;a:4:{s:4:\"name\";s:2:\"id\";s:4:\"type\";s:3:\"int\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:1;a:4:{s:4:\"name\";s:10:\"patient_id\";s:4:\"type\";s:7:\"integer\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:2;a:4:{s:4:\"name\";s:10:\"medecin_id\";s:4:\"type\";s:7:\"integer\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:3;a:4:{s:4:\"name\";s:4:\"etat\";s:4:\"type\";s:6:\"string\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:4;a:4:{s:4:\"name\";s:16:\"date_reservation\";s:4:\"type\";s:23:\"date_format:Y-m-d H:i:s\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:5;a:4:{s:4:\"name\";s:16:\"date_acceptation\";s:4:\"type\";s:23:\"date_format:Y-m-d H:i:s\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:6;a:4:{s:4:\"name\";s:12:\"date_dentré\";s:4:\"type\";s:23:\"date_format:Y-m-d H:i:s\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}}'),
(12, 'pm', 'relation', 'list', NULL, NULL, NULL, NULL, 'realation patien medecin', NULL, NULL, NULL, NULL, 'get', 'a:1:{i:0;a:5:{s:4:\"name\";s:10:\"patient_id\";s:4:\"type\";s:7:\"integer\";s:6:\"config\";N;s:8:\"required\";s:1:\"0\";s:4:\"used\";s:1:\"0\";}}', 'a:3:{i:0;a:4:{s:4:\"name\";s:2:\"id\";s:4:\"type\";s:3:\"int\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:1;a:4:{s:4:\"name\";s:10:\"patient_id\";s:4:\"type\";s:7:\"integer\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:2;a:4:{s:4:\"name\";s:10:\"medecin_id\";s:4:\"type\";s:7:\"integer\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}}'),
(13, 'pe', 'rendez_vous', 'save_edit', NULL, NULL, NULL, NULL, 'patient entrer', NULL, NULL, NULL, NULL, 'post', 'a:2:{i:0;a:5:{s:4:\"name\";s:2:\"id\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}i:1;a:5:{s:4:\"name\";s:4:\"etat\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}}', 'a:7:{i:0;a:4:{s:4:\"name\";s:2:\"id\";s:4:\"type\";s:3:\"int\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:1;a:4:{s:4:\"name\";s:10:\"patient_id\";s:4:\"type\";s:7:\"integer\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:2;a:4:{s:4:\"name\";s:10:\"medecin_id\";s:4:\"type\";s:7:\"integer\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:3;a:4:{s:4:\"name\";s:4:\"etat\";s:4:\"type\";s:6:\"string\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:4;a:4:{s:4:\"name\";s:16:\"date_reservation\";s:4:\"type\";s:23:\"date_format:Y-m-d H:i:s\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:5;a:4:{s:4:\"name\";s:16:\"date_acceptation\";s:4:\"type\";s:23:\"date_format:Y-m-d H:i:s\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:6;a:4:{s:4:\"name\";s:12:\"date_dentré\";s:4:\"type\";s:23:\"date_format:Y-m-d H:i:s\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}}'),
(14, 'pdcm', 'rendez_vous', 'list', NULL, NULL, NULL, NULL, 'liste patient donneé consultation de médecine', NULL, NULL, NULL, NULL, 'get', 'a:0:{}', 'a:0:{}'),
(15, 'sptwr', 'rendez_vous', 'save_edit', NULL, NULL, NULL, NULL, 'send patient to waiting room', NULL, NULL, NULL, NULL, 'post', 'a:2:{i:0;a:5:{s:4:\"name\";s:2:\"id\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}i:1;a:5:{s:4:\"name\";s:4:\"etat\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}}', 'a:0:{}'),
(16, 'ucp', 'cms_users', 'save_edit', NULL, NULL, NULL, NULL, 'update compte patient', NULL, NULL, NULL, NULL, 'post', 'a:1:{i:0;a:5:{s:4:\"name\";s:2:\"id\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}}', 'a:0:{}'),
(17, 'antecedants', 'antecedants', 'list', NULL, NULL, NULL, NULL, 'Antecedants', NULL, NULL, NULL, NULL, 'get', 'a:1:{i:0;a:5:{s:4:\"name\";s:10:\"patient_id\";s:4:\"type\";s:7:\"integer\";s:6:\"config\";N;s:8:\"required\";s:1:\"0\";s:4:\"used\";s:1:\"0\";}}', 'a:0:{}'),
(18, 'medecininfo', 'cms_users', 'detail', NULL, NULL, NULL, NULL, 'Informations Sur Le Medecin', NULL, NULL, NULL, NULL, 'get', 'a:1:{i:0;a:5:{s:4:\"name\";s:2:\"id\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}}', 'a:0:{}'),
(19, 'addct', 'certificat_type', 'save_add', NULL, NULL, NULL, NULL, 'add certificat type', NULL, NULL, NULL, NULL, 'post', 'a:2:{i:0;a:5:{s:4:\"name\";s:4:\"type\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}i:1;a:5:{s:4:\"name\";s:9:\"structure\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}}', 'a:3:{i:0;a:4:{s:4:\"name\";s:2:\"id\";s:4:\"type\";s:3:\"int\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:1;a:4:{s:4:\"name\";s:4:\"type\";s:4:\"type\";s:6:\"string\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:2;a:4:{s:4:\"name\";s:9:\"structure\";s:4:\"type\";s:8:\"longtext\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}}'),
(20, 'gc', 'certificat_type', 'list', NULL, NULL, NULL, NULL, 'get certificat', NULL, NULL, NULL, NULL, 'get', 'a:0:{}', 'a:0:{}'),
(21, 'dom', 'domaine', 'list', NULL, NULL, NULL, NULL, 'domaine', NULL, NULL, NULL, NULL, 'get', 'a:0:{}', 'a:0:{}'),
(22, 'sousdom', 'sous_domaine', 'list', NULL, NULL, NULL, NULL, 'domaine', NULL, NULL, NULL, NULL, 'get', 'a:0:{}', 'a:0:{}'),
(23, 'gcf', 'cms_users', 'detail', NULL, NULL, NULL, NULL, 'charge the forme of \"gestion de compte\"', NULL, NULL, NULL, NULL, 'get', 'a:1:{i:0;a:5:{s:4:\"name\";s:2:\"id\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}}', 'a:0:{}'),
(24, 'rmpp', 'cms_users', 'save_edit', NULL, NULL, NULL, NULL, 'remove profile photo', NULL, NULL, NULL, NULL, 'post', 'a:1:{i:0;a:5:{s:4:\"name\";s:2:\"id\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}}', 'a:0:{}'),
(25, 'ltc', 'certificat_type', 'list', NULL, NULL, NULL, NULL, 'list Type Certificat', NULL, NULL, NULL, NULL, 'get', 'a:1:{i:0;a:5:{s:4:\"name\";s:2:\"id\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"0\";s:4:\"used\";s:1:\"0\";}}', 'a:0:{}'),
(26, 'notification', 'cms_notifications', 'list', NULL, NULL, NULL, NULL, 'get all notification', NULL, NULL, NULL, NULL, 'get', 'a:0:{}', 'a:0:{}'),
(27, 'rmnot', 'cms_notifications', 'save_edit', NULL, NULL, NULL, NULL, 'remove one notification', NULL, NULL, NULL, NULL, 'post', 'a:1:{i:0;a:5:{s:4:\"name\";s:2:\"id\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"0\";s:4:\"used\";s:1:\"0\";}}', 'a:0:{}'),
(28, 'rmanotif', 'cms_notifications', 'save_edit', NULL, NULL, NULL, NULL, 'remove all notification of one user', NULL, NULL, NULL, NULL, 'post', 'a:1:{i:0;a:5:{s:4:\"name\";s:2:\"id\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"0\";s:4:\"used\";s:1:\"0\";}}', 'a:0:{}'),
(29, 'vnotif', 'cms_notifications', 'save_edit', NULL, NULL, NULL, NULL, 'see one notification', NULL, NULL, NULL, NULL, 'post', 'a:1:{i:0;a:5:{s:4:\"name\";s:2:\"id\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"0\";s:4:\"used\";s:1:\"0\";}}', 'a:0:{}'),
(30, 'uct', 'certificat_type', 'save_edit', NULL, NULL, NULL, NULL, 'update type certificat', NULL, NULL, NULL, NULL, 'post', 'a:4:{i:0;a:5:{s:4:\"name\";s:2:\"id\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}i:1;a:5:{s:4:\"name\";s:4:\"type\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}i:2;a:5:{s:4:\"name\";s:9:\"structure\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}i:3;a:5:{s:4:\"name\";s:12:\"cms_users_id\";s:4:\"type\";s:7:\"integer\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}}', 'a:0:{}'),
(31, 'ad', 'domaine', 'save_add', NULL, NULL, NULL, NULL, 'add domine', NULL, NULL, NULL, NULL, 'post', 'a:1:{i:0;a:5:{s:4:\"name\";s:3:\"nom\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}}', 'a:0:{}'),
(32, 'asd', 'sous_domaine', 'save_add', NULL, NULL, NULL, NULL, 'add sous domaine', NULL, NULL, NULL, NULL, 'post', 'a:2:{i:0;a:5:{s:4:\"name\";s:10:\"domaine_id\";s:4:\"type\";s:7:\"integer\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}i:1;a:5:{s:4:\"name\";s:3:\"nom\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}}', 'a:0:{}'),
(33, 'consultation', 'consultation', 'list', NULL, NULL, NULL, NULL, 'add consultation', NULL, NULL, NULL, NULL, 'post', 'a:0:{}', 'a:0:{}'),
(34, 'hc', 'certificat', 'list', NULL, NULL, NULL, NULL, 'historique certificat', NULL, NULL, NULL, NULL, 'get', 'a:0:{}', 'a:0:{}'),
(35, 'hact', 'acte', 'list', NULL, NULL, NULL, NULL, 'historique acte ', NULL, NULL, NULL, NULL, 'get', 'a:0:{}', 'a:0:{}'),
(36, 'hant', 'antecedants', 'list', NULL, NULL, NULL, NULL, 'historique antecedant', NULL, NULL, NULL, NULL, 'get', 'a:0:{}', 'a:0:{}'),
(37, 'hex', 'examen', 'list', NULL, NULL, NULL, NULL, 'historique examen', NULL, NULL, NULL, NULL, 'get', 'a:0:{}', 'a:0:{}'),
(38, 'hor', 'ordonnance', 'list', NULL, NULL, NULL, NULL, 'historique ordonnance', NULL, NULL, NULL, NULL, 'get', 'a:0:{}', 'a:0:{}'),
(39, 'hl', 'lettre', 'list', NULL, NULL, NULL, NULL, 'historique lettre', NULL, NULL, NULL, NULL, 'get', 'a:0:{}', 'a:0:{}'),
(40, 'tm', 'cms_users', 'list', NULL, NULL, NULL, NULL, 'Trouver un médecin', NULL, NULL, NULL, NULL, 'get', 'a:0:{}', 'a:0:{}'),
(41, 'lrde', 'rendez_vous', 'list', NULL, NULL, NULL, NULL, 'liste rendez_vous en ligne', NULL, NULL, NULL, NULL, 'get', 'a:0:{}', 'a:0:{}'),
(42, 'pcr', 'rendez_vous', 'save_add', NULL, NULL, NULL, NULL, 'Patient Create Reservation', NULL, NULL, NULL, NULL, 'post', 'a:4:{i:0;a:5:{s:4:\"name\";s:10:\"patient_id\";s:4:\"type\";s:7:\"integer\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}i:1;a:5:{s:4:\"name\";s:10:\"medecin_id\";s:4:\"type\";s:7:\"integer\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}i:2;a:5:{s:4:\"name\";s:4:\"etat\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}i:3;a:5:{s:4:\"name\";s:16:\"date_reservation\";s:4:\"type\";s:23:\"date_format:Y-m-d H:i:s\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}}', 'a:0:{}'),
(43, 'vr', 'rendez_vous', 'list', NULL, NULL, NULL, NULL, 'valider un rendez vous', NULL, NULL, NULL, NULL, 'get', 'a:0:{}', 'a:0:{}'),
(44, 'add_act', 'liste_actes', 'save_add', NULL, NULL, NULL, NULL, 'add act', NULL, NULL, NULL, NULL, 'post', 'a:3:{i:0;a:5:{s:4:\"name\";s:4:\"code\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}i:1;a:5:{s:4:\"name\";s:11:\"designation\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}i:2;a:5:{s:4:\"name\";s:5:\"price\";s:4:\"type\";s:7:\"numeric\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}}', 'a:1:{i:0;a:4:{s:4:\"name\";s:5:\"price\";s:4:\"type\";s:7:\"numeric\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"0\";}}'),
(45, 'la', 'liste_actes', 'list', NULL, NULL, NULL, NULL, 'list acte', NULL, NULL, NULL, NULL, 'get', 'a:0:{}', 'a:0:{}'),
(46, 'uact', 'liste_actes', 'save_edit', NULL, NULL, NULL, NULL, 'update acte', NULL, NULL, NULL, NULL, 'post', 'a:4:{i:0;a:5:{s:4:\"name\";s:2:\"id\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}i:1;a:5:{s:4:\"name\";s:4:\"code\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}i:2;a:5:{s:4:\"name\";s:11:\"designation\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}i:3;a:5:{s:4:\"name\";s:5:\"price\";s:4:\"type\";s:7:\"numeric\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}}', 'a:0:{}'),
(47, 'gac', 'liste_actes', 'list', NULL, NULL, NULL, NULL, 'get all list acte', NULL, NULL, NULL, NULL, 'get', 'a:0:{}', 'a:0:{}'),
(48, 'ga', 'liste_actes', 'detail', NULL, NULL, NULL, NULL, 'get one acte', NULL, NULL, NULL, NULL, 'post', 'a:1:{i:0;a:5:{s:4:\"name\";s:2:\"id\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}}', 'a:4:{i:0;a:4:{s:4:\"name\";s:2:\"id\";s:4:\"type\";s:3:\"int\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:1;a:4:{s:4:\"name\";s:4:\"code\";s:4:\"type\";s:6:\"string\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:2;a:4:{s:4:\"name\";s:11:\"designation\";s:4:\"type\";s:6:\"string\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}i:3;a:4:{s:4:\"name\";s:5:\"price\";s:4:\"type\";s:7:\"numeric\";s:8:\"subquery\";N;s:4:\"used\";s:1:\"1\";}}'),
(49, 'lm', 'cms_users', 'list', NULL, NULL, NULL, NULL, 'liste medecin', NULL, NULL, NULL, NULL, 'get', 'a:0:{}', 'a:0:{}'),
(50, 'listem', 'medicament', 'list', NULL, NULL, NULL, NULL, 'liste medicament', NULL, NULL, NULL, NULL, 'get', 'a:0:{}', 'a:0:{}'),
(51, 'addm', 'medicament', 'save_add', NULL, NULL, NULL, NULL, 'add medicament', NULL, NULL, NULL, NULL, 'post', 'a:1:{i:0;a:5:{s:4:\"name\";s:11:\"designation\";s:4:\"type\";s:6:\"string\";s:6:\"config\";N;s:8:\"required\";s:1:\"1\";s:4:\"used\";s:1:\"1\";}}', 'a:0:{}'),
(52, 'lms2', 'medicament', 'list', NULL, NULL, NULL, NULL, 'liste medicament select2', NULL, NULL, NULL, NULL, 'get', 'a:0:{}', 'a:0:{}'),
(53, 'cd', 'consultation', 'detail', NULL, NULL, NULL, NULL, 'consultation detail', NULL, NULL, NULL, NULL, 'get', 'a:0:{}', 'a:0:{}');

-- --------------------------------------------------------

--
-- Table structure for table `cms_apikey`
--

CREATE TABLE `cms_apikey` (
  `id` int(10) UNSIGNED NOT NULL,
  `screetkey` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hit` int(11) DEFAULT NULL,
  `status` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cms_apikey`
--

INSERT INTO `cms_apikey` (`id`, `screetkey`, `hit`, `status`, `created_at`, `updated_at`) VALUES
(1, 'pfetbiby2020', 0, 'active', '2021-06-15 16:55:05', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cms_dashboard`
--

CREATE TABLE `cms_dashboard` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_cms_privileges` int(11) DEFAULT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cms_email_queues`
--

CREATE TABLE `cms_email_queues` (
  `id` int(10) UNSIGNED NOT NULL,
  `send_at` datetime DEFAULT NULL,
  `email_recipient` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_from_email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_from_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_cc_email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_subject` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_content` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_attachments` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_sent` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cms_email_templates`
--

CREATE TABLE `cms_email_templates` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subject` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `from_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `from_email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cc_email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cms_email_templates`
--

INSERT INTO `cms_email_templates` (`id`, `name`, `slug`, `subject`, `content`, `description`, `from_name`, `from_email`, `cc_email`, `created_at`, `updated_at`) VALUES
(1, 'Email Template Forgot Password Backend', 'forgot_password_backend', NULL, '<p>Hi,</p><p>Someone requested forgot password, here is your new password : </p><p>[password]</p><p><br></p><p>--</p><p>Regards,</p><p>Admin</p>', '[password]', 'System', 'system@tbiby.com', NULL, '2021-06-15 16:55:05', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cms_logs`
--

CREATE TABLE `cms_logs` (
  `id` int(10) UNSIGNED NOT NULL,
  `ipaddress` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `useragent` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `details` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_cms_users` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cms_logs`
--

INSERT INTO `cms_logs` (`id`, `ipaddress`, `useragent`, `url`, `description`, `details`, `id_cms_users`, `created_at`, `updated_at`) VALUES
(1, '192.168.137.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36', 'http://192.168.137.1:8000/admin/login', 'admin@tbiby.comConnectez-vous avec adresse IP192.168.137.1', '', 1, '2021-06-16 08:39:36', NULL),
(2, '192.168.137.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36', 'http://192.168.137.1:8000/admin/login', 'admin@tbiby.comConnectez-vous avec adresse IP192.168.137.1', '', 1, '2021-06-16 14:57:05', NULL),
(3, '192.168.137.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36', 'http://192.168.137.1:8000/admin/login', 'admin@tbiby.comConnectez-vous avec adresse IP192.168.137.1', '', 1, '2021-06-17 12:40:31', NULL),
(4, '192.168.137.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36', 'http://192.168.137.1:8000/admin/login', 'admin@tbiby.comConnectez-vous avec adresse IP192.168.137.1', '', 1, '2021-06-20 21:17:53', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cms_menus`
--

CREATE TABLE `cms_menus` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'url',
  `path` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `color` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `is_dashboard` tinyint(1) NOT NULL DEFAULT 0,
  `id_cms_privileges` int(11) DEFAULT NULL,
  `sorting` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cms_menus`
--

INSERT INTO `cms_menus` (`id`, `name`, `type`, `path`, `color`, `icon`, `parent_id`, `is_active`, `is_dashboard`, `id_cms_privileges`, `sorting`, `created_at`, `updated_at`) VALUES
(1, 'médecin', 'Route', 'AdminCmsUsers1ControllerGetIndex', NULL, 'fa fa-user-md', 0, 1, 0, 1, 1, '2021-06-15 16:55:06', NULL),
(2, 'secrétaire', 'Route', 'AdminSecrétaireControllerGetIndex', NULL, 'fa fa-user-plus', 0, 1, 0, 1, 2, '2021-06-15 16:55:06', NULL),
(3, 'liste patient', 'Route', 'AdminListePatientControllerGetIndex', NULL, 'fa fa-users', 0, 1, 0, 1, 3, '2021-06-15 16:55:06', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cms_menus_privileges`
--

CREATE TABLE `cms_menus_privileges` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_cms_menus` int(11) DEFAULT NULL,
  `id_cms_privileges` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cms_menus_privileges`
--

INSERT INTO `cms_menus_privileges` (`id`, `id_cms_menus`, `id_cms_privileges`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `cms_moduls`
--

CREATE TABLE `cms_moduls` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `path` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `table_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `controller` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_protected` tinyint(1) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cms_moduls`
--

INSERT INTO `cms_moduls` (`id`, `name`, `icon`, `path`, `table_name`, `controller`, `is_protected`, `is_active`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'notifications', 'fa fa-cog', 'notifications', 'cms_notifications', 'NotificationsController', 1, 1, '2021-06-15 16:55:05', NULL, NULL),
(2, 'Privilèges ', 'fa fa-cog', 'privileges', 'cms_privileges', 'PrivilegesController', 1, 1, '2021-06-15 16:55:05', NULL, NULL),
(3, 'Rôles de privilèges', 'fa fa-cog', 'privileges_roles', 'cms_privileges_roles', 'PrivilegesRolesController', 1, 1, '2021-06-15 16:55:05', NULL, NULL),
(4, 'Gestion des utilisateurs', 'fa fa-users', 'users', 'cms_users', 'AdminCmsUsersController', 0, 1, '2021-06-15 16:55:05', NULL, NULL),
(5, 'Paramètres', 'fa fa-cog', 'settings', 'cms_settings', 'SettingsController', 1, 1, '2021-06-15 16:55:05', NULL, NULL),
(6, 'Générateur de module', 'fa fa-database', 'module_generator', 'cms_moduls', 'ModulsController', 1, 1, '2021-06-15 16:55:05', NULL, NULL),
(7, 'Gestion de menu', 'fa fa-bars', 'menu_management', 'cms_menus', 'MenusController', 1, 1, '2021-06-15 16:55:05', NULL, NULL),
(8, 'Modèles de messagerie', 'fa fa-envelope-o', 'email_templates', 'cms_email_templates', 'EmailTemplatesController', 1, 1, '2021-06-15 16:55:05', NULL, NULL),
(9, 'Constructeur de statistique ', 'fa fa-dashboard', 'statistic_builder', 'cms_statistics', 'StatisticBuilderController', 1, 1, '2021-06-15 16:55:05', NULL, NULL),
(10, 'API Generator', 'fa fa-cloud-download', 'api_generator', '', 'ApiCustomController', 1, 1, '2021-06-15 16:55:05', NULL, NULL),
(11, 'Accès utilisateur', 'fa fa-flag-o', 'logs', 'cms_logs', 'LogsController', 1, 1, '2021-06-15 16:55:05', NULL, NULL),
(12, 'médecin', 'fa fa-user-md', 'medecin', 'cms_users', 'AdminCmsUsers1Controller', 0, 1, '2021-06-15 16:55:05', NULL, NULL),
(13, 'secrétaire', 'fa fa-user-plus', 'secretaire', 'secretaire', 'AdminSecrétaireController', 0, 1, '2021-06-15 16:55:05', NULL, NULL),
(14, 'liste patient', 'fa fa-users', 'liste_patient', 'cms_users', 'AdminListePatientController', 0, 1, '2021-06-15 16:55:05', NULL, NULL),
(15, 'patient', 'fa fa-child', 'relation', 'relation', 'AdminPatientController', 0, 1, '2021-06-15 16:55:05', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cms_notifications`
--

CREATE TABLE `cms_notifications` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_cms_users` int(11) DEFAULT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_read` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cms_notifications`
--

INSERT INTO `cms_notifications` (`id`, `id_cms_users`, `content`, `url`, `is_read`, `created_at`, `updated_at`) VALUES
(10, 5, 'Vous avez un rendez-vous avec khannoussi malek', '/dashboard/Mes%20rendez%20vous', 0, '2021-06-17 13:31:17', NULL),
(11, 7, 'Vous avez un rendez-vous avec khannoussi malek', '/dashboard/Mes%20rendez%20vous', 0, '2021-06-17 19:57:20', NULL),
(20, 5, 'Vous avez un rendez-vous avec khannoussi malek', '/dashboard/Mes%20rendez%20vous', 0, '2021-06-19 09:36:02', NULL),
(21, 7, 'Vous avez un rendez-vous avec khannoussi malek', '/dashboard/Mes%20rendez%20vous', 0, '2021-06-19 09:36:11', NULL),
(22, 6, 'Vous avez un rendez-vous avec khannoussi malek', '/dashboard/Mes%20rendez%20vous', 0, '2021-06-19 09:36:18', NULL),
(23, 6, 'Votre rendez-vous chez Dr.bez slah est modifie ', '/dashboard/Mes%20rendez%20vous', 0, '2021-06-19 09:36:24', NULL),
(24, 6, 'Votre rendez-vous chez Dr.bez slah est modifie ', '/dashboard/Mes%20rendez%20vous', 1, '2021-06-19 09:36:29', '2021-06-19 13:48:11'),
(25, 6, 'Vous avez un rendez-vous avec khannoussi malek', '/dashboard/Mes%20rendez%20vous', 1, '2021-06-19 13:24:24', '2021-06-19 13:48:11'),
(27, 6, 'Vous avez une lettre avec le patient ben daoued sarah l\'envoyé de khannoussi malek', '/dashboard/Mes%20patients', 1, '2021-06-19 13:43:21', '2021-06-19 13:47:43'),
(28, 6, 'Vous avez un rendez-vous avec khannoussi malek', '/dashboard/Mes%20rendez%20vous', 1, '2021-06-19 13:46:21', '2021-06-19 13:47:42'),
(31, 2, 'Vous avez un rendez-vous avec bez slah', '/dashboard/Mes%20rendez%20vous', 0, '2021-06-19 13:53:12', NULL),
(33, 6, 'Vous avez une lettre de la part de M khannoussi malek sur le patient bahroun cheyma;  Array', '/dashboard/Mes%20patients', 1, '2021-06-19 14:02:46', '2021-06-19 14:03:02'),
(34, 5, 'Vous avez un rendez-vous avec bez slah', '/dashboard/Mes%20rendez%20vous', 0, '2021-06-19 14:05:08', NULL),
(36, 6, 'Vous avez une lettre de la part de M khannoussi malek sur le patient aroua amir', '/dashboard/Mes%20patients', 1, '2021-06-19 14:11:55', '2021-06-19 14:12:06'),
(37, 7, 'Vous avez un rendez-vous avec khannoussi malek', '/dashboard/Mes%20rendez%20vous', 0, '2021-06-19 14:36:41', NULL),
(38, 2, 'Vous avez un rendez-vous avec khannoussi malek', '/dashboard/Mes%20rendez%20vous', 0, '2021-06-19 15:46:06', NULL),
(39, 2, 'Vous avez un rendez-vous avec khannoussi malek', '/dashboard/Mes%20rendez%20vous', 0, '2021-06-20 23:43:34', NULL),
(40, 7, 'Vous avez un rendez-vous avec khannoussi malek', '/dashboard/Mes%20rendez%20vous', 0, '2021-06-20 23:44:06', NULL),
(41, 7, 'Votre rendez-vous chez Dr.aroua amir est modifié', '/dashboard/Mes%20rendez%20vous', 0, '2021-06-20 23:44:14', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cms_privileges`
--

CREATE TABLE `cms_privileges` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_superadmin` tinyint(1) DEFAULT NULL,
  `theme_color` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cms_privileges`
--

INSERT INTO `cms_privileges` (`id`, `name`, `is_superadmin`, `theme_color`, `created_at`, `updated_at`) VALUES
(1, 'Super Administrator', 1, 'skin-green-light', '2021-06-15 16:55:05', NULL),
(2, 'medecin', 0, 'skin-green-light', '2021-06-15 16:55:05', NULL),
(3, 'secretaire', 0, 'skin-green-light', '2021-06-15 16:55:05', NULL),
(4, 'patient', 0, 'skin-green-light', '2021-06-15 16:55:05', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cms_privileges_roles`
--

CREATE TABLE `cms_privileges_roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `is_visible` tinyint(1) DEFAULT NULL,
  `is_create` tinyint(1) DEFAULT NULL,
  `is_read` tinyint(1) DEFAULT NULL,
  `is_edit` tinyint(1) DEFAULT NULL,
  `is_delete` tinyint(1) DEFAULT NULL,
  `id_cms_privileges` int(11) DEFAULT NULL,
  `id_cms_moduls` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cms_privileges_roles`
--

INSERT INTO `cms_privileges_roles` (`id`, `is_visible`, `is_create`, `is_read`, `is_edit`, `is_delete`, `id_cms_privileges`, `id_cms_moduls`, `created_at`, `updated_at`) VALUES
(1, 1, 0, 0, 0, 0, 1, 1, '2021-06-15 16:55:05', NULL),
(2, 1, 1, 1, 1, 1, 1, 2, '2021-06-15 16:55:05', NULL),
(3, 0, 1, 1, 1, 1, 1, 3, '2021-06-15 16:55:05', NULL),
(4, 1, 1, 1, 1, 1, 1, 4, '2021-06-15 16:55:05', NULL),
(5, 1, 1, 1, 1, 1, 1, 5, '2021-06-15 16:55:05', NULL),
(6, 1, 1, 1, 1, 1, 1, 6, '2021-06-15 16:55:05', NULL),
(7, 1, 1, 1, 1, 1, 1, 7, '2021-06-15 16:55:05', NULL),
(8, 1, 1, 1, 1, 1, 1, 8, '2021-06-15 16:55:05', NULL),
(9, 1, 1, 1, 1, 1, 1, 9, '2021-06-15 16:55:05', NULL),
(10, 1, 1, 1, 1, 1, 1, 10, '2021-06-15 16:55:05', NULL),
(11, 1, 0, 1, 0, 1, 1, 11, '2021-06-15 16:55:05', NULL),
(12, 1, 1, 1, 1, 1, 1, 12, '2021-06-15 16:55:05', NULL),
(13, 1, 1, 1, 1, 1, 1, 13, '2021-06-15 16:55:05', NULL),
(14, 1, 1, 1, 1, 1, 1, 14, '2021-06-15 16:55:05', NULL),
(15, 1, 1, 1, 1, 1, 1, 15, '2021-06-15 16:55:05', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cms_settings`
--

CREATE TABLE `cms_settings` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content_input_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dataenum` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `helper` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `group_setting` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `label` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cms_settings`
--

INSERT INTO `cms_settings` (`id`, `name`, `content`, `content_input_type`, `dataenum`, `helper`, `created_at`, `updated_at`, `group_setting`, `label`) VALUES
(1, 'login_background_color', NULL, 'text', NULL, 'Input hexacode', '2021-06-15 16:55:05', NULL, 'Style de registre de connexion', 'Login Background Color'),
(2, 'login_font_color', NULL, 'text', NULL, 'Input hexacode', '2021-06-15 16:55:05', NULL, 'Style de registre de connexion', 'Login Font Color'),
(3, 'login_background_image', NULL, 'upload_image', NULL, NULL, '2021-06-15 16:55:05', NULL, 'Style de registre de connexion', 'Login Background Image'),
(4, 'email_sender', 'support@tbiby.com', 'text', NULL, NULL, '2021-06-15 16:55:05', NULL, 'Paramètre par courrier électronique ', 'Email Sender'),
(5, 'smtp_driver', 'mail', 'select', 'smtp,mail,sendmail', NULL, '2021-06-15 16:55:05', NULL, 'Paramètre par courrier électronique ', 'Mail Driver'),
(6, 'smtp_host', '', 'text', NULL, NULL, '2021-06-15 16:55:05', NULL, 'Paramètre par courrier électronique ', 'SMTP Host'),
(7, 'smtp_port', '25', 'text', NULL, 'default 25', '2021-06-15 16:55:05', NULL, 'Paramètre par courrier électronique ', 'SMTP Port'),
(8, 'smtp_username', '', 'text', NULL, NULL, '2021-06-15 16:55:05', NULL, 'Paramètre par courrier électronique ', 'SMTP Username'),
(9, 'smtp_password', '', 'text', NULL, NULL, '2021-06-15 16:55:05', NULL, 'Paramètre par courrier électronique ', 'SMTP Password'),
(10, 'appname', 'Tbiby', 'text', NULL, NULL, '2021-06-15 16:55:05', NULL, 'Paramètre d\'application ', 'Application Name'),
(11, 'default_paper_size', 'Legal', 'text', NULL, 'Paper size, ex : A4, Legal, etc', '2021-06-15 16:55:05', NULL, 'Paramètre d\'application ', 'Default Paper Print Size'),
(12, 'logo', 'uploads/2021-03/2551f23f6c4cd35a15a765d97f610630.png', 'upload_image', NULL, NULL, '2021-06-15 16:55:05', NULL, 'Paramètre d\'application ', 'Logo'),
(13, 'favicon', 'uploads/2021-03/2551f23f6c4cd35a15a765d97f610630.png', 'upload_image', NULL, NULL, '2021-06-15 16:55:05', NULL, 'Paramètre d\'application ', 'Favicon'),
(14, 'api_debug_mode', 'true', 'select', 'true,false', NULL, '2021-06-15 16:55:05', NULL, 'Paramètre d\'application ', 'API Debug Mode'),
(15, 'google_api_key', 'AIzaSyAmCyYFfDHqzxYQuU7nVvZSOLu3hywZvEQ', 'text', NULL, NULL, '2021-06-15 16:55:05', NULL, 'Paramètre d\'application ', 'Google API Key'),
(16, 'google_fcm_key', '', 'text', NULL, NULL, '2021-06-15 16:55:05', NULL, 'Paramètre d\'application ', 'Google FCM Key');

-- --------------------------------------------------------

--
-- Table structure for table `cms_statistics`
--

CREATE TABLE `cms_statistics` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cms_statistic_components`
--

CREATE TABLE `cms_statistic_components` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_cms_statistics` int(11) DEFAULT NULL,
  `componentID` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `component_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `area_name` varchar(55) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sorting` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `config` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cms_users`
--

CREATE TABLE `cms_users` (
  `id` int(10) UNSIGNED NOT NULL,
  `nom` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `prenom` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sexes` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telephone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date_naissance` date DEFAULT NULL,
  `cin` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_cms_privileges` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cms_users`
--

INSERT INTO `cms_users` (`id`, `nom`, `prenom`, `sexes`, `telephone`, `photo`, `email`, `date_naissance`, `cin`, `password`, `id_cms_privileges`, `created_at`, `updated_at`, `status`) VALUES
(1, 'Super tbiby', NULL, NULL, NULL, NULL, 'admin@tbiby.com', NULL, NULL, '$2y$10$.tI17qtNMO3adGx9q9XbhuO1rjt2xY0UpSGG0s/CVhQK52u/Crv8e', 1, '2021-06-15 16:55:05', NULL, 'Active'),
(2, 'ben daoued', 'sarah', 'femme', '54587819', '/storage/images/KQ6PwAjCX7pJQtj1p4rrTt9UwwGOwZu2ZYjOYTg6.jpeg', 'bendaouedsarah@gmail.com', '1997-12-02', '13482701', '$2y$10$e6/UljOXNg9st/QQUIarz.4LddfJUQehXz3/LN.VkkodjH4TF3Fr.', 4, '2021-06-15 16:56:49', '2021-06-19 09:51:33', 'Active'),
(4, 'khannoussi', 'malek', 'homme', '54405431', '/storage/images/BlzWfED8mf8n86XL0KuKOCfFFcUCvOFt0drhX67E.jpeg', 'khannoussimalek@gmail.com', NULL, NULL, '$2y$10$WTx68GjnxrcrEIF6kOXwgeGhKywSfDF7vnmhHjbwFFKTDqJTV1fCi', 2, '2021-06-15 17:00:11', '2021-06-19 09:41:05', 'Active'),
(5, 'bahroun', 'cheyma', 'femme', '12345678', '/storage/images/6VOJWYfAt99jNCZsJm9X9mbEv9UyRZoo7LnRpQsD.jpeg', NULL, '1999-09-27', NULL, '$2y$10$wykcQ3th.fbKX6YH.iDQ8.3aJ1sLL/Mp1.pLDv2DbdHX.bh4cb77W', 3, '2021-06-16 08:46:44', '2021-06-19 09:57:59', 'Active'),
(6, 'bez', 'slah', 'homme', '33333333', '/storage/images/I2vqTV33XZzFo4FafSNY5BOuOdfSldXP05ikiulI.jpeg', NULL, '1998-08-19', '87654321', '$2y$10$HcNx4rEau.A3rNzaMn88zeffuveUBy/PBmKMRJFohtoldBGhxnVKG', 2, '2021-06-16 08:49:02', '2021-06-19 09:52:10', 'Active'),
(7, 'aroua', 'amir', 'homme', NULL, '/storage/images/cvC42QR9JDHVyeXzE04Hua8ZgdIJcNs19xmlEsLJ.jpeg', NULL, NULL, '22222222', '$2y$10$TohI/RzEUXUUz4qMKpMimeiuUuAiqoCsC7yBQ4qy/DawmcBv2Nqkq', 4, '2021-06-17 19:57:11', '2021-06-19 09:53:48', 'Active'),
(8, 'soufian', 'ihabe', 'homme', NULL, '/storage/images/RqNsadinLlKZ3dtvBFwIPoPU3NQZxUgVmd4Vm9rP.jpeg', NULL, NULL, '44444444', '$2y$10$7nlYT9ztxFbOd6GH3BSfdORG/tA4/jZyQgoaMO3vVKiurwwHYPUYO', 4, '2021-06-19 10:01:23', '2021-06-19 10:02:24', 'Active'),
(9, 'belhaj younes', 'ranime', 'femme', NULL, '/storage/images/fxxsnzgQ3HDDIEzhLWhQne1pNDkUJ3XXRZ3gzDyu.jpeg', NULL, NULL, '55555555', '$2y$10$MdktT7ZTO1De/FQp/00H1.DN8i1Qmp/z/XocEPnbCCDFd10F8vzuC', 4, '2021-06-19 10:02:58', '2021-06-19 10:06:18', 'Active'),
(10, 'soultan', 'nouri', 'homme', NULL, '/storage/images/hrVrQkO3BX37pJ7x5bAoZzSQvIiJDMpFKFebD2h9.jpeg', NULL, NULL, '66666666', '$2y$10$99yACE8/B46RJlpbE0mAzeW2qdTM5Yd.9h00jlt7a4qIb6oKhJE8e', 4, '2021-06-19 10:09:09', '2021-06-19 10:09:45', 'Active');

-- --------------------------------------------------------

--
-- Table structure for table `consultation`
--

CREATE TABLE `consultation` (
  `id` int(10) UNSIGNED NOT NULL,
  `patient_id` int(10) UNSIGNED DEFAULT NULL,
  `medecin_id` int(10) UNSIGNED DEFAULT NULL,
  `prix` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Diagnostic` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `consultation`
--

INSERT INTO `consultation` (`id`, `patient_id`, `medecin_id`, `prix`, `Diagnostic`, `created_at`, `updated_at`) VALUES
(1, 2, 4, '75', 'consultation le 19/6/2021', '2021-06-19 13:43:21', NULL),
(2, 2, 6, '170', 'réponse sur la lettre de D.Malek KHANNOUSSI', '2021-06-19 13:55:43', NULL),
(3, 5, 4, '55', 'consultation le 19/6/2021', '2021-06-19 14:02:46', NULL),
(4, 5, 6, '30', 'consultation le 19/06/2021', '2021-06-19 14:08:11', NULL),
(5, 7, 4, '80', 'consultation le 19/06/2021', '2021-06-19 14:11:55', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `domaine`
--

CREATE TABLE `domaine` (
  `id` int(10) UNSIGNED NOT NULL,
  `nom` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `dom_sous_dom`
--

CREATE TABLE `dom_sous_dom` (
  `id` int(10) UNSIGNED NOT NULL,
  `domaine` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sous_domaine_` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `examen`
--

CREATE TABLE `examen` (
  `id` int(10) UNSIGNED NOT NULL,
  `patient_id` int(10) UNSIGNED DEFAULT NULL,
  `medecin_id` int(10) UNSIGNED DEFAULT NULL,
  `consultation_id` int(10) UNSIGNED DEFAULT NULL,
  `note` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `prix` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `examen_type_image`
--

CREATE TABLE `examen_type_image` (
  `id` int(10) UNSIGNED NOT NULL,
  `examen_id` int(10) UNSIGNED DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `examen_type_text`
--

CREATE TABLE `examen_type_text` (
  `id` int(10) UNSIGNED NOT NULL,
  `examen_id` int(10) UNSIGNED DEFAULT NULL,
  `valeur` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `historique_salle_dattente`
--

CREATE TABLE `historique_salle_dattente` (
  `id` int(10) UNSIGNED NOT NULL,
  `patient_id` int(10) UNSIGNED DEFAULT NULL,
  `medecin_id` int(10) UNSIGNED DEFAULT NULL,
  `etat` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date_reservation` datetime NOT NULL,
  `date_acceptation` datetime NOT NULL,
  `date_dentré` datetime NOT NULL,
  `date_de_sortie` datetime NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `journal_dacces`
--

CREATE TABLE `journal_dacces` (
  `id` int(10) UNSIGNED NOT NULL,
  `patient_id` int(10) UNSIGNED DEFAULT NULL,
  `medecin_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `lettre`
--

CREATE TABLE `lettre` (
  `id` int(10) UNSIGNED NOT NULL,
  `patient_id` int(10) UNSIGNED DEFAULT NULL,
  `medecin_id` int(10) UNSIGNED DEFAULT NULL,
  `medecin_destiantaire_id` int(10) UNSIGNED DEFAULT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `consultation_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `lettre`
--

INSERT INTO `lettre` (`id`, `patient_id`, `medecin_id`, `medecin_destiantaire_id`, `description`, `created_at`, `updated_at`, `consultation_id`) VALUES
(1, 2, 4, 6, 'je vous envoi ce patient pour un test pcr', '2021-06-19 13:43:21', NULL, 1),
(2, 2, 6, 4, 'le résultat du test est négative', '2021-06-19 13:55:43', NULL, 2),
(3, 5, 4, 6, 'je vous envoi ce patient pour faire les analyses suivantes : \nAnticorps HBs (sérologie de l\'hépatite B).\nBéta hCG : le test de grossesse.', '2021-06-19 14:02:46', NULL, 3),
(4, 5, 6, 4, 'la resultat du test Béta hCG : le test de grossesse est possitive.', '2021-06-19 14:08:11', NULL, 4),
(5, 7, 4, 6, 'j\'envoi ce patient pour faire les analyses suivantes: \nCholestérol total.\nCholestérol LDL.\nCholestérol HDL.\nDépistage du VIH.', '2021-06-19 14:11:55', NULL, 5);

-- --------------------------------------------------------

--
-- Table structure for table `liste_actes`
--

CREATE TABLE `liste_actes` (
  `id` int(10) UNSIGNED NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `designation` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` decimal(9,3) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `liste_actes`
--

INSERT INTO `liste_actes` (`id`, `code`, `designation`, `price`, `created_at`, `updated_at`) VALUES
(1, 'MAB010010', 'Clavicule, main, cheville, pied', '10.000', '2021-06-19 13:11:44', NULL),
(2, 'MAB010020', 'Epaule, bras, coude, avant-bras, poignet, genou, jambe', '20.000', '2021-06-19 13:11:56', NULL),
(3, 'MAB010030', 'Rachis, hanche, cuisse', '30.000', '2021-06-19 13:12:09', NULL),
(4, 'MAB020010', 'Main, styloides radiale ou cubitale', '20.000', '2021-06-19 13:12:25', NULL),
(5, 'MAB020020', 'Un os de l\'avant-bras : extrémité inférieure (avec ou sans fracture associée de l\'autre styloide) diaphyse ou extrémité supérieure', '40.000', '2021-06-19 13:12:47', NULL),
(6, 'MAB020030', 'Fracture des deux os de l\'avant-bras, ou fracture de l\'un et luxation de l\'autre', '50.000', '2021-06-19 13:13:01', NULL),
(7, 'MAB020040', 'Humérus', '50.000', '2021-06-19 13:13:13', NULL),
(8, 'MAB020050', 'Clavicule', '10.000', '2021-06-19 13:13:25', NULL),
(9, 'MAB020060', 'Omoplate', '10.000', '2021-06-19 13:13:37', NULL),
(10, 'MAB020070', 'Avant-pied, tarse antérieur', '20.000', '2021-06-19 13:14:04', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `medecin`
--

CREATE TABLE `medecin` (
  `id` int(10) UNSIGNED NOT NULL,
  `cms_users_id` int(10) UNSIGNED DEFAULT NULL,
  `adresse_physique` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `temps_de_seance` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `domaine_id` int(10) UNSIGNED DEFAULT NULL,
  `sous_domaine_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `medecin`
--

INSERT INTO `medecin` (`id`, `cms_users_id`, `adresse_physique`, `temps_de_seance`, `created_at`, `updated_at`, `domaine_id`, `sous_domaine_id`) VALUES
(1, 4, 'djerba', NULL, NULL, '2021-06-19 09:41:05', NULL, NULL),
(2, 6, NULL, NULL, NULL, '2021-06-19 09:52:10', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `medicament`
--

CREATE TABLE `medicament` (
  `id` int(10) UNSIGNED NOT NULL,
  `designation` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `medicament`
--

INSERT INTO `medicament` (`id`, `designation`, `created_at`, `updated_at`) VALUES
(1, 'ABACAVIR', '2021-06-19 12:59:44', NULL),
(2, 'ABIRATERONE ACETATE', '2021-06-19 12:59:49', NULL),
(3, 'ABRUS PRECATORINE', '2021-06-19 12:59:56', NULL),
(4, 'ACARBOSE', '2021-06-19 12:59:59', NULL),
(5, 'ACEBUTOLOL', '2021-06-19 13:00:04', NULL),
(6, 'ALMITRINE', '2021-06-19 13:00:35', NULL),
(7, 'ALPRAZOLAM', '2021-06-19 13:00:39', NULL),
(8, 'ALPROSTADIL', '2021-06-19 13:00:43', NULL),
(9, 'ALTIZIDE', '2021-06-19 13:00:50', NULL),
(10, 'ALUMINIUM (OXYDE D\') HYDRATE', '2021-06-19 13:00:57', NULL),
(11, 'AMBROXOL', '2021-06-19 13:01:04', NULL),
(12, 'AMIKACINE', '2021-06-19 13:01:07', NULL),
(13, 'AMILORIDE', '2021-06-19 13:01:13', NULL),
(14, 'AMISULPRIDE', '2021-06-19 13:01:17', NULL),
(15, 'FLUMAZENIL', '2021-06-19 13:01:23', NULL),
(16, 'FLUMEQUINE', '2021-06-19 13:01:26', NULL),
(17, 'FLUOROURACILE', '2021-06-19 13:01:31', NULL),
(18, 'FLUPHENAZINE DECANOATE', '2021-06-19 13:01:37', NULL),
(19, 'FORMOTEROL FUMARATE', '2021-06-19 13:04:27', NULL),
(20, 'FRAMYCETIN SULFATE', '2021-06-19 13:04:33', NULL),
(21, 'GAIACOL', '2021-06-19 13:04:37', NULL),
(22, 'GANCICLOVIR', '2021-06-19 13:04:41', NULL),
(23, 'GELOSE', '2021-06-19 13:04:44', NULL),
(24, 'GEMCITABINE', '2021-06-19 13:04:49', NULL),
(25, 'GESTODENE', '2021-06-19 13:04:54', NULL),
(26, 'GLICLAZIDE', '2021-06-19 13:04:59', NULL),
(27, 'GLIMEPIRIDE', '2021-06-19 13:05:05', NULL),
(28, 'GLIQUIDONE', '2021-06-19 13:05:09', NULL),
(29, 'GLUBIONATE DE CALCIUM', '2021-06-19 13:05:15', NULL),
(30, 'GLUCAGON', '2021-06-19 13:05:19', NULL),
(31, 'GLUCOSE', '2021-06-19 13:05:34', NULL),
(32, 'GLYCEROPHOSPHATE ACIDE DE MG A 50%', '2021-06-19 13:05:38', NULL),
(33, 'GLYCOCOLLE', '2021-06-19 13:05:44', NULL),
(34, 'HEPTAMINOL ACEFYLLINATE', '2021-06-19 13:05:50', NULL),
(35, 'HEPTAMINOL', '2021-06-19 13:05:54', NULL),
(36, 'HEXAMIDINE', '2021-06-19 13:05:57', NULL),
(37, 'HUILE DE PARAFFINE', '2021-06-19 13:06:04', NULL),
(38, 'HUILE DE SOJA', '2021-06-19 13:06:15', NULL),
(39, 'HYALURONIC ACID', '2021-06-19 13:07:21', NULL),
(40, 'HYDROCORTISONE SUCCINATE SODIQUE', '2021-06-19 13:07:26', NULL),
(41, 'IMMUNOGLOBULINE HUMAINE', '2021-06-19 13:07:31', NULL),
(42, 'INFLIXIMAB', '2021-06-19 13:07:37', NULL),
(43, 'IOPAMIDOL', '2021-06-19 13:07:40', NULL),
(44, 'KETAMINE HYDROCHLORIDE', '2021-06-19 13:07:46', NULL),
(45, 'L-PHENYLALANINE', '2021-06-19 13:07:54', NULL),
(46, 'LEPTANDRA VIRGINICA', '2021-06-19 13:08:05', NULL),
(47, 'LEVONORGESTREL', '2021-06-19 13:08:09', NULL),
(48, 'panadol', '2021-06-19 13:08:22', NULL),
(49, 'panadol extra', '2021-06-19 13:08:28', NULL),
(50, 'doliprane', '2021-06-19 13:08:54', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2016_08_07_145904_add_table_cms_apicustom', 1),
(2, '2016_08_07_150834_add_table_cms_dashboard', 1),
(3, '2016_08_07_151210_add_table_cms_logs', 1),
(4, '2016_08_07_151211_add_details_cms_logs', 1),
(5, '2016_08_07_152014_add_table_cms_privileges', 1),
(6, '2016_08_07_152214_add_table_cms_privileges_roles', 1),
(7, '2016_08_07_152320_add_table_cms_settings', 1),
(8, '2016_08_07_152421_add_table_cms_users', 1),
(9, '2016_08_07_154624_add_table_cms_menus_privileges', 1),
(10, '2016_08_07_154624_add_table_cms_moduls', 1),
(11, '2016_08_17_225409_add_status_cms_users', 1),
(12, '2016_08_20_125418_add_table_cms_notifications', 1),
(13, '2016_09_04_033706_add_table_cms_email_queues', 1),
(14, '2016_09_16_035347_add_group_setting', 1),
(15, '2016_09_16_045425_add_label_setting', 1),
(16, '2016_09_17_104728_create_nullable_cms_apicustom', 1),
(17, '2016_10_01_141740_add_method_type_apicustom', 1),
(18, '2016_10_01_141846_add_parameters_apicustom', 1),
(19, '2016_10_01_141934_add_responses_apicustom', 1),
(20, '2016_10_01_144826_add_table_apikey', 1),
(21, '2016_11_14_141657_create_cms_menus', 1),
(22, '2016_11_15_132350_create_cms_email_templates', 1),
(23, '2016_11_15_190410_create_cms_statistics', 1),
(24, '2016_11_17_102740_create_cms_statistic_components', 1),
(25, '2017_06_06_164501_add_deleted_at_cms_moduls', 1),
(26, '2021_03_12_102549_secretaire', 1),
(27, '2021_03_12_103122_medecin', 1),
(28, '2021_03_12_104221_patient', 1),
(29, '2021_03_12_105048_domaine', 1),
(30, '2021_03_12_105307_sous_domaine', 1),
(31, '2021_03_12_105503_antecedants', 1),
(32, '2021_03_12_110000_relation', 1),
(33, '2021_03_12_111842_journal_dacces', 1),
(34, '2021_03_12_112036_rendez-vous', 1),
(35, '2021_03_12_112415_historique_salle_dattente', 1),
(36, '2021_03_12_112701_lettre', 1),
(37, '2021_03_12_112919_consultation', 1),
(38, '2021_03_12_113531_certificat', 1),
(39, '2021_03_12_113824_certificat_type', 1),
(40, '2021_03_12_114154_examen', 1),
(41, '2021_03_12_114713_examen_type_text', 1),
(42, '2021_03_12_114810_examen_type_image', 1),
(43, '2021_03_12_115001_medicament', 1),
(44, '2021_03_12_115005_ordonnance', 1),
(45, '2021_03_12_115212_acte', 1),
(46, '2021_03_12_115524_liste_actes', 1),
(47, '2021_03_12_123103_updateMedecin', 1),
(48, '2021_03_12_140603_updateLettre', 1),
(49, '2021_04_14_230231_dom_sous_dom', 1);

-- --------------------------------------------------------

--
-- Table structure for table `ordonnance`
--

CREATE TABLE `ordonnance` (
  `id` int(10) UNSIGNED NOT NULL,
  `consultation_id` int(10) UNSIGNED DEFAULT NULL,
  `patient_id` int(10) UNSIGNED DEFAULT NULL,
  `medicament_id` int(10) UNSIGNED DEFAULT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  `lorsqueVousPrenezLeMedicament` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `NBR_FOIS_JOURS` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `duree_entre_chaque_medicament` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ordonnance`
--

INSERT INTO `ordonnance` (`id`, `consultation_id`, `patient_id`, `medicament_id`, `date_debut`, `date_fin`, `lorsqueVousPrenezLeMedicament`, `NBR_FOIS_JOURS`, `duree_entre_chaque_medicament`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 50, '2021-06-19', '2021-06-26', 'aprés repas', '3', '2h', '2021-06-19 13:43:21', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `id` int(10) UNSIGNED NOT NULL,
  `cms_users_id` int(10) UNSIGNED DEFAULT NULL,
  `Adresse` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Code_APCI` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`id`, `cms_users_id`, `Adresse`, `parent`, `Code_APCI`, `created_at`, `updated_at`) VALUES
(1, 2, NULL, NULL, '1234', NULL, NULL),
(3, 5, NULL, NULL, NULL, NULL, NULL),
(4, 7, NULL, NULL, NULL, NULL, NULL),
(5, 8, NULL, NULL, NULL, NULL, NULL),
(6, 9, NULL, NULL, NULL, NULL, NULL),
(7, 10, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `relation`
--

CREATE TABLE `relation` (
  `id` int(10) UNSIGNED NOT NULL,
  `patient_id` int(10) UNSIGNED DEFAULT NULL,
  `medecin_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `relation`
--

INSERT INTO `relation` (`id`, `patient_id`, `medecin_id`, `created_at`, `updated_at`) VALUES
(1, 2, 4, '2021-06-15 17:00:41', NULL),
(2, 5, 4, '2021-06-16 09:23:58', NULL),
(3, 2, 5, '2021-06-16 15:31:48', NULL),
(4, 7, 4, '2021-06-17 19:57:11', NULL),
(5, 6, 4, '2021-06-17 20:01:49', NULL),
(6, 2, 6, '2021-06-19 13:52:06', NULL),
(7, 5, 6, '2021-06-19 14:04:48', NULL),
(8, 7, 6, '2021-06-19 14:13:05', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `rendez_vous`
--

CREATE TABLE `rendez_vous` (
  `id` int(10) UNSIGNED NOT NULL,
  `patient_id` int(10) UNSIGNED DEFAULT NULL,
  `medecin_id` int(10) UNSIGNED DEFAULT NULL,
  `etat` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date_reservation` datetime NOT NULL,
  `date_acceptation` datetime DEFAULT NULL,
  `date_dentré` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `rendez_vous`
--

INSERT INTO `rendez_vous` (`id`, `patient_id`, `medecin_id`, `etat`, `date_reservation`, `date_acceptation`, `date_dentré`, `created_at`, `updated_at`) VALUES
(7, 2, 4, 'en attente', '2021-06-21 08:00:00', NULL, NULL, '2021-06-17 13:24:34', NULL),
(8, 5, 4, 'en attente', '2021-06-21 09:30:00', NULL, NULL, '2021-06-17 13:31:17', NULL),
(25, 7, 4, 'en attente', '2021-06-21 13:00:00', NULL, NULL, '2021-06-20 23:44:06', '2021-06-20 23:44:30');

-- --------------------------------------------------------

--
-- Table structure for table `secretaire`
--

CREATE TABLE `secretaire` (
  `id` int(10) UNSIGNED NOT NULL,
  `medecin_id` int(10) UNSIGNED DEFAULT NULL,
  `cms_users_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `secretaire`
--

INSERT INTO `secretaire` (`id`, `medecin_id`, `cms_users_id`, `created_at`, `updated_at`) VALUES
(1, 4, 5, '2021-06-16 08:47:31', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sous_domaine`
--

CREATE TABLE `sous_domaine` (
  `id` int(10) UNSIGNED NOT NULL,
  `domaine_id` int(10) UNSIGNED DEFAULT NULL,
  `nom` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `acte`
--
ALTER TABLE `acte`
  ADD PRIMARY KEY (`id`),
  ADD KEY `acte_consultation_id_foreign` (`consultation_id`),
  ADD KEY `acte_medecin_id_foreign` (`medecin_id`),
  ADD KEY `acte_patient_id_foreign` (`patient_id`);

--
-- Indexes for table `antecedants`
--
ALTER TABLE `antecedants`
  ADD PRIMARY KEY (`id`),
  ADD KEY `antecedants_patient_id_foreign` (`patient_id`),
  ADD KEY `antecedants_medecin_id_foreign` (`medecin_id`);

--
-- Indexes for table `certificat`
--
ALTER TABLE `certificat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `certificat_patient_id_foreign` (`patient_id`),
  ADD KEY `certificat_medecin_id_foreign` (`medecin_id`),
  ADD KEY `certificat_consultation_id_foreign` (`consultation_id`);

--
-- Indexes for table `certificat_type`
--
ALTER TABLE `certificat_type`
  ADD PRIMARY KEY (`id`),
  ADD KEY `certificat_type_cms_users_id_foreign` (`cms_users_id`);

--
-- Indexes for table `cms_apicustom`
--
ALTER TABLE `cms_apicustom`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cms_apikey`
--
ALTER TABLE `cms_apikey`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cms_dashboard`
--
ALTER TABLE `cms_dashboard`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cms_email_queues`
--
ALTER TABLE `cms_email_queues`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cms_email_templates`
--
ALTER TABLE `cms_email_templates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cms_logs`
--
ALTER TABLE `cms_logs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cms_menus`
--
ALTER TABLE `cms_menus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cms_menus_privileges`
--
ALTER TABLE `cms_menus_privileges`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cms_moduls`
--
ALTER TABLE `cms_moduls`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cms_notifications`
--
ALTER TABLE `cms_notifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cms_privileges`
--
ALTER TABLE `cms_privileges`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cms_privileges_roles`
--
ALTER TABLE `cms_privileges_roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cms_settings`
--
ALTER TABLE `cms_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cms_statistics`
--
ALTER TABLE `cms_statistics`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cms_statistic_components`
--
ALTER TABLE `cms_statistic_components`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cms_users`
--
ALTER TABLE `cms_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `consultation`
--
ALTER TABLE `consultation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `consultation_patient_id_foreign` (`patient_id`),
  ADD KEY `consultation_medecin_id_foreign` (`medecin_id`);

--
-- Indexes for table `domaine`
--
ALTER TABLE `domaine`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dom_sous_dom`
--
ALTER TABLE `dom_sous_dom`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `examen`
--
ALTER TABLE `examen`
  ADD PRIMARY KEY (`id`),
  ADD KEY `examen_patient_id_foreign` (`patient_id`),
  ADD KEY `examen_medecin_id_foreign` (`medecin_id`),
  ADD KEY `examen_consultation_id_foreign` (`consultation_id`);

--
-- Indexes for table `examen_type_image`
--
ALTER TABLE `examen_type_image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `examen_type_image_examen_id_foreign` (`examen_id`);

--
-- Indexes for table `examen_type_text`
--
ALTER TABLE `examen_type_text`
  ADD PRIMARY KEY (`id`),
  ADD KEY `examen_type_text_examen_id_foreign` (`examen_id`);

--
-- Indexes for table `historique_salle_dattente`
--
ALTER TABLE `historique_salle_dattente`
  ADD PRIMARY KEY (`id`),
  ADD KEY `historique_salle_dattente_patient_id_foreign` (`patient_id`),
  ADD KEY `historique_salle_dattente_medecin_id_foreign` (`medecin_id`);

--
-- Indexes for table `journal_dacces`
--
ALTER TABLE `journal_dacces`
  ADD PRIMARY KEY (`id`),
  ADD KEY `journal_dacces_patient_id_foreign` (`patient_id`),
  ADD KEY `journal_dacces_medecin_id_foreign` (`medecin_id`);

--
-- Indexes for table `lettre`
--
ALTER TABLE `lettre`
  ADD PRIMARY KEY (`id`),
  ADD KEY `lettre_patient_id_foreign` (`patient_id`),
  ADD KEY `lettre_medecin_id_foreign` (`medecin_id`),
  ADD KEY `lettre_medecin_destiantaire_id_foreign` (`medecin_destiantaire_id`),
  ADD KEY `lettre_consultation_id_foreign` (`consultation_id`);

--
-- Indexes for table `liste_actes`
--
ALTER TABLE `liste_actes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `medecin`
--
ALTER TABLE `medecin`
  ADD PRIMARY KEY (`id`),
  ADD KEY `medecin_cms_users_id_foreign` (`cms_users_id`),
  ADD KEY `medecin_domaine_id_foreign` (`domaine_id`),
  ADD KEY `medecin_sous_domaine_id_foreign` (`sous_domaine_id`);

--
-- Indexes for table `medicament`
--
ALTER TABLE `medicament`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ordonnance`
--
ALTER TABLE `ordonnance`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ordonnance_consultation_id_foreign` (`consultation_id`),
  ADD KEY `ordonnance_patient_id_foreign` (`patient_id`),
  ADD KEY `ordonnance_medicament_id_foreign` (`medicament_id`);

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`id`),
  ADD KEY `patient_cms_users_id_foreign` (`cms_users_id`);

--
-- Indexes for table `relation`
--
ALTER TABLE `relation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `relation_patient_id_foreign` (`patient_id`),
  ADD KEY `relation_medecin_id_foreign` (`medecin_id`);

--
-- Indexes for table `rendez_vous`
--
ALTER TABLE `rendez_vous`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rendez_vous_patient_id_foreign` (`patient_id`),
  ADD KEY `rendez_vous_medecin_id_foreign` (`medecin_id`);

--
-- Indexes for table `secretaire`
--
ALTER TABLE `secretaire`
  ADD PRIMARY KEY (`id`),
  ADD KEY `secretaire_medecin_id_foreign` (`medecin_id`),
  ADD KEY `secretaire_cms_users_id_foreign` (`cms_users_id`);

--
-- Indexes for table `sous_domaine`
--
ALTER TABLE `sous_domaine`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sous_domaine_domaine_id_foreign` (`domaine_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `acte`
--
ALTER TABLE `acte`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `antecedants`
--
ALTER TABLE `antecedants`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `certificat`
--
ALTER TABLE `certificat`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `certificat_type`
--
ALTER TABLE `certificat_type`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cms_apicustom`
--
ALTER TABLE `cms_apicustom`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `cms_apikey`
--
ALTER TABLE `cms_apikey`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cms_dashboard`
--
ALTER TABLE `cms_dashboard`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cms_email_queues`
--
ALTER TABLE `cms_email_queues`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cms_email_templates`
--
ALTER TABLE `cms_email_templates`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cms_logs`
--
ALTER TABLE `cms_logs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `cms_menus`
--
ALTER TABLE `cms_menus`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `cms_menus_privileges`
--
ALTER TABLE `cms_menus_privileges`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `cms_moduls`
--
ALTER TABLE `cms_moduls`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `cms_notifications`
--
ALTER TABLE `cms_notifications`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `cms_privileges`
--
ALTER TABLE `cms_privileges`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `cms_privileges_roles`
--
ALTER TABLE `cms_privileges_roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `cms_settings`
--
ALTER TABLE `cms_settings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `cms_statistics`
--
ALTER TABLE `cms_statistics`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cms_statistic_components`
--
ALTER TABLE `cms_statistic_components`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cms_users`
--
ALTER TABLE `cms_users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `consultation`
--
ALTER TABLE `consultation`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `domaine`
--
ALTER TABLE `domaine`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `dom_sous_dom`
--
ALTER TABLE `dom_sous_dom`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `examen`
--
ALTER TABLE `examen`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `examen_type_image`
--
ALTER TABLE `examen_type_image`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `examen_type_text`
--
ALTER TABLE `examen_type_text`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `historique_salle_dattente`
--
ALTER TABLE `historique_salle_dattente`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `journal_dacces`
--
ALTER TABLE `journal_dacces`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lettre`
--
ALTER TABLE `lettre`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `liste_actes`
--
ALTER TABLE `liste_actes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `medecin`
--
ALTER TABLE `medecin`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `medicament`
--
ALTER TABLE `medicament`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `ordonnance`
--
ALTER TABLE `ordonnance`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `relation`
--
ALTER TABLE `relation`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `rendez_vous`
--
ALTER TABLE `rendez_vous`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `secretaire`
--
ALTER TABLE `secretaire`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sous_domaine`
--
ALTER TABLE `sous_domaine`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `acte`
--
ALTER TABLE `acte`
  ADD CONSTRAINT `acte_consultation_id_foreign` FOREIGN KEY (`consultation_id`) REFERENCES `consultation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `acte_medecin_id_foreign` FOREIGN KEY (`medecin_id`) REFERENCES `cms_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `acte_patient_id_foreign` FOREIGN KEY (`patient_id`) REFERENCES `cms_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `antecedants`
--
ALTER TABLE `antecedants`
  ADD CONSTRAINT `antecedants_medecin_id_foreign` FOREIGN KEY (`medecin_id`) REFERENCES `cms_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `antecedants_patient_id_foreign` FOREIGN KEY (`patient_id`) REFERENCES `cms_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `certificat`
--
ALTER TABLE `certificat`
  ADD CONSTRAINT `certificat_consultation_id_foreign` FOREIGN KEY (`consultation_id`) REFERENCES `consultation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `certificat_medecin_id_foreign` FOREIGN KEY (`medecin_id`) REFERENCES `cms_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `certificat_patient_id_foreign` FOREIGN KEY (`patient_id`) REFERENCES `cms_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `certificat_type`
--
ALTER TABLE `certificat_type`
  ADD CONSTRAINT `certificat_type_cms_users_id_foreign` FOREIGN KEY (`cms_users_id`) REFERENCES `cms_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `consultation`
--
ALTER TABLE `consultation`
  ADD CONSTRAINT `consultation_medecin_id_foreign` FOREIGN KEY (`medecin_id`) REFERENCES `cms_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `consultation_patient_id_foreign` FOREIGN KEY (`patient_id`) REFERENCES `cms_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `examen`
--
ALTER TABLE `examen`
  ADD CONSTRAINT `examen_consultation_id_foreign` FOREIGN KEY (`consultation_id`) REFERENCES `consultation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `examen_medecin_id_foreign` FOREIGN KEY (`medecin_id`) REFERENCES `cms_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `examen_patient_id_foreign` FOREIGN KEY (`patient_id`) REFERENCES `cms_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `examen_type_image`
--
ALTER TABLE `examen_type_image`
  ADD CONSTRAINT `examen_type_image_examen_id_foreign` FOREIGN KEY (`examen_id`) REFERENCES `examen` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `examen_type_text`
--
ALTER TABLE `examen_type_text`
  ADD CONSTRAINT `examen_type_text_examen_id_foreign` FOREIGN KEY (`examen_id`) REFERENCES `examen` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `historique_salle_dattente`
--
ALTER TABLE `historique_salle_dattente`
  ADD CONSTRAINT `historique_salle_dattente_medecin_id_foreign` FOREIGN KEY (`medecin_id`) REFERENCES `cms_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `historique_salle_dattente_patient_id_foreign` FOREIGN KEY (`patient_id`) REFERENCES `cms_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `journal_dacces`
--
ALTER TABLE `journal_dacces`
  ADD CONSTRAINT `journal_dacces_medecin_id_foreign` FOREIGN KEY (`medecin_id`) REFERENCES `cms_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `journal_dacces_patient_id_foreign` FOREIGN KEY (`patient_id`) REFERENCES `cms_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `lettre`
--
ALTER TABLE `lettre`
  ADD CONSTRAINT `lettre_consultation_id_foreign` FOREIGN KEY (`consultation_id`) REFERENCES `consultation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lettre_medecin_destiantaire_id_foreign` FOREIGN KEY (`medecin_destiantaire_id`) REFERENCES `cms_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lettre_medecin_id_foreign` FOREIGN KEY (`medecin_id`) REFERENCES `cms_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lettre_patient_id_foreign` FOREIGN KEY (`patient_id`) REFERENCES `cms_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `medecin`
--
ALTER TABLE `medecin`
  ADD CONSTRAINT `medecin_cms_users_id_foreign` FOREIGN KEY (`cms_users_id`) REFERENCES `cms_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `medecin_domaine_id_foreign` FOREIGN KEY (`domaine_id`) REFERENCES `domaine` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `medecin_sous_domaine_id_foreign` FOREIGN KEY (`sous_domaine_id`) REFERENCES `sous_domaine` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ordonnance`
--
ALTER TABLE `ordonnance`
  ADD CONSTRAINT `ordonnance_consultation_id_foreign` FOREIGN KEY (`consultation_id`) REFERENCES `consultation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ordonnance_medicament_id_foreign` FOREIGN KEY (`medicament_id`) REFERENCES `medicament` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ordonnance_patient_id_foreign` FOREIGN KEY (`patient_id`) REFERENCES `cms_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `patient`
--
ALTER TABLE `patient`
  ADD CONSTRAINT `patient_cms_users_id_foreign` FOREIGN KEY (`cms_users_id`) REFERENCES `cms_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `relation`
--
ALTER TABLE `relation`
  ADD CONSTRAINT `relation_medecin_id_foreign` FOREIGN KEY (`medecin_id`) REFERENCES `cms_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `relation_patient_id_foreign` FOREIGN KEY (`patient_id`) REFERENCES `cms_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `rendez_vous`
--
ALTER TABLE `rendez_vous`
  ADD CONSTRAINT `rendez_vous_medecin_id_foreign` FOREIGN KEY (`medecin_id`) REFERENCES `cms_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rendez_vous_patient_id_foreign` FOREIGN KEY (`patient_id`) REFERENCES `cms_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `secretaire`
--
ALTER TABLE `secretaire`
  ADD CONSTRAINT `secretaire_cms_users_id_foreign` FOREIGN KEY (`cms_users_id`) REFERENCES `cms_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `secretaire_medecin_id_foreign` FOREIGN KEY (`medecin_id`) REFERENCES `cms_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sous_domaine`
--
ALTER TABLE `sous_domaine`
  ADD CONSTRAINT `sous_domaine_domaine_id_foreign` FOREIGN KEY (`domaine_id`) REFERENCES `domaine` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
