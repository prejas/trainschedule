 DROP TABLE IF EXISTS trainschedule.trainschedule;
 CREATE TABLE trainschedule (
         id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
         train_no VARCHAR(50),
	 train_name VARCHAR(50),
         station_name VARCHAR(100),
         time TIMESTAMP,
         direction VARCHAR(2)
       );

  INSERT INTO trainschedule(id,train_no,train_name,station_name,time,direction) VALUES
  (1,'A-1234','CHICAGO-NY','CHICAGO','2012-01-01 23:11:00','NS'),
  (2,'A-1234','NY-ATLANTA','NY','2012-01-01 23:21:00','NS'),
  (3,'A-1234','WASHINGTON-CHICAGO','WASHINGTON','2012-01-01 23:31:00','NS'),
  (4,'A-1234','ATLANTA-NY','ATLANTA','2012-01-01 23:41:00','NS'),
  (5,'A-1235','CHICAGO-NY','ATLANTA','2012-01-01 23:11:00','SN'),
  (6,'A-1235','NY-ATLANTA','NY','2012-01-01 23:21:00','SN'),
  (7,'A-1235','WASHINGTON-WASHINGTON','CHICAGO','2012-01-01 23:31:00','SN'),
  (8,'A-1235','ATLANTA-NY','WASHINGTON','2012-01-01 23:41:00','SN')