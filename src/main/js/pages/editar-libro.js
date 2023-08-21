const React = require('react');
const {useState, useEffect} = require('react');
const { Link, useParams } = require('react-router-dom');
const client = require('../client');

const PageEditarLibro = () => {

    const [libro, setLibro] = useState({});

    let { id } = useParams();

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/libros/' + id
        }).done(response => {
            setLibro(response.entity);
        })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/libros/' + id,
            entity: libro,
            headers: {'Content-Type': 'application/json'}
        }).done(() => window.location = "/");
    }


    return (
        <>
            <h1>Editar Libro</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" value={libro.nombre} onChange={(e)=>setLibro({...libro, nombre: e.target.value})} />
                <label htmlFor="categoria">Categoría</label>
                <input type="text" id="categoria" name="categoria" value={libro.categoria} onChange={(e)=>setLibro({...libro, categoria: e.target.value})} />
                <label htmlFor="descripcion">Descripción</label>
                <input type="text" id="descripcion" name="descripcion" value={libro.descripcion} onChange={(e)=>setLibro({...libro, descripcion: e.target.value})} />
                <input type="submit" value="Editar Libro" />
            </form>
            <hr />
            <Link to="/">Volver</Link>
        </>
    );
}

module.exports = PageEditarLibro;