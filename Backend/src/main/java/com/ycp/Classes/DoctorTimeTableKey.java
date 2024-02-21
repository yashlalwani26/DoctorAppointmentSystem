package com.ycp.Classes;

import java.io.Serializable;
import java.sql.Date;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class DoctorTimeTableKey implements Serializable {
		
	@Column(name = "Doc_Did")
	private long id;

	@Column(name = "DateOfAppointment")
	private Date DateOfAppointment;

	public DoctorTimeTableKey() {
		super();
	}

	public DoctorTimeTableKey(long did, Date dateOfAppointment) {
		super();
		id = did;
		DateOfAppointment = dateOfAppointment;
	}

	@Override
	public int hashCode() {
		// TODO Auto-generated method stub
		return Objects.hash( id, DateOfAppointment );
	}

	@Override
	public boolean equals(Object o) {
		if ( this == o ) {
            return true;
        }
        if ( o == null || getClass() != o.getClass() ) {
            return false;
        }
        DoctorTimeTableKey pk = (DoctorTimeTableKey) o;
        return Objects.equals( id, pk.id ) &&
                Objects.equals( DateOfAppointment, pk.DateOfAppointment );
	}
	

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Date getDateOfAppointment() {
		return DateOfAppointment;
	}

	public void setDateOfAppointment(Date dateOfAppointment) {
		DateOfAppointment = dateOfAppointment;
	}
	
	
}
