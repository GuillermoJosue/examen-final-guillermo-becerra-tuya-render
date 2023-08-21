const React = require('react');
const {useState, useEffect} = require('react');
const {useParams} = require('react-router-dom');
const client = require('../client');
const {Link} = require('react-router-dom');

const VerEditorialPage = ()=>{

    let {id} = useParams();
    const [editorial, setEditorial] = useState({});
    const [publicaciones, setPublicaciones] = useState([]);

    useEffect(()=>{

        const url_editorial = '/api/editoriales/'+id

        client({
            method: 'GET',
            path: url_editorial
        }).done((response)=>{setEditorial(response.entity);})

        client({
            method: 'GET',
            path: url_editorial + '/formacion'
        }).done((response)=>{setPublicaciones(response.entity);})

    }, []);

    return (
        <>
            <h1>Ver Editorial</h1>

            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{editorial.nombre}</td>
                    </tr>
                </tbody>
            </table>

            <hr />

            <table border="1">
                <thead>
                    <tr>
                        <th colSpan="2">Publicaciones</th>  
                    </tr>
                    <tr>
                        <th>Autor</th>
                        <th>Libro</th>
                    </tr>
                </thead>
                <tbody>
                    {publicaciones.map(publicacion => {
                        return (
                            <tr key={publicacion.ID}>
                                <td>{publicacion.AUTOR}</td>
                                <td>{publicacion.LIBRO}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Link to={`/ver-editorial/${id}/nuevo-publicacion`}>Nueva Publicacion</Link> | <Link to="/">Volver</Link>
        </>
    );
}

module.exports = VerEditorialPage;