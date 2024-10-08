package com.trainservice.service;

import java.time.LocalDate;
import java.util.List;

import com.trainservice.entity.Train;

public interface TrainService {
	
	String addTrain(Train t);
	List<Train> getAll();
	List<Train> getByLocation(String source,String destination,LocalDate date);
	Train getTrain(String trainNumber);
	String updateTrain(Train t);
	String deleteTrain(Long id);

}