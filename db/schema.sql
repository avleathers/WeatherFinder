### Schema

CREATE DATABASE weatherforum_db;
USE weatherforum_db;

CREATE TABLE weather_inputs
(
	id int NOT NULL AUTO_INCREMENT,
	user_name varchar(255) NOT NULL,
	city_name varchar(255) NOT NULL,
	state_name varchar(255) NOT NULL,
	country_name varchar(255) NOT NULL,
	weather_input varchar(255) NOT NULL,
    ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    date DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);
