package com.ycp.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ycp.Classes.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {
	
	
	
	 //@QUERY(NAME ="SELECT * FROM DTABLE LEFT OUTER JOIN QUALIFICATION ON DTABLE.COURSE_NO = QUALIFICATION.COURSE_NO",NATIVEQUERY = TRUE) 
		//public List<Doctor> findByQuali(Qualifications q);
		
		//@Query(name = "select * from dtable where pincode = ?",nativeQuery = true)
		public List<Doctor> findByPincode(String pincode);
		//public List<Doctor> finByQuali(Qualifications q);
		public Optional<Doctor> findByEmailAndPassword(String emial,String password);
		public List<Doctor> findByValidation(boolean val);
		public Optional<Doctor> findByEmail(String email);
		
}
