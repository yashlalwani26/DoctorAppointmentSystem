package com.ycp.Classes;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Embeddable;
@SuppressWarnings("serial")
@Embeddable
public class BookAppointmentKey implements Serializable {
	
	private long did ;
	
	private long pid ;
	@Column(name="date_of_appointment")
	private Date date;
	
	public BookAppointmentKey() {
		super();
	}

	public long getDid() {
		return did;
	}

	public void setDid(long did) {
		this.did = did;
	}	
	public long getPid() {
		return pid;
	}

	public void setPid(long pid) {
		this.pid = pid;
	}

	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((date == null) ? 0 : date.hashCode());
		result = prime * result + (int) (did ^ (did >>> 32));
		result = prime * result + (int) (pid ^ (pid >>> 32));
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		BookAppointmentKey other = (BookAppointmentKey) obj;
		if (date == null) {
			if (other.date != null)
				return false;
		} else if (!date.equals(other.date))
			return false;
		if (did != other.did)
			return false;
		if (pid != other.pid)
			return false;
		return true;
	}


	
}
