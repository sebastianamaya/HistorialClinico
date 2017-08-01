package com.example.jpa;

import com.example.model.Person;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class PersonService implements GenericService<Person, Long> {

    private final PersonRepository personRepository;

    public PersonService(final PersonRepository personRepository) {

        this.personRepository=personRepository;
    }

    @Override
    public Long getId(Person entity) {
        return entity.getId();
    }

    @Override
    public CrudRepository<Person, Long> getRepository() {
        return this.personRepository;
    }

    @Override
    public Person save(Person entity) {
        return GenericService.super.save(entity);
    }
}
