package com.ycp.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ycp.Classes.Patient;
@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {

	public Optional<Patient> findByemailIDAndPassword(String email,String password);
	public Optional<Patient> findByemailID(String email);
}
