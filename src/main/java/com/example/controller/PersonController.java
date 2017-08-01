package com.example.controller;

import com.example.model.Person;
import com.example.services.PersonServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(value = "/person")
public class PersonController {

    @Autowired
    private PersonServices ps;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getPersons(){
    	List<Person> ans=ps.getPersons();
		if(ans!=null){
			return new ResponseEntity<>(ans , HttpStatus.ACCEPTED);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
    }

    @RequestMapping(method = RequestMethod.GET, path = "/{personId}")
    public ResponseEntity<?> getPerson(@PathVariable Long personId) {
		Person ans=ps.getPerson(personId);
		if(ans!=null){
			return new ResponseEntity<>(ans , HttpStatus.ACCEPTED);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
    }

    @RequestMapping(method = RequestMethod.POST, path = "/new")
    public ResponseEntity<?> postPerson(@RequestBody Person p) {
        ps.savePerson(p);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> updatePerson(@RequestBody Person p) {
        ps.updatePerson(p);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
}
