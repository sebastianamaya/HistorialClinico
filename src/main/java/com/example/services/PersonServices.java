package  com.example.services;
import com.example.model.Person;
import java.util.List;

public interface PersonServices {
    public void savePerson(Person p);
    public List<Person> getPersons();
    public void updatePerson(Person p);
    public Person getPerson(Long pId);
}
