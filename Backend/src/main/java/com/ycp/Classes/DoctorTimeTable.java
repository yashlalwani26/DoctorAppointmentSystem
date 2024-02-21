package com.ycp.Classes;

import java.sql.Time;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;
@Entity
@Table(name = "doctimetable")
public class DoctorTimeTable {
	
	
	@EmbeddedId
	private DoctorTimeTableKey dockey;
	@Column(name = "Start_Time")
	private Time Start_Time;
	@Column(name = "End_Time")
	private Time End_Time;
	@Column(name = "Slot_Duration")
	private Time SlotDuration;
	@Column(name = "Break_Time_start")
	private Time BreakTime_start;
	@Column(name = "Break_Time_end")
	private Time BreakTime_end;
	
	public DoctorTimeTable() {
		super();
	}
	public Time getStart_Time() {
		return Start_Time;
	}
	public void setStart_Time(Time start_Time) {
		Start_Time = start_Time;
	}
	public Time getEnd_Time() {
		return End_Time;
	}
	public void setEnd_Time(Time end_Time) {
		End_Time = end_Time;
	}
	public Time getSlotDuration() {
		return SlotDuration;
	}
	public void setSlotDuration(Time slotDuration) {
		SlotDuration = slotDuration;
	}
	public Time getBreakTime_start() {
		return BreakTime_start;
	}
	public void setBreakTime_start(Time breakTime_start) {
		BreakTime_start = breakTime_start;
	}
	public Time getBreakTime_end() {
		return BreakTime_end;
	}
	public void setBreakTime_end(Time breakTime_end) {
		BreakTime_end = breakTime_end;
	}


	public DoctorTimeTableKey getDockey() {
		return dockey;
	}


	public void setDockey(DoctorTimeTableKey dockey) {
		this.dockey = dockey;
	}


	@Override
	public String toString() {
		return "DoctorTimeTable [dockey=" + dockey + ", Start_Time=" + Start_Time + ", End_Time=" + End_Time
				+ ", SlotDuration=" + SlotDuration + ", BreakTime_start=" + BreakTime_start + ", BreakTime_end="
				+ BreakTime_end + "]";
	}

	
}
