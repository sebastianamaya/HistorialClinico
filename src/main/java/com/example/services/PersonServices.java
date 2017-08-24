package  com.example.services;
import com.example.model.Person;

import java.io.IOException;
import java.util.List;
import java.util.LongSummaryStatistics;

public interface PersonServices {
    public void savePerson(Person p);
    public List<Person> getPersons();
    public void updatePerson(Person p);
    public Person getPerson(Long pId);
    public void deleteObjetivo(Long id, String objetivo);
}
