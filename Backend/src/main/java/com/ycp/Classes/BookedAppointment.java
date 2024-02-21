package com.ycp.Classes;


import java.sql.Time;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;
@Entity
@Table(name="bookslotes")
public class BookedAppointment {
	@EmbeddedId
	private BookAppointmentKey bookId;

	private Time start; 

	private Time end;
	
	public BookedAppointment() {
		super();
	}

	public Time getStart() {
		return start;
	}
	public void setStart(Time start) {
		this.start = start;
	}
	public Time getEnd() {
		return end;
	}
	public void setEnd(Time end) {
		this.end = end;
	}

	public BookAppointmentKey getBookId() {
		return bookId;
	}

	public void setBookId(BookAppointmentKey bookId) {
		this.bookId = bookId;
	}
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return super.toString();
	}
}
