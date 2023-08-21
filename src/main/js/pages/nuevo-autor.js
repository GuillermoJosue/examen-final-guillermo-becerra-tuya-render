const React = require('react');
const { Link } = require('react-router-dom');

const client = require('../client');
const {useState} = require('react');

function PageNuevoAutor() {

    const [nombre, setNombre] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/autores',
            entity: { nombre: nombre },
            headers: { 'Content-Type': 'application/json' }
        }).done( () => window.location = "/");
    };

    return (
        <>
            <h1>Nuevo Autor</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" onChange={(e)=>setNombre(e.target.value)} />
                <input type="submit" value="Nuevo Autor" />
            </form>
            <hr />
            <Link to="/">Volver</Link>
        </>
    );
}

module.exports = PageNuevoAutor;