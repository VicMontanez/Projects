package com.example.rest.webservices.restfulwebservices.music;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class MusicResource {
	
	@Autowired
	private MusicHardcodedService musicService;
	
	@GetMapping("users/{username}/music")
	public List<Music> getAllMusic(@PathVariable String username){
		return musicService.findAll();
	}
	
	@DeleteMapping("users/{username}/music/{id}")
	public ResponseEntity<Void> deleteMusic(@PathVariable String username, @PathVariable long id){
		
		Music artist = musicService.deletebyId(id);
		if(artist!=null) {
			return ResponseEntity.noContent().build();
		}
		
		return ResponseEntity.notFound().build();
	}
}