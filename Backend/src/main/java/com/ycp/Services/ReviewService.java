package com.ycp.Services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ycp.Classes.Review;
import com.ycp.Repository.ReviewRepo;

@Service
@Transactional 
public class ReviewService {

	@Autowired
	private ReviewRepo repo;
	
	public Review getReviewById(long id) {
		return repo.getById(id);
	}
	
	public List<Review> getAllReview(){
		return repo.findAll();
	}

	public void addreview(Review r) {
		repo.save(r);
		
	}

}
