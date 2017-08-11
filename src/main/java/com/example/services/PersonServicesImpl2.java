package  com.example.services;
import com.example.model.Objetivo;
import com.example.model.ObjetivoCurriculum;
import com.example.model.Person;
import org.springframework.stereotype.Service;
import com.example.jpa.GenericService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

@Service
public class PersonServicesImpl2 implements PersonServices{

    @Autowired
    private GenericService ps;
    
    public PersonServicesImpl2(final GenericService gs){
        this.ps=gs;
    }

    @Override
    public void savePerson(Person p) {
        ps.save(p);
    }

    @Override
    public List<Person> getPersons() {
	ArrayList<Person> ans =new ArrayList<Person>();
	for (Object o : ps.findAll()) {
	ans.add((Person) o);
	}
	return ans;
    }

    @Override
    public void updatePerson(Person p) {
    	ps.update(p);
    }


    @Override
    public Person getPerson(Long pId) {
        return (Person) ps.get(pId);
    }

    public void deleteObj(Long pId, String nombreObjetivo){
        Person person=this.getPerson(pId);
        java.util.List<com.example.model.ObjetivoCurriculum> objetivos=person.getObjetivosCurriculum();
        for (int i= 0; i < objetivos.size(); i++){
            ObjetivoCurriculum o=objetivos.get(i);
            if(o.getNombreObjetivo().equals(nombreObjetivo)){
                objetivos.remove(i);
            }
        }
        person.setObjetivosCurriculum(objetivos);
        ps.update(person);
    }
}
