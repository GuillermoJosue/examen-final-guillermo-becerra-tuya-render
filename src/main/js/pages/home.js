const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom');

class PageHome extends React.Component {
	constructor(props) {
		super(props);
		this.state = { libros: [], autores: [], editoriales: [] };
	}
	componentDidMount() {
		client({ method: 'GET', path: '/api/libros' }).done(response => {
			this.setState({ libros: response.entity._embedded.libros });
		});
		client({ method: 'GET', path: '/api/autores' }).done(response => {
			this.setState({ autores: response.entity._embedded.autores });
		});
		client({ method: 'GET', path: '/api/editoriales' }).done(response => {
			this.setState({ editoriales: response.entity._embedded.editoriales });
		});
	}
	render() {
		return (
			<>
                <h1>Evaluacion Final - Guillermo Becerra</h1>

				<div style={{"width": "100%","display": "flex"}} >

					<div style={{"width": "calc(100%/3)"}}>
						<Titulo entidad="Libro" emoji="📖" />
						<LibroList libros={this.state.libros} />
						<br />
						<Link to="/nuevo-libro">Nuevo Libro</Link>
					</div>

					<div style={{"width": "calc(100%/3)"}}>
						<Titulo entidad="Autor" emoji="✍" />
						<AutorList autores={this.state.autores} />
						<br />
						<Link to="/nuevo-autor">Nuevo Autor</Link>
					</div>

					<div style={{"width": "calc(100%/3)"}}>
						<Titulo entidad="Editorial" emoji="🏢" />
						<EditorialList editoriales={this.state.editoriales} />
						<br />
						<Link to="/nueva-editorial">Nueva Editorial</Link>
					</div>

				</div>



			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<span>Listado de {props.entidad.toLowerCase()}</span>
			<hr />
		</>
	)
}


class LibroList extends React.Component {
	render() {
		const libros = this.props.libros.map(libro =>
			<Libro key={libro._links.self.href} libro={libro} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Categoría</th>
						<th>Descripción</th>
						<th>Acciones</th>
					</tr>
					{libros}
				</tbody>
			</table>
		)
	}
}
class AutorList extends React.Component {
	render() {
		const autores = this.props.autores.map(autor =>
			<Autor key={autor._links.self.href} autor={autor} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{autores}
				</tbody>
			</table>
		)
	}
}
class EditorialList extends React.Component {
	render() {
		const editoriales = this.props.editoriales.map(editorial =>
			<Editorial key={editorial._links.self.href} editorial={editorial} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{editoriales}
				</tbody>
			</table>
		)
	}
}

class Libro extends React.Component {
	render() {
		const id = this.props.libro._links.self.href.split('/').slice(-1);
		return (
			<tr>
				<td>{this.props.libro.nombre}</td>
				<td>{this.props.libro.categoria}</td>
				<td>{this.props.libro.descripcion}</td>
				<td>
					<Link to={'/editar-libro/'+id}>Editar</Link>
				</td>
			</tr>
		)
	}
}
class Autor extends React.Component {
	render() {
		const id = this.props.autor._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.autor.nombre}</td>
				<td>
					<Link to={`/editar-autor/${id}`}>Editar</Link>
				</td>
			</tr>
		)
	}
}
class Editorial extends React.Component {
	render() {
		const id = this.props.editorial._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.editorial.nombre}</td>
				<td>
					<Link to={`/ver-editorial/${id}`}>Ver</Link>
				</td>
			</tr>
		)
	}
}

module.exports = PageHome;