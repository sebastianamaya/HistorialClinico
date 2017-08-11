package
        com.example.model;

import javax.persistence.*;
import java.util.Calendar;
@Entity
@Table(name = "objetivoscurriculum", schema = "application")
public class ObjetivoCurriculum {
    public ObjetivoCurriculum(){}
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "objetivo_id")
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    @Column(name = "area")
    private String area;

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }
    @Column(name = "subarea")
    private String subarea;

    public String getSubarea() {
        return subarea;
    }

    public void setSubarea(String subarea) {
        this.subarea = subarea;
    }
    @Column(name = "nombreObjetivo")
    private String nombreObjetivo;

    public String getNombreObjetivo() {
        return nombreObjetivo;
    }

    public void setNombreObjetivo(String nombreObjetivo) {
        this.nombreObjetivo = nombreObjetivo;
    }

}
