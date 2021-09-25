import React, { useEffect, useState } from 'react';
import Movies from './componentes/movies';
import './style/nav.css';
import Pagination from 'rc-pagination';
// import Nav from './componentes/nav';

function App() {
	const [movies, setMovies] = useState([]);
	const [value, setValue] = useState("");
	const [buscar, setBuscar] = useState("");
	const APIKEY = "6de2a6f114eee5868a9274ad2583836c"
	const principalUrl = "https://api.themoviedb.org/3/"
	const url = `${principalUrl}discover/movie?sort_by=popularity.des&api_key=${APIKEY}&language=en-US&page=3`;
	const urlSearch = `${principalUrl}search/movie?api_key=${APIKEY}&query=${value}`
//Trayendo peliculas 
	const fecthUrl = async () => {
		const data = await fetch(url)
		const dataJson = await data.json()
		setMovies(dataJson.results)
		console.log(dataJson.results)
	}
//Obteniendo valor del input
	const valueChange = (e) => setValue(e.target.value)
//Peliculas buscadas
	const data = async () => {
		const dataSearch = await fetch(urlSearch)
		const searchJson = await dataSearch.json()
		setBuscar(searchJson.results)
	}
	const handleSearch = async (e) => {
		e.preventDefault()
		data()
		if(buscar)return setMovies(buscar)
		setBuscar("")
	}
	const handleHome =()=>fecthUrl()
//actualizacion del componente
	useEffect(() => {
		fecthUrl()
		data()
	}, [])

	return (
		<div className="App">
			<nav className="nav">
				<span className="namePage" onClick={handleHome}>
				<i class="fas fa-film"> </i> Movies</span>
				<div className="search">
					<form onSubmit={handleSearch} id="myForm">
					<input type="search" placeholder="Busca tu pelicula..." value={value} onChange={valueChange}></input>
					<button type="submit">
					<i class="fas fa-search search-icon"></i>
					</button>
					</form>
					
				</div>
				<ul className="lista">
					<li className="login"> Iniciar sesion</li>
					<li className="signup">
						Registrarme
					</li>
				</ul>

			</nav>
			<Movies movies={movies} />
			{/* <Pagination /> */}
		</div>
	);
}

export default App;
