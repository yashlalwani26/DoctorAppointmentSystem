package com.ycp.Classes;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "Review_And_Rating")
public class Review {
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	@Column(name = "Review_id")
	private long id;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "Rating",length = 20)
	private Rating rating;
	
	@Column(name = "Review")
	private String review;
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name="doctor_id")
	private Doctor reviewdid;
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name="patient_id")
	private Patient reviewpid;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Rating getRating() {
		return rating;
	}

	public void setRating(Rating rating) {
		this.rating = rating;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	public Doctor getReviewdid() {
		return reviewdid;
	}

	public void setReviewdid(Doctor reviewdid) {
		this.reviewdid = reviewdid;
	}

	public Patient getReviewpid() {
		return reviewpid;
	}

	public void setReviewpid(Patient reviewpid) {
		this.reviewpid = reviewpid;
	}

	public Review(long id, Rating rating, String review, Doctor reviewdid, Patient reviewpid) {
		super();
		this.id = id;
		this.rating = rating;
		this.review = review;
		this.reviewpid = reviewpid;
		this.reviewdid = reviewdid;
	}

	@Override
	public String toString() {
		return "Review [id=" + id + ", rating=" + rating + ", review=" + review + ", reviewpid=" + reviewpid
				+ ", reviewdid=" + reviewdid + "]";
	}
public Review() {
	// TODO Auto-generated constructor stub
}
	
	
}
	
	