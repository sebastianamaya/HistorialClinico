package  com.example.services;
import com.example.model.Person;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

public class PersonServicesImpl1 implements PersonServices{

    List<Person> personList=new ArrayList<>();

    @Override
    public void savePerson(Person p) {
        personList.add(p);
    }

    @Override
    public List<Person> getPersons() {
        return personList;
    }

    @Override
    public void updatePerson(Person p) {
    	for (int i = 0; i < personList.size(); i++) {
			if(p.getId().equals(personList.get(i).getId())){
    	                personList.set(i, p);
			}
		}
    }


    @Override
    public Person getPerson(Long pId) {
        Person ans=null;
        for (Person pe :
                personList) {
            if(pe.getId().equals(pId)){
                ans=pe;
                break;
            }
        }
        return ans;
    }


    @Override
    public void writeFile(String line) {

    }
}
