CREATE DATABASE CryptoScraper;
use CryptoScraper;
CREATE TABLE CoinInfo
(CoinName varchar(50),
Price varchar(20),
PercentChange varchar(10),
PriceChange varchar(10),
MarketTime varchar(50),
MarketCap varchar(50),
Volume varchar(50));

INSERT INTO CoinInfo values('btc', '23000', '-7.65%', '-3000', '3:45pm', '365B', '200M');
DROP TABLE CryptoScraper.CoinInfo;

select * from CoinInfo;