package com.example.rest.webservices.restfulwebservices.music;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


import org.springframework.stereotype.Service;


@Service
public class MusicHardcodedService {
	
	private static List<Music> musics = new ArrayList<Music>();
	private static int idCounter = 0;
	
	static {
		musics.add(new Music(++idCounter, "username","Drake", new Date(), false ));
		musics.add(new Music(++idCounter, "username","Snoop Dogg", new Date(), false ));
		musics.add(new Music(++idCounter, "username","Jay-z", new Date(), false ));
	}
	
	public List<Music> findAll() {
		return musics;
		
		
	}
	
	
	public Music deletebyId(long id) {
		Music artist = findById(id);
		
		if(artist==null) return null;
		
		if(musics.remove(artist)) {
		return artist;
	}
		return null;
	}

	public Music findById(long id) {
		for(Music artist:musics) {
			if(artist.getId() == id) {
				return artist;
			}
		}
		return null;
	}
}

