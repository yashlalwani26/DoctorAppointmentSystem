package com.ycp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ycp.Classes.Doctor;
import com.ycp.Classes.Qualifications;
import com.ycp.Services.DoctorServices;
@CrossOrigin(origins = "*")
@RequestMapping("/doctor")
@RestController

public class DoctorController {
	@Autowired
	private DoctorServices dservice;
	
	@Autowired
	private QualificationController qcontroller;
	
	//this is used to display all the containt.
	@GetMapping("/OneToMany")
	public List<Qualifications> getAll() {
		List<Qualifications> list = dservice.getAll();
		return list;
	}
	//this is used to display all the containt.
	@GetMapping("/MayToOne")
	public List<Doctor> getAllDoc() {
		List<Doctor> list = dservice.getAllDoc();
		return list;
	}
	//this is uesd to show number of doctors available in the region.
	@PostMapping("/Pincode2/{medicalCourse}/{pin}")
	public Qualifications findDocInArea(@RequestParam String medicalCourse,@RequestParam String pin) {
		System.out.println(medicalCourse+"  "+pin);
		Qualifications q = dservice.findDocInArea(medicalCourse,pin);
		return q;
	}
	//this is uesd to Create new doctor.
	@PostMapping("/addDoctor")
	public void addDoctor(@RequestBody Doctor d) {
		dservice.addDoctor(d);
	}
	@GetMapping("/getOne/{id}")
	public Qualifications getOne(@RequestParam int id) {
		Qualifications q = dservice.getOne(id);
		return q;
	}
	@GetMapping("/getOneDoc/{id}")
	public Doctor getOneDoc(@PathVariable long id) {
		System.out.println(id);
		Doctor doc = dservice.getOneDoc(id);
		System.out.println(doc);
		return doc;
	}
	@GetMapping("/LoginDoctor/{email}/{password}")
	public Doctor loginDoctor(@RequestParam String email,@RequestParam String password) {
		System.out.println(email);
		System.out.println(password);
		return dservice.loginDoctor(email, password);
		 
	}
	
	@PostMapping("/updateDoctor")
	public void updateDoctor(@RequestBody Doctor doc) {

		dservice.updateDoctor(doc);
	}
	@GetMapping("/getByPincode/pincode")
	public List<Doctor> findByPinCode(@RequestParam String pincode){
		List<Doctor> dlist = dservice.findByPincode(pincode); 
		return dlist;
	}
	
	@GetMapping("/validation/value")
	public List<Doctor> findByValidation(@RequestParam boolean value){
		List<Doctor> list = dservice.findByValidation(value);
		return list;
	}
	@GetMapping("/UpdateValidation/{id}")
	public void updateValidation(@RequestParam long id) {
		dservice.ValidationUpdation(id);
	}
	@DeleteMapping("/DeleteMapping/{id}")
	public void DeleteDoctor(@PathVariable long id) {
		System.out.println(id);
		dservice.DeleteDoctor(id);
	}

	@GetMapping("/CheckForEmail/{email}")
	public String checkForEmail(@RequestParam String email) {
		String emailAddress =dservice.checkForEmail(email);
		System.out.println(email);
		System.out.println(emailAddress);
		return emailAddress;
	}
}
