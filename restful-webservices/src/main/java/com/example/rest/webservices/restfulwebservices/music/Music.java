package com.example.rest.webservices.restfulwebservices.music;

import java.util.Date;

public class Music {
	private long id;
	private String suername;
	private String description;
	private Date targetDate;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getSuername() {
		return suername;
	}
	public void setSuername(String suername) {
		this.suername = suername;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getTargetDate() {
		return targetDate;
	}
	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}
	public boolean isDone() {
		return isDone;
	}
	public void setDone(boolean isDone) {
		this.isDone = isDone;
	}
	private boolean isDone;

}
