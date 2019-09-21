-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 21, 2019 at 02:49 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db_finance`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cart_details`
--

CREATE TABLE IF NOT EXISTS `tbl_cart_details` (
  `product_name` varchar(60) NOT NULL,
  `user_name` varchar(60) NOT NULL,
  `quantity` int(2) NOT NULL,
  `flag` tinyint(1) NOT NULL,
  `product_price` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_cart_details`
--

INSERT INTO `tbl_cart_details` (`product_name`, `user_name`, `quantity`, `flag`, `product_price`) VALUES
('PRODUCT_ONE', 'Gita Katigar', 2, 1, '520'),
('PRODUCT_ONE', 'Gita Katigar', 2, 1, '520'),
('PRODUCT_ONE', 'Gita Katigar', 2, 1, '520'),
('PRODUCT_ONE', 'Gita Katigar', 2, 1, '520');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_login`
--

CREATE TABLE IF NOT EXISTS `tbl_login` (
  `user_name` varchar(60) NOT NULL,
  `password` varchar(100) NOT NULL,
  `access` tinyint(1) NOT NULL,
  PRIMARY KEY (`user_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_login`
--

INSERT INTO `tbl_login` (`user_name`, `password`, `access`) VALUES
('Premal Katigar', 'pskpsk', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_orders`
--

CREATE TABLE IF NOT EXISTS `tbl_orders` (
  `order_id` varchar(60) NOT NULL,
  `order_product` varchar(60) NOT NULL,
  `order_by` varchar(60) NOT NULL,
  `order_amount` varchar(60) NOT NULL,
  `quantity` int(2) NOT NULL,
  `order_date` datetime NOT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_orders`
--

INSERT INTO `tbl_orders` (`order_id`, `order_product`, `order_by`, `order_amount`, `quantity`, `order_date`) VALUES
('391907439D', 'PRODUCT_TWO', 'Premal Katigar', '850', 2, '2019-09-21 18:04:13');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_products`
--

CREATE TABLE IF NOT EXISTS `tbl_products` (
  `product_name` varchar(50) NOT NULL,
  `product_price` varchar(50) NOT NULL,
  `quantity` int(2) NOT NULL,
  `entry_date` datetime NOT NULL,
  PRIMARY KEY (`product_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_products`
--

INSERT INTO `tbl_products` (`product_name`, `product_price`, `quantity`, `entry_date`) VALUES
('', '', 2, '2019-09-21 18:02:26'),
('PRODUCT_ONE', '850', 50, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE IF NOT EXISTS `tbl_users` (
  `user_name` varchar(60) NOT NULL,
  `email` varchar(150) NOT NULL,
  `address` text NOT NULL,
  `mobile_no` varchar(10) NOT NULL,
  `entry_date` datetime NOT NULL,
  PRIMARY KEY (`user_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`user_name`, `email`, `address`, `mobile_no`, `entry_date`) VALUES
('Gita Katigar', 'gitakatigar@gmail.com', '170 parvat gam surat', '8888888888', '2019-09-21 13:49:59'),
('Premal Katigar', 'premal.katigar@gmail.com', '170 parvat gam surat', '8141495299', '2019-09-21 13:44:45');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
