const React = require('react');
const { Link, useParams } = require('react-router-dom');

const client = require('../client');
const { useState, useEffect } = require('react');

function PageEditarAutor() {

    const [autor, setAutor] = useState({});

    // getting id param from route
    let { id } = useParams();

    useEffect(() => {
        client({ method: 'GET', path: '/api/autores/' + id }).done(response => {
            setAutor(response.entity);
        });
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/autores/' + id,
            entity: autor,
            headers: { 'Content-Type': 'application/json' }
        }).done(() => window.location = "/");
    };

    return (
        <>
            <h1>Editar Autor</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" value={autor.nombre} onChange={(e) => setAutor({...autor, nombre: e.target.value })} />
                <input type="submit" value="Editar Autor" />
            </form>
            <hr />
            <Link to="/">Volver</Link>
        </>
    );
}

module.exports = PageEditarAutor;