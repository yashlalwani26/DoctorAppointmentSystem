package com.ycp.Repository;



import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ycp.Classes.DoctorTimeTable;
import com.ycp.Classes.DoctorTimeTableKey;
@Repository
public interface DocTimeTableRepository extends JpaRepository<DoctorTimeTable, DoctorTimeTableKey> {
		
		Optional<DoctorTimeTable> findByDockey(DoctorTimeTableKey id);
		List<DoctorTimeTable> findByDockeyId(long id);
}
