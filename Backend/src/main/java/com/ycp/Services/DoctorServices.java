package com.ycp.Services;


import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.NoSuchElementException;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.ycp.Classes.Doctor;
import com.ycp.Classes.Qualifications;
import com.ycp.Repository.DoctorRepository;
import com.ycp.Repository.QualiRepository;


@Service

public class DoctorServices  {
	
	@Autowired		
	private DoctorRepository drepo;
	@Autowired
	private QualiRepository qrepo;
	
	
	
	public List<Qualifications> getAll(){
		
		List<Qualifications> quali = qrepo.findAll();
		return quali;
	}
	
	public List<Doctor> getAllDoc(){
		
		List<Doctor> quali = drepo.findAll();
		return quali;
	}
	
	public Qualifications findDocInArea(@RequestParam String medicalCourse,@RequestParam String pincode) {
		Qualifications q =qrepo.findByMedicalCourseAndDocPincode(medicalCourse,pincode).orElseThrow(()->new NoSuchElementException("Invalid Pincode"));
		return q; 
	}
	
	public void addDoctor(Doctor doc) {
	
		try {
			MessageDigest dutil =  MessageDigest.getInstance("SHA-256");
			String sha256hex = DigestUtils.sha256Hex(doc.getPassword());
			doc.setPassword(sha256hex);
		} catch (NoSuchAlgorithmException e) {
			System.out.println("in add doctor service");
			e.printStackTrace();
		}
		drepo.save(doc);
		System.out.println("Doctor Created");
	}
	
	public Qualifications getOne(int id) {
		Qualifications q = qrepo.getById(id);
		return q;
	}
	
	public Doctor getOneDoc(long id) {
		Doctor doc = drepo.findById(id).orElseThrow(()->new NoSuchElementException("Invalid Email"));
		return doc;
	}
	
	public Doctor loginDoctor(String email,String password ) {
		String sha256hex =null;
		try {
			MessageDigest dutil =  MessageDigest.getInstance("SHA-256");
			 sha256hex = DigestUtils.sha256Hex(password);
			
		} catch (NoSuchAlgorithmException e) {
			System.out.println("Inside backend doctor");
			e.printStackTrace();
		}
		
		Doctor doc = drepo.findByEmailAndPassword(email, sha256hex).orElseThrow(()->new NoSuchElementException("Invalid Email"));
	System.out.println("password = "+doc.getPassword());
	System.out.println(sha256hex);
//		System.out.println("area ="+doc.getArea());
		if(doc!=null) {
			if(doc.getEmail().equals(email) && doc.getPassword().equals(sha256hex)) {
				System.out.println("inside doctor ");
				//	if(doc.isValidation()==true)
						return doc;
				}else {
					
					return  null;
				}
		}
		
		return null;
	}
	
	public void updateDoctor(Doctor doc) {
	Doctor temp =drepo.findById(doc.getDid()).get();
	if(!temp.getFirst_name().equals(doc.getFirst_name())) {
		temp.setFirst_name(doc.getFirst_name());
	}
	if(!temp.getLast_name().equals(doc.getLast_name())) {
		temp.setFirst_name(doc.getLast_name());
	}
	if(!temp.getMiddle_name().equals(doc.getMiddle_name())) {
		temp.setMiddle_name(doc.getMiddle_name());
	}
	

	
	if(!temp.getMob_no().equals(doc.getMob_no())) {
		temp.setMob_no(doc.getMob_no());
	}
	if(!temp.getEmail().equals(doc.getEmail())) {
		temp.setEmail(doc.getEmail());
	}
	if(!temp.getDob().equals(doc.getDob())) {
		temp.setDob(doc.getDob());
	}
	if(!temp.getArea().equals(doc.getArea())) {
		temp.setArea(doc.getArea());
	}
	if(!temp.getCity().equals(doc.getCity())) {
		temp.setCity(doc.getCity());
	}
	if(!temp.getState().equals(doc.getState())) {
		temp.setState(doc.getState());
	}
	if(!temp.getCountry().equals(doc.getCountry())) {
		temp.setCountry(doc.getCountry());
	}
	if(!temp.getPincode().equals(doc.getPincode())) {
		temp.setPincode(doc.getPincode());
	}
	if(temp.getFees() !=doc.getFees()) {
		temp.setFees(doc.getFees());
	}	
	if(!temp.getLangauges().equals(doc.getLangauges())) {
		temp.setLangauges(doc.getLangauges());
	}
	if(!temp.getPractice_start_year().equals(doc.getPractice_start_year())) {
		temp.setPractice_start_year(doc.getPractice_start_year());
	}
	if(!temp.getGender().equals(doc.getGender())) {
		temp.setGender(doc.getGender());
	}
//	if(!temp.getCourse_no().equals(doc.getCourse_no())) {
//		temp.setCourse_no(doc.getCourse_no());
//	}
	
	
//	if(!temp.getProfile_pic().equals(doc.getProfile_pic())) {
//		temp.setProfile_pic(doc.getProfile_pic());
//	}
	drepo.save(temp);
	System.out.println("Doctor updated succesefully");
	}
	public List<Doctor> findByPincode(String pincode){
		List<Doctor> dlist = drepo.findByPincode(pincode);
		return dlist;
	}
	public List<Doctor> findByValidation(boolean value){
		List<Doctor> list = drepo.findByValidation(value); 
		return list;
	}
	public void ValidationUpdation(long id) {
		Doctor doc = drepo.findById(id).get();
		doc.setValidation(true);
		drepo.save(doc);
		System.out.println("Validation Done");
	}
	public void DeleteDoctor(long Did) {
		drepo.deleteById(Did);
	}
	
	public String checkForEmail(String email) {
		Doctor doc = drepo.findByEmail(email).orElseThrow(()->new NoSuchElementException("Invalid Email"));
		if(doc!=null) {
			if(doc.getEmail().equals(email))
				return doc.getEmail();
		}
			
			return null;
	}

}
