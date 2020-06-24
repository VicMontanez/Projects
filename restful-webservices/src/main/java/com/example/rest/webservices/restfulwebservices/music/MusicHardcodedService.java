package com.example.rest.webservices.restfulwebservices.music;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;


@Service
public class MusicHardcodedService {
	
	private static List<Music> music = new ArrayList<Music>();
	private static int idCounter = 0;
	
	static {
		music.add(new Music(++idCounter, "username","Drake", new Date(), false ));
		music.add(new Music(++idCounter, "username","Snoop Dogg", new Date(), false ));
		music.add(new Music(++idCounter, "username","Jay-z", new Date(), false ));
	}
	
	public List<Music> findAll() {
		return music;
		
	}
}

// vid 11 6:48