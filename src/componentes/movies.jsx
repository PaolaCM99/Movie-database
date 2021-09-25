import React, { useState } from 'react';
import '../style/movies.css'
function Movies({ movies }) {

	const [modal, setModal] = useState(false)

	const handleOpen = (e) => {
		setModal(true)
	}
	const handleClose = (e) => {
		setModal(false)
	}

	return (
		<main className="container-movies" >
			{movies.map((movie) => (
				<>
				<div key={movie.id} className="movie">
					<div className="container-img" onClick={handleOpen}>
						<img className="img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=" Poster" />
						<p className="title">{movie.title}</p>
					</div>
					
				</div>
				{modal === false ? "" :
						(<div className="overview">
							<i className="fas fa-times modal-close" onClick={handleClose}></i>
							<article className="modal-information"> 
							<h3>Overview</h3>
							<p>{movie.overview} </p>
							<h3> Fecha de lanzamiento</h3>
							<p>{movie.release_date}</p>
							</article>
						</div>)
					}
				</>
			)
			)}

			
		</main>
	);
};

export default Movies;