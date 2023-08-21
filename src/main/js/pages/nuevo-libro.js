const React = require('react');
const { Link } = require('react-router-dom');

const client = require('../client');
const {useState} = require('react');

function PageNuevoLibro() {

    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/libros',
            entity: { nombre: nombre, categoria: categoria, descripcion: descripcion },
            headers: { 'Content-Type': 'application/json' }
        }).done( () => window.location = "/");
    };

    return (
        <>
            <h1>Nuevo Libro</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" onChange={(e)=>setNombre(e.target.value)} /><br />
                
                <label htmlFor="categoria">Categoría</label>
                <input type="text" id="categoria" name="categoria" onChange={(e)=>setCategoria(e.target.value)} /><br />

                <label htmlFor="nombre">Descripción</label>
                <input type="text" id="descripcion" name="descripcion" onChange={(e)=>setDescripcion(e.target.value)} /><br />
                
                <input type="submit" value="Nuevo Libro" />
            </form>
            <hr />
            <Link to="/">Volver</Link>
        </>
    );
}

module.exports = PageNuevoLibro;