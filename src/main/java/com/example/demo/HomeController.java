package com.example.demo;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @RequestMapping(value = "/")
    public String home(){
        return "index";
    }

    @GetMapping(path = "/api/editoriales/{id}/formacion")
    public @ResponseBody List<Map<String, Object>> formacion(@PathVariable Integer id){
        String sql = "SELECT publicacion.id as ID, autor.nombre as AUTOR, libro.nombre as LIBRO FROM publicacion JOIN autor ON publicacion.id_autor = autor.id JOIN libro ON publicacion.id_libro = libro.id WHERE publicacion.id_editorial = ?";
        List<Map<String, Object>> queryResult = jdbcTemplate.queryForList(sql, id);
        return queryResult;
    }
    /**
     * [
     *   {"campo": "Valor"},
     *   {"campo": 2},
     * ]
     * List<Map<String, Object>>
     */


}
