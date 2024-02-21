package com.ycp.exception_handler;

import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.ycp.DTO.ApiResponse;

@RestControllerAdvice // mandatory !
public class GlobalExceptionHandler {
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<?> handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
		Map<String, String> map = new HashMap<>();
		for (FieldError f : e.getFieldErrors())
			map.put(f.getField(), f.getDefaultMessage());
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(map);
	}
	@ExceptionHandler(NoSuchElementException.class)
	public ResponseEntity<?> handleNoSuchElementException(MethodArgumentNotValidException e) {
		Map<String, String> map = new HashMap<>();
		for (FieldError f : e.getFieldErrors())
			map.put(f.getField(), f.getDefaultMessage());
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(map);
	}

	// add another exc handling method to handle Resource not found exc
//	@ExceptionHandler(ResourceNotFoundException.class)
//	public ResponseEntity<?> handleResourceNotFoundException(ResourceNotFoundException e) {
//		System.out.println("handle res not found "+e);
//		return ResponseEntity
//				.status(HttpStatus.NOT_FOUND)
//				.body(new ApiResponse(e.getMessage()));		
//	}
	//catch-all 
	@ExceptionHandler(Exception.class)
	public ResponseEntity<?> handleException(Exception e)
	{
		System.out.println("in catch-all "+e);
		return ResponseEntity
				.status(HttpStatus.INTERNAL_SERVER_ERROR) //500
				.body(new ApiResponse(e.getMessage()));
	}

}
