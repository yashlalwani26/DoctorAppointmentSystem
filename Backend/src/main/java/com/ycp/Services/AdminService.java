package com.ycp.Services;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.NoSuchElementException;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ycp.Classes.Admin;
import com.ycp.Repository.AdminRepository;
@Service
public class AdminService {
	@Autowired
	private AdminRepository adminRepo;
	
	public Admin getAdmin(int id) {
		Admin ad = adminRepo.findById(id).get();
		return ad;
	}
	
	public void addAdmin(Admin admin) throws NoSuchAlgorithmException {
		//String sha256hex =null;
		
			
			MessageDigest dutil =  MessageDigest.getInstance("SHA-256");
			String sha256hex = DigestUtils.sha256Hex(admin.getPassWord());
			admin.setPassWord(sha256hex);
			//adminRepo.save(admin);
		
		adminRepo.save(admin);
	}
	
	public void deletMapping(int id) {
		adminRepo.deleteById(id);
		}
	
	public Admin loginAdmin(String email,String password) {
		String sha256hex =null;
		try {
			MessageDigest dutil =  MessageDigest.getInstance("SHA-256");
			 sha256hex = DigestUtils.sha256Hex(password);
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Admin ad = adminRepo.findByemailAndPassWord(email, sha256hex).orElseThrow(()->new NoSuchElementException("Invalid Email And Password "));
		if(ad!=null) {
			if(ad.getEmail().equals(email)&&ad.getPassWord().equals(sha256hex))
				return ad;
		} 
	
			return null;
	}
	
}
