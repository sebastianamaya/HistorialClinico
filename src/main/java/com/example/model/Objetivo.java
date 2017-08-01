package 
		com.example.model;
	    
	    import javax.persistence.*;
	    import java.util.Calendar;
	    @Entity
	    @Table(name = "objetivos", schema = "application")
public class Objetivo {
	public Objetivo(){}
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
@Column(name = "puntuacion")
private String puntuacion;

public String getPuntuacion() {
return puntuacion;
}

public void setPuntuacion(String puntuacion) {
this.puntuacion = puntuacion;
}
@Column(name = "date")
private Calendar date;

public Calendar getDate() {
return date;
}

public void setDate(Calendar date) {
this.date = date;
}
@Column(name = "nombreTerapeuta")
private String nombreTerapeuta;

public String getNombreTerapeuta() {
return nombreTerapeuta;
}

public void setNombreTerapeuta(String nombreTerapeuta) {
this.nombreTerapeuta = nombreTerapeuta;
}
        }
