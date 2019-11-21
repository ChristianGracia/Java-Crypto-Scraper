use cryptoscraper;
CREATE TABLE users
(username varchar(50),
pass varchar(50),
create_date varchar(10),
user_id int NOT NULL AUTO_INCREMENT,
PRIMARY KEY (user_id));

select * FROM  users;

DROP TABLE cryptoscraper.users;

INSERT INTO users values("taylor", "ltc", "6666666677", 0);