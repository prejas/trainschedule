 DROP TABLE IF EXISTS trainschedule.trainschedule;
 CREATE TABLE trainschedule (
         id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
         train_no VARCHAR(50),
	 train_name VARCHAR(50),
         station_name VARCHAR(100),
         time TIMESTAMP,
         direction VARCHAR(2)
       );
