package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "editoriales", path = "editoriales")
public interface EditorialRepository extends CrudRepository<Editorial, Long> {

}