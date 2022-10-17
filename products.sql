-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 17, 2022 at 10:44 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejs_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `brand` varchar(255) NOT NULL,
  `color` varchar(255) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `pic` varchar(2555) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `brand`, `color`, `price`, `pic`) VALUES
(1, 'Iphone X', 'Apple', 'Black/White', '30000000', 'https://www.apple.com/newsroom/images/product/iphone/standard/iphonex_front_back_glass_big.jpg.large.jpg'),
(2, 'Samsung S9', 'Samsung', 'Black/Pink', '24000000', 'https://img.global.news.samsung.com/vn/wp-content/uploads/2018/02/Star-Product-Image_sm_g960_galaxys9_front_purple_RGB.png'),
(3, 'LG V50', 'LG', 'Black', '300000', 'https://www.lg.com/us/images/cell-phones/md07000070/gallery/medium02.jpg'),
(4, 'IPhone 14', 'Apple', 'Black', '700000', 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-2up-midnight-220907_inline.jpg.large.jpg'),
(5, 'Samsung Z Flip', 'Samsung', 'Black', '800000', 'https://images.samsung.com/is/image/samsung/p6pim/vn/2208/gallery/vn-galaxy-z-flip4-f721-sm-f721blbaxxv-533051627?$684_547_PNG$'),
(6, 'Samsung Galaxy Fold 4', 'Samsung', 'Black', '1000000', 'https://images.samsung.com/vn/smartphones/galaxy-z-fold4/images/galaxy-z-fold4_highlights_experience_end.jpg'),
(7, 'LG G8', 'LG', 'Black', '350000', 'https://www.mobile57.com/product_images/moreimgs/webp/lg-g8-thinq-front-view-mobile57.webp?ezimgfmt=rs:382x382/rscb2/ng:webp/ngcb2'),
(8, 'LG Velvet', 'LG', 'Velvet', '350000', 'https://mobilemaya24.com/wp-content/uploads/2020/08/LG-Velvet.jpg'),
(9, 'Samsung A53', 'Samsung', 'Blue', '300000', 'https://images.samsung.com/is/image/samsung/p6pim/vn/2202/gallery/vn-galaxy-a53-5g-a536-sm-a536elbhxxv-531435496?$650_519_PNG$');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
