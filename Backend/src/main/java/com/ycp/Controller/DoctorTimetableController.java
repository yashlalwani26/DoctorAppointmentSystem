package com.ycp.Controller;

import java.sql.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ycp.Classes.BookAppointmentKey;
import com.ycp.Classes.BookedAppointment;
import com.ycp.Classes.DoctorTimeTable;
import com.ycp.Classes.DoctorTimeTableKey;
import com.ycp.Services.DoctorAppointmentService;
@RequestMapping("/timetable")
@CrossOrigin(origins = "*")
@RestController
public class DoctorTimetableController {
	@Autowired
	private DoctorAppointmentService dTimeService;
	//get all the slote from the database from doctortimetable;
	@GetMapping("/getAll")
	public List<DoctorTimeTable> getAllAppointments() {
		List<DoctorTimeTable> list = dTimeService.getAllAppointments();
		return list;
	}
	//Doctor can Add and update slot inside doctimetable table ;
	@PostMapping("/addSlot")
	public void addSlote(@RequestBody DoctorTimeTable dt){
		System.out.println("in add slotes");
		System.out.println(dt.getDockey()+" and"+dt.getBreakTime_end()+" and"+dt.getBreakTime_start()+"and "+dt.getDockey().getId()+" "+dt.getEnd_Time()+" "+dt.getSlotDuration()+" "+dt.getStart_Time());
		dTimeService.addSlot(dt);
	}
	//get all the slots  which are available for perticular date.
	@PostMapping("/getslot")
	public Map<String,String> getSlot(@RequestBody DoctorTimeTableKey key) {
		System.out.println(key.getId()+" "+key.getDateOfAppointment());
		
		Map<String,String> d = dTimeService.getSlots(key);
		System.out.println(d);
		return d;
	}
	
	@GetMapping("/getBookedSlotMadeByDoctorsDailly/{key}")
	public List<DoctorTimeTable> getTheDateWiseAppointment(@RequestParam long key) {
		List<DoctorTimeTable> bapp = dTimeService.getTheDateWiseAppointment(key);
		return bapp;
	}
	
	@GetMapping("/getBookedSlotByPatient/{key}")
	public List<BookedAppointment> getBookedSlotByPatient(@RequestParam long key) {
		List<BookedAppointment> bapp = dTimeService.getPatientBookedSlot(key);
		return bapp;
				
	}
	//get all booked slots for particular date and did from bookslotes table
	@GetMapping("/getAllBookedSlots/{d}/{did}")
		public List<BookedAppointment> getAllBookedSlotForDay(@RequestParam Date d,@RequestParam long did){
		System.out.println(did);
		List<BookedAppointment> list = dTimeService.getAllBookedSlotForDay(d, did);
		return list;
	}
	//to book appointment inside bookslotes table
	
	@PutMapping("/saveTheApointment")
	public void bookApointment(@RequestBody BookedAppointment bapp) {
		System.out.println("did= "+bapp.getBookId().getDid());	
		dTimeService.bookApointment(bapp);
	}//Cancel
	@PostMapping("/cancelAppointment")
	public void cancelAppointment(@RequestBody BookAppointmentKey key) {
		System.out.println(key.getDid());
		System.out.println(key.getPid());
		System.out.println(key.getDate());
		dTimeService.cancelAppointment(key);
		
	}
	
}
