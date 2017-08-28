package com.example.model;

import javax.persistence.*;
import java.util.Calendar;

/**
 * Created by laboratorio on 8/24/17.
 */
@Entity
@Table(name = "puntuacionescuatrimestral", schema = "application")
public class PuntuacionCuatrimestral {


    public PuntuacionCuatrimestral(){}

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "puntuacioncuatrimestral_id")
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "puntuacion")
    private String puntuacion;

    @Column(name = "fecha")
    private Calendar fecha;

    @Column(name = "tipo")
    private Long tipo;

    public Long getTipo() {
        return tipo;
    }

    public void setTipo(Long tipo) {
        this.tipo = tipo;
    }

    public String getPuntuacion() {
        return puntuacion;
    }

    public void setPuntuacion(String puntuacion) {
        this.puntuacion = puntuacion;
    }

    public Calendar getFecha() {
        return fecha;
    }

    public void setFecha(Calendar fecha) {
        this.fecha = fecha;
    }

}