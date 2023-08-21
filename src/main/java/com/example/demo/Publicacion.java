package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;

@Entity
public class Publicacion {

	private @Id @GeneratedValue Long id;

	@ManyToOne()
	@JoinColumn(name = "id_editorial")
	private Editorial editorial;

	@ManyToOne()
	@JoinColumn(name = "id_autor")
	private Autor autor;

	@ManyToOne()
	@JoinColumn(name = "id_libro")
	private Libro libro;

	public Publicacion() {}

	public Publicacion(Editorial editorial, Autor autor, Libro libro) {
		this.editorial = editorial;
		this.autor = autor;
		this.libro = libro;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Editorial getEditorial() {
		return editorial;
	}

	public void setEditorial(Editorial editorial) {
		this.editorial = editorial;
	}

	public Autor getAutor() {
		return autor;
	}

	public void setAutor(Autor autor) {
		this.autor = autor;
	}

	public Libro getLibro() {
		return libro;
	}

	public void setLibro(Libro libro) {
		this.libro = libro;
	}


	

}