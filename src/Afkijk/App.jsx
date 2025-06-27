import React from 'react';
import {NavLink, Route, Routes, useNavigate} from 'react-router-dom';
import HomePage from './pages/home/HomePage.jsx';
import ProductOverviewPage from './pages/productOverview/ProductOverviewPage.jsx';
import ProductPage from './pages/product/ProductPage.jsx';
import {ArrowFatLineRight} from '@phosphor-icons/react';
import './App.css'

function App() {
	const navigate = useNavigate();

	function handleClick() {
		navigate('/sokken/3');
	}

	return (
		<>
			<nav className="navigation">
				<ul>
					<li>
						<NavLink to="/" className={({isActive}) => isActive ? 'actief' : 'niet-actief'}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/sokken" className={({isActive}) => isActive ? 'actief' : 'niet-actief'}>
							Alle sokken
						</NavLink>
					</li>
					<li>
						<button type="button" onClick={handleClick}>Sok van de dag <ArrowFatLineRight size={32}
																									  weight="duotone"/>
						</button>
					</li>
				</ul>
			</nav>
			<main className="main-page-container">
				<Routes>
					{/*Statische routes*/}
					<Route path="/" element={<HomePage/>}/>
					<Route path="/sokken" element={<ProductOverviewPage/>}/>
					{/*Dynamische route*/}
					<Route path="/sokken/:sockId" element={<ProductPage/>}/>
				</Routes>
			</main>
		</>
	)
}

export default App
