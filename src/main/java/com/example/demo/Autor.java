package com.example.demo;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Autor {

	private @Id @GeneratedValue Long id;
	private String nombre;

	private Autor() {}

	public Autor(String nombre) {
		this.nombre = nombre;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Autor autor = (Autor) o;
		return Objects.equals(id, autor.id) &&
			Objects.equals(nombre, autor.nombre);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id, nombre);
	}

	@Override
	public String toString() {
		return "Autor{" +
			"id=" + id +
			", nombre='" + nombre + '\'' +
			'}';
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


}