CREATE DATABASE CryptoScraper;
use CryptoScraper;
CREATE TABLE CoinInfo
(CoinName varchar(15),
Price varchar(15),
PercentChange varchar(10),
PriceChange varchar(10),
MarketTime varchar(8),
MarketCap varchar(15),
Volume varchar(15),
ScrapeDate varchar(10));


INSERT INTO CoinInfo values('btc', '23000', '-7.65%', '-3000', '3:45pm', '365B', '200M', '2300-23-12');
DROP TABLE CryptoScraper.CoinInfo;

select * from CoinInfo;