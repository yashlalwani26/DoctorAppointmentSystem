package com.ycp.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ycp.Classes.Qualifications;

public interface QualiRepository extends JpaRepository<Qualifications, Integer>  {
		public Optional<Qualifications> findByDocPincode(String pincode);
		public Optional<Qualifications> findByMedicalCourseAndDocPincode(String medical,String pincode);
}
