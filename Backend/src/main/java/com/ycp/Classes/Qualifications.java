package com.ycp.Classes;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
@Entity
@Table(name ="Qualification")
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "id")
public class Qualifications {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "quali_id")
	private int Id;
	@Column(name = "Medical_Course")
	private String medicalCourse;
	@JsonIgnore
	@OneToMany(mappedBy ="Course_no" , cascade = CascadeType.ALL)
	private List<Doctor> doc=new ArrayList<Doctor>();
	public Qualifications() {
	
	}

	public Qualifications(int id) {
		super();
		Id = id;
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}


	public String getMedicalCourse() {
		return medicalCourse;
	}

	public void setMedicalCourse(String medicalCourse) {
		this.medicalCourse = medicalCourse;
	}

	public List<Doctor> getDoc() {
		return doc;
	}

	public void setDoc(List<Doctor> doc) {
		this.doc = doc;
	}



	
}
