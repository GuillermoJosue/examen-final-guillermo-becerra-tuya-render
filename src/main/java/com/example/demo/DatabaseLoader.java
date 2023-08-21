package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final LibroRepository repositoryI;
	private final AutorRepository repositoryM;
	private final EditorialRepository repositoryB;
	private final PublicacionRepository repositoryN;

	@Autowired
	public DatabaseLoader(
		LibroRepository repositoryI,
		AutorRepository repositoryM,
		EditorialRepository repositoryB,
		PublicacionRepository repositoryN
		) {
		this.repositoryI = repositoryI;
		this.repositoryM = repositoryM;
		this.repositoryB = repositoryB;
		this.repositoryN = repositoryN;
	}

	@Override
	public void run(String... strings) throws Exception {

		Libro iharry = 				new Libro("Harry Potter", "Fantasia", "Magia, aventura, amistad");
		Libro ijuegos = 	new Libro("Los juegos del hambre", "Ciencia ficcion", "Supervivencia, accion, intriga");
		Libro inarnia = 				new Libro("Las cronicas de Narnia", "Aventura", "Portales, magia, aventura");
		this.repositoryI.save(iharry);
		this.repositoryI.save(ijuegos);
		this.repositoryI.save(inarnia);
		this.repositoryI.save(new Libro("Percy Jackson", "Fantasia", "Mitologia, aventura, humor"));


		Autor mRowling = 		new Autor("J.K. Rowling");
		Autor mCollins= 		new Autor("Suzanne Collins");
		Autor mLewis = 	new Autor("C.S. Lewis");
		this.repositoryM.save(mRowling);
		this.repositoryM.save(mCollins);
		this.repositoryM.save(mLewis);
		this.repositoryM.save(new Autor("Rick Riordan"));

		Editorial bSalamandra = 		new Editorial("Salamandra");
		Editorial bMolino = 	new Editorial("RBA Molino");
		Editorial bDestino = 	new Editorial("Destino");
		this.repositoryB.save(bSalamandra);
		this.repositoryB.save(bMolino);
		this.repositoryB.save(bDestino);
		this.repositoryB.save(new Editorial("SalamandraPocket"));


		Publicacion intHarry = new Publicacion(bSalamandra, mRowling, iharry);
		this.repositoryN.save(intHarry);
		Publicacion intJuegos = new Publicacion(bMolino, mCollins, ijuegos);
		this.repositoryN.save(intJuegos);
		Publicacion intNarnia = new Publicacion(bDestino, mLewis, inarnia);
		this.repositoryN.save(intNarnia);


	}
}