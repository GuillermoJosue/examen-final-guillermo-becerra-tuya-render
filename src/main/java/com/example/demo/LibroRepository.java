package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "libros", path = "libros")
public interface LibroRepository extends CrudRepository<Libro, Long> {

}