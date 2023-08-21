const React = require('react');
const {useState, useEffect} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');


const NuevoPublicacionPage = () => {

    let { id } = useParams();
    const [autores, setAutores] = useState([])
    const [libros, setLibros] = useState([])
    const [idAutor, setIdAutor] = useState('')
    const [idLibro, setIdLibro] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/publicaciones',
            entity: {
                editorial: 'http://localhost:8080/api/editoriales/'+id,
                autor: 'http://localhost:8080/api/autores/'+idAutor,
                libro: 'http://localhost:8080/api/libros/'+idLibro},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
           window.location = '/';
        })
    }

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/autores'
        }).done(response=>{
            let autores2 = [];
            response.entity._embedded.autores.map(autor => {
                autores2.push({value: autor._links.self.href.split('/').slice(-1), label: autor.nombre})
            })
            setAutores(autores2)
        })
        client({
            method: 'GET',
            path: '/api/libros'
        }).done(response=>{
            let libros2 = [];
            response.entity._embedded.libros.map(libro => {
                libros2.push({value: libro._links.self.href.split('/').slice(-1), label: libro.nombre})
            })
            setLibros(libros2)
        })

    },[])

    return (
        <>
            <h1>Nuevo Publicacion</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor='autor'>Autor</label>
                <select name="autor" id="autor" onChange={(e)=>{setIdAutor(e.target.value)}}>
                    {autores.map(autor => {	
                        return (
                            <option key={autor.value} value={autor.value}>{autor.label}</option>
                        )
                    })}
                </select>
                
                <label>Libro</label>
                <select name="libro" id="libro" onChange={(e)=>{setIdLibro(e.target.value)}}>
                    {libros.map(libro => {	
                        return (
                            <option key={libro.value} value={libro.value}>{libro.label}</option>
                        )
                    })}
                </select>

                <input type="submit" value="Nuevo Publicacion" />

            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoPublicacionPage;