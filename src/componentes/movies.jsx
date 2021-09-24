import React from 'react';
import '../style/movies.css'
function Movies({movies}) {

	return (
		<main className="container-movies">
			{movies.map((movie) => (
				<div key={movie.id} className="movie">
					<p className="title">{movie.title}</p>
					<div className="container-img">
						<img className="img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=" Poster" />
					</div>
					<div className="overview">
						{movie.overview}
					</div>
				</div>
			)
			)}
		</main>
	);
};

export default Movies;