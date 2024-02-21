package com.ycp.Services;


import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.NoSuchElementException;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ycp.Classes.Patient;
import com.ycp.Repository.PatientRepository;

@Service
public class PatientService {
	@Autowired
	PatientRepository repo;
	
	public Patient findPatientById(Long id) {
		Patient p = repo.getById(id);
		return p;
	}
	
	public List getAllPatient() {
		List<Patient> plist = repo.findAll();
		return plist;
	
	}
	
	public int AddPatient(Patient p) {
		
//		String sha256hex = Hashing.sha256()
//				  .hashString(p.getPassword(), StandardCharsets.UTF_8)
//				  .toString();
//		p.setPassword(sha256hex);
		 
		try {
			MessageDigest dutil =  MessageDigest.getInstance("SHA-256");
			String sha256hex = DigestUtils.sha256Hex(p.getPassword());
			p.setPassword(sha256hex);
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		repo.save(p);
		System.out.println("Patient Saved");
		return 1;

	}

	public void updatePatient(Patient p) {
		Patient psave = repo.getById(p.getPid());
		
		if(psave.getMiddle()!=p.getMiddle())
			psave.setMiddle(p.getMiddle());
		
		if(psave.getFirst()!=p.getFirst())
			psave.setFirst(p.getFirst());
		if(psave.getEmailID()!=p.getEmailID())
			psave.setEmailID(p.getEmailID());
		
		if(psave.getLast()!=p.getLast())
			psave.setLast(p.getLast());
		
		
		if(psave.getMobileNo()!=p.getMobileNo())
			psave.setMobileNo(p.getMobileNo());
		
	
		
		if(psave.getDob()!=p.getDob())
			psave.setDob(p.getDob());
		
		if(!psave.getGender().equals(p.getBloodGroup()))
			psave.setGender(p.getGender());
		
		if(psave.getBloodGroup()!=p.getBloodGroup())
			psave.setBloodGroup(p.getBloodGroup());
		
		if(psave.getArea()!=p.getArea())
			psave.setArea(p.getArea());
		
		if(psave.getCity()!=p.getCity())
			psave.setCity(p.getCity());
		
		if(psave.getState()!=p.getState())
			psave.setState(p.getState());

		if(psave.getCountry()!=p.getCountry())
			psave.setCountry(p.getCountry());
		
		if(psave.getPinCode()!=p.getPinCode())
			psave.setPinCode(p.getPinCode());
		
		if(psave.getProfilepic()!=p.getProfilepic()) {
			psave.setProfilepic(p.getProfilepic());
		}
			System.out.println(p.getMobileNo());
		

		repo.save(psave);
		
	}
	public void deletePatient(Long pid) {
		repo.deleteById(pid);
	}
	public Patient loginPatient( String email, String password) {
		try {
			MessageDigest dutil =  MessageDigest.getInstance("SHA-256");
			String sha256hex = DigestUtils.sha256Hex(password);
			password = sha256hex;
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Patient p =repo.findByemailIDAndPassword(email, password).orElseThrow(()->new NoSuchElementException("Invalid Email And Password"));
		if(p!=null) {
			if(p.getEmailID().equals(email)&&p.getPassword().equals(password)) 
				return p;
		}
			return null;
		
	}
	public String checkForEmail(String email) {
		Patient p = repo.findByemailID(email).orElseThrow(()->new NoSuchElementException("Invalid Email"));
		if(p!=null) {
			if(p.getEmailID().equals(email))
			return p.getEmailID();
			}
		return null;
	}
}
