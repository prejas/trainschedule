package com.prejas.rest;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.prejas.dao.TrainServiceDao;
import com.prejas.pojo.TrainSchedulePojo;

@Component
@Path("/trainservice")
public class TrainScheduleRestService {

	@Autowired
	TrainServiceDao trainService;

	@GET
	@Path("/stnames")
	@Produces(MediaType.APPLICATION_JSON)
	public List<TrainSchedulePojo> getAllStationNames() {
		return trainService.getAllTrainStationNames();
	}
	
	@GET
	@Path("/schtrains")
	@Produces(MediaType.APPLICATION_JSON)
	public List<TrainSchedulePojo> getAllScheduledTrains(@QueryParam("fromStation") String fromStation,@QueryParam("toStation") String toStation,@QueryParam("time") String time) {
		return trainService.getAllScheduledTrains(fromStation, toStation, time);
	}

}