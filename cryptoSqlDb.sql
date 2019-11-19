CREATE DATABASE cryptoscraper;
use cryptoscraper;
CREATE TABLE coin_info
(coin_name varchar(15),
price varchar(15),
price_change_percent varchar(10),
price_change varchar(10),
market_time varchar(8),
market_cap varchar(15),
volume varchar(15),
scrape_date varchar(10),
pull_id int NOT NULL AUTO_INCREMENT, 
PRIMARY KEY (pull_id));


INSERT INTO coin_info values('btc', '23000', '-7.65%', '-3000', '3:45pm', '365B', '200M', '2300-23-12', 0);
DROP TABLE cryptoscraper.coin_info;


select * from coin_info;