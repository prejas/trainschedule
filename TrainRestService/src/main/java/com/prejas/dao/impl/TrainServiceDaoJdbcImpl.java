package com.prejas.dao.impl;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import com.prejas.dao.TrainServiceDao;
import com.prejas.pojo.TrainSchedulePojo;

public class TrainServiceDaoJdbcImpl implements TrainServiceDao {

	private DataSource dataSource;

	public DataSource getDataSource() {
		return dataSource;
	}

	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}

	@Override
	public List<TrainSchedulePojo> getAllTrainStationNames() {
		Connection conn = null;
		List<TrainSchedulePojo> list = null;
		try {
			String query = "select * from trainschedule";
			// TODO Auto-generated method stub
			conn = dataSource.getConnection();
			Statement ps = conn.createStatement();
			ResultSet rs = ps.executeQuery(query);
			list = new ArrayList<TrainSchedulePojo>();
			while (rs.next()) {
				TrainSchedulePojo pojo=new TrainSchedulePojo();
				
				pojo.setStationName(String.valueOf(rs.getString("station_name")));
				list.add(pojo);
				System.out.println(rs.getString("station_name"));
			}

			return list;
		} catch (Exception e) {
			e.printStackTrace();

		} 
		return list;
	}

	@Override
	public List<TrainSchedulePojo> getAllScheduledTrains(String fromStation,
			String toStation, String dateTime) {
		Connection conn = null;
		List<TrainSchedulePojo> list = null;
		try {
			String query = "select train_no,train_name,time from trainschedule where train_name like '%"+fromStation+"%' and train_name like '%"+toStation+"%' and time='"+dateTime+"'";
			conn = dataSource.getConnection();
			Statement ps = conn.createStatement();
			ResultSet rs = ps.executeQuery(query);
			list = new ArrayList<TrainSchedulePojo>();
			while (rs.next()) {
				TrainSchedulePojo pojo = new TrainSchedulePojo();
				pojo.setTrainNo(rs.getString("train_no"));
				pojo.setTrainName(rs.getString("train_name"));
				pojo.setTrainTime(String.valueOf(rs.getTimestamp("time")));
				list.add(pojo);
			}
			return list;
		} catch (Exception e) {

		} finally {
			try {
				conn.close();
			} catch (SQLException e) {

			}
		}
		// TODO Auto-generated method stub
		return list;
	}

}