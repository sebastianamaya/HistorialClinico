package  com.example.services;
import com.example.model.Person;
import java.util.List;
import java.util.LongSummaryStatistics;

public interface PersonServices {
    public void savePerson(Person p);
    public List<Person> getPersons();
    public void updatePerson(Person p);
    public Person getPerson(Long pId);
    public void deleteObj(Long pId, String nombreObjetivo);
}
