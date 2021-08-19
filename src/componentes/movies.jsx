import React, { useEffect, useState } from 'react';
import '../style/movies.css'
function Movies() {
	const [movies, setMovies] = useState([])
	const APIKEY = "6de2a6f114eee5868a9274ad2583836c"
	const principalUrl = "https://api.themoviedb.org/3/"
//    const imageUrl="https://https://image.tmdb.org/t/p/"
//    const size = "w500"
	const url = `${principalUrl}discover/movie?sort_by=popularity.des&api_key=${APIKEY}`;
	const fecthUrl = async () => {
		const data = await fetch(url)
		const dataJson = await data.json()
		setMovies(dataJson.results)
		
	}
	
	useEffect(() => {
		fecthUrl()
		console.log(movies)
	}, [])

	return (
		<main className="container-movies">
			{movies.map((movie) => (
				
				<div className="movie">
					<p className="title">{movie.title}</p>
					<img className="img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="img poster"/>
					<div className="overview"> {movie.overview}</div>
				
				</div>
				
				)
			)}
		</main> 
			
		
	);
};

export default Movies;