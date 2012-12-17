package com.prejas.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
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
	public List<String> getAllTrainStationNames() {
		Connection conn = null;
		List<String> list = null;
		try {
			String query = "select station_name from trainschedule";
			// TODO Auto-generated method stub
			conn = dataSource.getConnection();
			Statement ps = conn.createStatement();
			ResultSet rs = ps.executeQuery(query);
			list = new ArrayList<String>();
			while (rs.next()) {
				list.add(String.valueOf(rs.getString(0)));
			}

			return list;
		} catch (Exception e) {

		} finally {
			try {
				conn.close();
			} catch (SQLException e) {

			}
		}
		return list;
	}

	@Override
	public List<TrainSchedulePojo> getAllScheduledTrains(String fromStation,
			String toStation, String dateTime) {
		Connection conn = null;
		List<TrainSchedulePojo> list = null;
		try {
			String query = "select train_name,time from trainschedule where station_name="
					+ fromStation
					+ " and station_name="
					+ toStation
					+ " and time=" + dateTime + " ";
			conn = dataSource.getConnection();
			Statement ps = conn.createStatement();
			ResultSet rs = ps.executeQuery(query);
			list = new ArrayList<TrainSchedulePojo>();
			while (rs.next()) {
				TrainSchedulePojo pojo = new TrainSchedulePojo();
				pojo.setTrainName(String.valueOf(rs.getString(0)));
				pojo.setTrainName(String.valueOf(rs.getString(1)));
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