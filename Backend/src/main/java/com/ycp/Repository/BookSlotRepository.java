package com.ycp.Repository;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ycp.Classes.BookAppointmentKey;
import com.ycp.Classes.BookedAppointment;
@Repository
public interface BookSlotRepository extends JpaRepository<BookedAppointment, BookAppointmentKey> {
	public List<BookedAppointment> findByBookIdPid(long key);
	public List<BookedAppointment> findByBookIdDid(long key);
	public List<BookedAppointment> findByBookIdDateAndBookIdDid(Date d,long did);
	public Optional<BookedAppointment> deleteByBookId(BookAppointmentKey id);
}
