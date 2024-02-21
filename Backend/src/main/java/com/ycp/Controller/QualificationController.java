package com.ycp.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.ycp.Classes.Qualifications;
import com.ycp.Services.QualificationService;

@RestController
public class QualificationController {
	@Autowired
	private QualificationService service;
	
	public Qualifications getByQualificationID(int id) {
		 return service.getqualiId(id);
	}

}
