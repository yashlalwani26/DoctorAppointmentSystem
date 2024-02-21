package com.ycp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ycp.Classes.Review;

@Repository
public interface ReviewRepo extends JpaRepository<Review,Long>{

}
