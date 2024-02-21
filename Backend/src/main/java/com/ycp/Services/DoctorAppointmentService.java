package com.ycp.Services;

import java.sql.Date;
import java.sql.Time;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.ycp.Classes.BookAppointmentKey;
import com.ycp.Classes.BookedAppointment;
import com.ycp.Classes.DoctorTimeTable;
import com.ycp.Classes.DoctorTimeTableKey;
import com.ycp.Repository.BookSlotRepository;
import com.ycp.Repository.DocTimeTableRepository;

@Service
public class DoctorAppointmentService {
	@Autowired
	private DocTimeTableRepository dtimerepo;
	
	@Autowired
	private BookSlotRepository bookSloteRepo;
	
	public List<DoctorTimeTable> getAllAppointments() {
		List<DoctorTimeTable> list = dtimerepo.findAll();

		return list;
	}
	public void addSlot(DoctorTimeTable dt) {
		dtimerepo.save(dt);
		System.out.println("new slot added");
	}
	
	public Map<String,String> getSlots(DoctorTimeTableKey key) {
		System.out.println("id= "+key.getId());
		DoctorTimeTable d = dtimerepo.findByDockey(key).orElseThrow(()->new NoSuchElementException("Invalid Key"));
		if(d==null) {
			return null;
		}
		System.out.println();
		//d.toString();
		Map<String,String> tset =null;
		if(d!=null) {
			Time start_t =d.getStart_Time();
			Time End_t =d.getEnd_Time();
			Time break_start_t =d.getBreakTime_start();
			Time break_end_t =d.getBreakTime_end();
			Time slotDuration =d.getSlotDuration();
			System.out.println(slotDuration.toString().substring(3,5));
			//Integer.parseInt(slotDuration.toString());
			//Integer.parseInt(start_t.toString());
			System.out.println(start_t.toString().substring(0, 2).concat(start_t.toString().substring(3, 5)));
			List<String> t = new ArrayList<String>();
			for(Time i =start_t;!i.equals(End_t);) {
				t.add(i.toString());
				int min = i.getMinutes()+slotDuration.getMinutes();
				if(min >=60) {
					int hr = i.getHours()+(min/60);
					int min2 = min%60;
					i.setHours(hr);
					i.setMinutes(min2);
					
				}else {
					i.setMinutes(min);
				
				}
					System.out.print(i+"  ");
				}
			System.out.println("map started");
			tset = new HashMap<String, String>();
			for(int i =0;i<t.size()-1;i++) {
				tset.put(t.get(i), t.get(i+1));
			}
			tset.forEach((k,v) -> System.out.println("Key = "
	                + k + ", Value = " + v));
			////////////////////////////////////////////////
			
			List<String> breTimes = new ArrayList<String>();
			System.out.println("Break Time end "+break_end_t);
			System.out.println("Break Time start"+break_start_t);
			
			for(Time c =break_start_t;!c.equals(break_end_t);) {
				breTimes.add(c.toString());
				System.out.print(c+"  Break Time Start");
				int min = c.getMinutes()+slotDuration.getMinutes();
				
				if(min >=60) {
					int hr = c.getHours()+(min/60);
					int min2 = min%60;
					c.setHours(hr);
					c.setMinutes(min2);
					
				}else {
					c.setMinutes(min);
				
				}
				}
			Iterator<String> it1 = tset.keySet().iterator();
			for (String time : breTimes) {
				while (it1.hasNext()) {
					String key44 = it1.next();
					if(key44.equals(time)) {
						it1.remove();
		            	break;
					}
				}
			}
			Map<String,String> breakSlotDuration = new HashMap<String, String>();
			for(int i =0;i<breTimes.size()-1;i++) {
				//System.out.println(breTimes.get(i).toString()+" "+breTimes.get(i+1).toString());
				breakSlotDuration.put(breTimes.get(i).toString(), breTimes.get(i+1).toString());
			}
		
			breakSlotDuration.forEach((k,v) -> System.out.println("breakSlotDuration Key = "
	                + k + ",breakSlotDuration Value = " + v));
		}
		System.out.println("list started");
	
		List<BookedAppointment> list = bookSloteRepo.findByBookIdDateAndBookIdDid(key.getDateOfAppointment(), key.getId());
		
		if(list !=null) {
			Iterator<String> it1 = tset.keySet().iterator();
			while (it1.hasNext()) {
				String key44 = it1.next();
				//System.out.println(key44);
				for(int i =0; i<list.size();i++) {
				String tom = list.get(i).getStart().toString();
				
				if(key44.equals(tom)) {
					it1.remove();
	            	break;
	            }
			}
		}
		}
		for (Map.Entry<String,String> entry : tset.entrySet()) {
			//System.out.println(entry.getKey()+" "+entry.getValue());
		}
		System.out.println(tset.size());
            
		return tset;
	}
	
	public List<BookedAppointment> getPatientBookedSlot(Long key) {
		List<BookedAppointment> bapp = bookSloteRepo.findByBookIdPid(key);
		return bapp;
	}
	public List<BookedAppointment> getAllBookedSlotForDay(Date d,long did){
		
		List<BookedAppointment> list = bookSloteRepo.findByBookIdDateAndBookIdDid(d, did);
		return list;
	}
	public void bookApointment(BookedAppointment bapp) {
		System.out.println(bapp.getBookId().getDid());
		bookSloteRepo.save(bapp);
		System.out.println("Saved succesfull");
	}
	
	public void cancelAppointment(BookAppointmentKey key) {
		bookSloteRepo.deleteById(key);
		System.out.println("Appointment Canceled");
	}
	
	public List<DoctorTimeTable> getTheDateWiseAppointment(@RequestBody long key) {
		List<DoctorTimeTable> bapp = dtimerepo.findByDockeyId(key);
		return bapp;
	}
}
