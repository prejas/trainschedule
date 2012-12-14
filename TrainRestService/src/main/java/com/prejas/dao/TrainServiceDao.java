package com.prejas.dao;

import java.util.List;

import com.prejas.pojo.TrainSchedulePojo;
 
public interface TrainServiceDao{
 
	List<String> getAllTrainStationNames();
	List<TrainSchedulePojo> getAllScheduledTrains(String fromStation,String toStation,String dateTime);
 
}