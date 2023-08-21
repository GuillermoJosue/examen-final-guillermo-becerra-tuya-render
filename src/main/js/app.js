const React = require('react');
const ReactDOM = require('react-dom');
const { createBrowserRouter, RouterProvider } = require('react-router-dom');

const PageHome = require('./pages/home');
const PageNuevoAutor = require('./pages/nuevo-autor');
const PageEditarAutor = require('./pages/editar-autor');
const PageEditarLibro = require('./pages/editar-libro');
const PageNuevoLibro = require('./pages/nuevo-libro');
const VerEditorialPage = require('./pages/ver-editorial');
const PageNuevaEditorial = require('./pages/nueva-editorial');
const NuevoPublicacionPage = require('./pages/nuevo-publicacion');


const router = createBrowserRouter([
	{ path: '/', element: <PageHome /> },
	{ path: '/editar-musico/:id', element: <PageEditarAutor /> },
	{ path: '/nuevo-autor', element: <PageNuevoAutor /> },
	{ path: '/editar-instrumento/:id', element: <PageEditarLibro /> },
	{ path: '/nuevo-libro', element: <PageNuevoLibro /> },
	{ path: '/nueva-editorial', element: <PageNuevaEditorial /> },
	{ path: '/ver-editorial/:id', element: <VerEditorialPage /> },
	{ path: '/ver-editorial/:id/nuevo-publicacion', element: <NuevoPublicacionPage /> },

]);


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react')
)