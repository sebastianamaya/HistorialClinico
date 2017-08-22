package  com.example.services;
import com.example.model.Objetivo;
import com.example.model.ObjetivoCurriculum;
import com.example.model.Person;
import org.springframework.stereotype.Service;
import com.example.jpa.GenericService;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.net.URL;
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


    @Override
    public void writeFile(String line) throws Throwable {
        BufferedWriter out = null;
        URL fileLocation = getClass().getResource("areas.txt");
        System.out.println(fileLocation.getPath()+"  "+line+"  "+fileLocation.toString());
        out = new BufferedWriter(new FileWriter(fileLocation.getPath(), true));
        out.write(line);
        if (out != null) {
                out.close();}

    }
}
