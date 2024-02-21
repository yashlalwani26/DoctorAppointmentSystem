package com.ycp.Classes;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerator;

@Entity
@Table(name = "Patient")

public class Patient {
	
	//@GeneratedValue(strategy = GenerationType.AUTO)
	@Id
	@Column(name ="Patient_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long Pid;
	@Column(name ="First_name")
	private String first;
	@Column(name ="Middle_name")
	private String middle;
	@Column(name ="Last_name")
	private String last;
	@Column(name ="password")
	private String password;
	@Column(name ="MobileNO")
	private String MobileNo;
	@Column(name ="Email")
	private String emailID;
	@Column(name ="DOB")
	private Date dob;
	//@Enumerated(EnumType.STRING)
	@Column(name ="Gender")
	private String gender;

	@Column(name ="Area")
	private String Area;
	//@Enumerated(EnumType.STRING)
	@Column(name ="blood_Group")
	private String BloodGroup;
	@Column(name ="City")
	private String City;
	@Column(name ="State")
	private String State;
	@Column(name ="Country")
	private String Country;
	@Column(name ="pincode")
	private String PinCode;
	@Lob
	@Column(name ="profilepic")
	private byte[] profilepic;  
	
	@JsonIgnore
	@OneToMany(mappedBy = "reviewpid",cascade = CascadeType.ALL)
	private List<Review> reviewlist=new ArrayList<Review>();
	
	public Patient() {
		
	}




	public long getPid() {
		return Pid;
	}
	public void setPid(long pid) {
		Pid = pid;
	}
	public String getFirst() {
		return first;
	}

	public void setFirst(String first) {
		this.first = first;
	}

	public String getMiddle() {
		return middle;
	}

	public void setMiddle(String middle) {
		this.middle = middle;
	}

	public String getLast() {
		return last;
	}

	public void setLast(String last) {
		this.last = last;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobileNo() {
		return MobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.MobileNo = mobileNo;
	}

	public String getEmailID() {
		return emailID;
	}

	public void setEmailID(String emailID) {
		this.emailID = emailID;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getArea() {
		return Area;
	}

	public void setArea(String area) {
		Area = area;
	}

	public String getBloodGroup() {
		return BloodGroup;
	}

	public void setBloodGroup(String bloodGroup) {
		BloodGroup = bloodGroup;
	}

	public String getCity() {
		return City;
	}

	public void setCity(String city) {
		this.City = city;
	}

	public String getState() {
		return State;
	}

	public void setState(String state) {
		this.State = state;
	}

	public String getCountry() {
		return Country;
	}

	public void setCountry(String country) {
		this.Country = country;
	}

	public String getPinCode() {
		return PinCode;
	}

	public void setPinCode(String pinCode) {
		this.PinCode = pinCode;
	}


	public byte[] getProfilepic() {
		return profilepic;
	}

	public void setProfilepic(byte[] profilepic) {
		this.profilepic = profilepic;
	}
	@Override
	public String toString() {
		return "Patient [Pid=" + Pid + ", first=" + first + ", middle=" + middle + ", last=" + last + ", password="
				+ password + ", MobileNo=" + MobileNo + ", emailID=" + emailID + ", dob=" + dob + ", gender=" + gender
				+ ", Area=" + Area + ", BloodGroup=" + BloodGroup + ", City=" + City + ", State=" + State + ", Country="
				+ Country + ", PinCode=" + PinCode + ", profilepic=" + Arrays.toString(profilepic) + "]";
	}




	public List<Review> getReviewlist() {
		return reviewlist;
	}


	public void setReviewlist(List<Review> reviewlist) {
		this.reviewlist = reviewlist;
	}

	
	
}
