package com.example.jpa;

import com.example.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;


@Transactional
public interface PersonRepository extends JpaRepository<Person, Long>  {
}

