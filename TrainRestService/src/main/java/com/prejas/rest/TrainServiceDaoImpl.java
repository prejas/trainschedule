package com.prejas.rest;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.prejas.pojo.TrainSchedulePojo;

@Component
@Path("/trainservice")
public class TrainServiceDaoImpl {

	@Autowired
	TrainServiceDaoImpl trainService;

	@GET
	@Path("/stnames")
	@Produces(MediaType.TEXT_PLAIN)
	public List<String> getAllStationNames() {
		return trainService.getAllStationNames();
	}
	
	@GET
	@Path("/schtrains")
	@Produces(MediaType.APPLICATION_JSON)
	public List<TrainSchedulePojo> getAllScheduledTrains(@PathParam("fromStation") String fromStation,@PathParam("fromStation") String toStation,@PathParam("toStation") String time) {
		return trainService.getAllScheduledTrains(fromStation, toStation, time);
	}

}