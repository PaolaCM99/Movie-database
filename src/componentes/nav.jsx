import '../style/nav.css';
import React, {useState} from 'react';

function Nav() {
const [value, setValue]=useState("")

const valueChange=(e)=>{
	setValue(e.target.value)
	console.log(e.target.value)
}
	return (
		<nav className="nav">
			<span className="namePage"> Movies</span>
			<div className="search">
				<input type="search"value={value} onChange={valueChange}></input>
				<button type="submit"> Buscar</button>
			</div>
			<ul className="lista">
				<li className="login"> Iniciar sesion</li>
				<li className="signup">
					Registrarme
				</li>
			</ul>

		</nav>
	);
}

export default Nav;
