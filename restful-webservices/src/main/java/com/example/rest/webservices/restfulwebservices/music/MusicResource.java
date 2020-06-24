package com.example.rest.webservices.restfulwebservices.music;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MusicResource {
	
	@Autowired
	private MusicHardcodedService musicService;
	
	public List<Music> getAllMusic(String username){
		return musicService.findAll();
	}
}