package 
		com.example.model;
	    
	    import javax.persistence.*;
	    import java.util.Calendar;
		import java.util.List;

@SuppressWarnings("all")
	    @Entity
	    @Table(name = "persons", schema = "application")
public class Person {
	public Person(){}
	@Id
	@Column(name = "id")
	private Long id;
		
	public Long getId() {
	return id;
	}
	
	public void setId(Long id) {
	this.id = id;
	}
@Column(name = "name")
private String name;

public String getName() {
return name;
}

public void setName(String name) {
this.name = name;
}
@Column(name = "sexo")
private String sexo;

public String getSexo() {
return sexo;
}

public void setSexo(String sexo) {
this.sexo = sexo;
}
@Column(name = "lugarDeNacimiento")
private String lugarDeNacimiento;

public String getLugarDeNacimiento() {
return lugarDeNacimiento;
}

public void setLugarDeNacimiento(String lugarDeNacimiento) {
this.lugarDeNacimiento = lugarDeNacimiento;
}
@Column(name = "fechaDeNacimiento")
private Calendar fechaDeNacimiento;

public Calendar getFechaDeNacimiento() {
return fechaDeNacimiento;
}

public void setFechaDeNacimiento(Calendar fechaDeNacimiento) {
this.fechaDeNacimiento = fechaDeNacimiento;
}
@Column(name = "numeroDocumento")
private Integer numeroDocumento;

public Integer getNumeroDocumento() {
return numeroDocumento;
}

public void setNumeroDocumento(Integer numeroDocumento) {
this.numeroDocumento = numeroDocumento;
}
@Column(name = "ciudad")
private String ciudad;

public String getCiudad() {
return ciudad;
}

public void setCiudad(String ciudad) {
this.ciudad = ciudad;
}
@Column(name = "localidad")
private String localidad;

public String getLocalidad() {
return localidad;
}

public void setLocalidad(String localidad) {
this.localidad = localidad;
}
@Column(name = "barrio")
private String barrio;

public String getBarrio() {
return barrio;
}

public void setBarrio(String barrio) {
this.barrio = barrio;
}
@Column(name = "nombrePadre")
private String nombrePadre;

public String getNombrePadre() {
return nombrePadre;
}

public void setNombrePadre(String nombrePadre) {
this.nombrePadre = nombrePadre;
}
@Column(name = "edadPadre")
private Integer edadPadre;

public Integer getEdadPadre() {
return edadPadre;
}

public void setEdadPadre(Integer edadPadre) {
this.edadPadre = edadPadre;
}
@Column(name = "ocupacionPadre")
private String ocupacionPadre;

public String getOcupacionPadre() {
return ocupacionPadre;
}

public void setOcupacionPadre(String ocupacionPadre) {
this.ocupacionPadre = ocupacionPadre;
}
@Column(name = "telefonoPadre")
private Integer telefonoPadre;

public Integer getTelefonoPadre() {
return telefonoPadre;
}

public void setTelefonoPadre(Integer telefonoPadre) {
this.telefonoPadre = telefonoPadre;
}
@Column(name = "nombrMadre")
private String nombrMadre;

public String getNombrMadre() {
return nombrMadre;
}

public void setNombrMadre(String nombrMadre) {
this.nombrMadre = nombrMadre;
}
@Column(name = "edadMadre")
private Integer edadMadre;

public Integer getEdadMadre() {
return edadMadre;
}

public void setEdadMadre(Integer edadMadre) {
this.edadMadre = edadMadre;
}
@Column(name = "ocupacionMadre")
private String ocupacionMadre;

public String getOcupacionMadre() {
return ocupacionMadre;
}

public void setOcupacionMadre(String ocupacionMadre) {
this.ocupacionMadre = ocupacionMadre;
}
@Column(name = "telefonoMadre")
private Integer telefonoMadre;

public Integer getTelefonoMadre() {
return telefonoMadre;
}

public void setTelefonoMadre(Integer telefonoMadre) {
this.telefonoMadre = telefonoMadre;
}
@Column(name = "aseguradora")
private String aseguradora;

public String getAseguradora() {
return aseguradora;
}

public void setAseguradora(String aseguradora) {
this.aseguradora = aseguradora;
}
@Column(name = "vinculacion")
private String vinculacion;

public String getVinculacion() {
return vinculacion;
}

public void setVinculacion(String vinculacion) {
this.vinculacion = vinculacion;
}
@Column(name = "password")
private String password;

public String getPassword() {
return password;
}

public void setPassword(String password) {
this.password = password;
}
@Column(name = "role")
private String role;

public String getRole() {
return role;
}

public void setRole(String role) {
this.role = role;
}
@OneToMany(cascade = CascadeType.ALL)
			@JoinColumns(
					{
							@JoinColumn(name = "objetivo", referencedColumnName = "id", nullable = false),
					}
			)
			private java.util.List<com.example.model.Objetivo> programaIndividual =new java.util.ArrayList<com.example.model.Objetivo>();
			public java.util.List<com.example.model.Objetivo> getProgramaIndividual() {
			return programaIndividual;
			}
			public void setProgramaIndividual(java.util.ArrayList<com.example.model.Objetivo> programaIndividual) {
			this.programaIndividual = programaIndividual;
			}

			@OneToMany(cascade = CascadeType.ALL)
			@JoinColumns(
					{
							@JoinColumn(name = "objetivocurriculum", referencedColumnName = "id", nullable = false),
					}
			)
			private java.util.List<com.example.model.ObjetivoCurriculum> objetivosCurriculum =new java.util.ArrayList<com.example.model.ObjetivoCurriculum>();


	public java.util.List<com.example.model.ObjetivoCurriculum> getObjetivosCurriculum() {
		return objetivosCurriculum;
	}

	public void setObjetivosCurriculum(java.util.List<com.example.model.ObjetivoCurriculum> objetivosCurriculum) {
		this.objetivosCurriculum = objetivosCurriculum;
	}
}
