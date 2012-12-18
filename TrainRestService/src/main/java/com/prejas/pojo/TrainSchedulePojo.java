package com.prejas.pojo;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class TrainSchedulePojo implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String trainNo;
	public String getTrainNo() {
		return trainNo;
	}
	public void setTrainNo(String trainNo) {
		this.trainNo = trainNo;
	}
	private String trainName;
	private String trainTime;
	private String stationName;
	public String getStationName() {
		return stationName;
	}
	public void setStationName(String stationName) {
		this.stationName = stationName;
	}
	public String getTrainName() {
		return trainName;
	}
	public void setTrainName(String trainName) {
		this.trainName = trainName;
	}
	public String getTrainTime() {
		return trainTime;
	}
	public void setTrainTime(String trainTime) {
		this.trainTime = trainTime;
	}

	
}
