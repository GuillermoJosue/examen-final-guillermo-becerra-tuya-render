package com.example.demo;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Libro {

	private @Id @GeneratedValue Long id;
	private String nombre;
	private String categoria;
	private String descripcion;

	private Libro() {}

	public Libro(String nombre, String categoria, String descripcion) {
		this.nombre = nombre;
		this.categoria = categoria;
		this.descripcion = descripcion;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Libro libro = (Libro) o;
		return Objects.equals(id, libro.id) &&
			Objects.equals(nombre, libro.nombre) &&
			Objects.equals(categoria, libro.categoria) &&
			Objects.equals(descripcion, libro.descripcion);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id, nombre, categoria, descripcion);
	}

	@Override
	public String toString() {
		return "Libro{" +
			"id=" + id +
			", nombre='" + nombre + '\'' +
			", categoria='" + categoria + '\'' +
			", descripcion='" + descripcion + '\'' +
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

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	

	

}