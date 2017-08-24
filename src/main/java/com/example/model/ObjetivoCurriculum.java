package
        com.example.model;

import javax.persistence.*;
import java.util.Calendar;
@Entity
@Table(name = "objetivoscurriculum", schema = "application")
public class  ObjetivoCurriculum {
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

    @Column(name="estado")
    private String estado;

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
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

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumns(
            {
                    @JoinColumn(name = "puntuacioncuatrimestral", referencedColumnName = "objetivo_id", nullable = false),
            }
    )
    private java.util.List<com.example.model.PuntuacionCuatrimestral> puntuacionesCuatrimestral=new java.util.ArrayList<com.example.model.PuntuacionCuatrimestral>();

    public java.util.List<com.example.model.PuntuacionCuatrimestral> getPuntuacionesCuatrimestrales() {
        return puntuacionesCuatrimestral;
    }

    public void setPuntuacionesCuatrimestrales(java.util.List<com.example.model.PuntuacionCuatrimestral> puntuacionesCuatrimestrales) {
        this.puntuacionesCuatrimestral = puntuacionesCuatrimestrales;
    }

}
