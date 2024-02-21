package com.ycp.Controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ycp.Classes.Patient;
import com.ycp.Services.PatientService;

@CrossOrigin("*")
@RestController
@RequestMapping("/patient")
public class PatientController {
	@Autowired
	PatientService pService;
	@GetMapping("/one/{Pid}")
	public Patient findPatientById(@RequestParam Long Pid) {
		System.out.println(Pid);
		Patient p = pService.findPatientById(Pid);
		return p;
	}
	@GetMapping("/getAll")
	public List getAllPatient() {
		System.out.println("Get All called");
		List<Patient> plist = pService.getAllPatient();

		return plist;
	}
	@PostMapping("/addPatient")
	public int addPatient(@RequestBody Patient p) {
	
		System.out.println(p.toString());
		pService.AddPatient(p);
		return 1;
	}
	@PutMapping("/updatePatient")
	public void updatePatient(@RequestBody Patient p) {
		
		pService.updatePatient(p);
		
	}
	@DeleteMapping("/deletePatient/{Pid}")
	public void deletePatient(@RequestParam Long Pid) {
		pService.deletePatient(Pid);
		System.out.println("Patient Deleted Successfully");
	}

	
	@GetMapping("/patientLogin/{email}/{password}")
	public Patient loginPatient(@RequestParam String email,@RequestParam String password) {
		System.out.println(email+"  "+password);
		Patient p = pService.loginPatient(email, password);
		return p;
	}

	
	@GetMapping("/checkForEmail/{email}")
	public String checkForEmail(@RequestParam String email) {
		String emailId =pService.checkForEmail(email);
		return emailId;
	}
}
