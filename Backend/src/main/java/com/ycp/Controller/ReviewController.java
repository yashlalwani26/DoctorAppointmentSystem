package com.ycp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ycp.Classes.Doctor;
import com.ycp.Classes.Patient;
import com.ycp.Classes.Review;
import com.ycp.Services.DoctorServices;
import com.ycp.Services.PatientService;
import com.ycp.Services.ReviewService;
@CrossOrigin("*")
@RestController
@RequestMapping("/review")
public class ReviewController {
	
	@Autowired
	private ReviewService service;
	
	@Autowired
	private DoctorServices dservice;
	
	@Autowired PatientService pservice;
	
	@GetMapping("/{review_id}")	
	public Review getReviewById(@PathVariable long  review_id) {
		System.out.println("inside Review controller");
		return service.getReviewById(review_id);
	}
	@GetMapping("/getAll")
	public List<Review> getAll(){
		return service.getAllReview();
	}
	@PostMapping("/addreview/{pid}/{did}")
	public String AddReview(@RequestBody Review r,@PathVariable long pid,@PathVariable long did) {
		System.out.println(r+""+pid+did);
		Doctor d=dservice.getOneDoc(did);
		System.out.println(d);
		Patient p=pservice.findPatientById(pid);
		System.out.println(p);
		r.setReviewdid(dservice.getOneDoc(did));
		r.setReviewpid(pservice.findPatientById(pid));
		service.addreview(r);
		return "succssfully added";
	}
	

}
