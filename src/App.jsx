import './App.css'
import React from 'react';
import {NavLink, Route, Routes, useNavigate} from 'react-router-dom';

import logo from './assets/logo-white.png'

import CreateNewPost from './Pages/CreateNewPost.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import OverviewPage from './Pages/OverviewPage.jsx'
import BlogDetailPage from './Pages/BlogDetailPage.jsx';

// TEST
import ApiTest from './Helpers/ApiTest.jsx';






function App() {
    const navigate = useNavigate();
    return (

        <>
            <nav className="navigation">
                <img className={"nav-logo"} src={"./src/assets/logo-medium.png"} alt={"Logo menu"}/>
                <ul>
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ? 'actief' : 'niet-actief'}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/posts/" className={({isActive}) => isActive ? 'actief' : 'niet-actief'}>
                            Overzichtspagina
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/CreateNewPost" className={({isActive}) => isActive ? 'actief' : 'niet-actief'}>
                            Nieuwe Post maken
                        </NavLink>
                    </li>

                </ul>
            </nav>


            <main className="main-page-container">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div className="page-container">
                                <img src={logo} alt="Company logo" />
                                <h1>Begin hier met het maken van jouw blog-applicatie!</h1>
                            </div>
                        } // 🔧 AANGEPAST: vervangen van <App /> door statische homepage
                    />
                    {/*TEST*/}
                    <Route path="/apitest" element={<ApiTest />} />

                    <Route path="/CreateNewPost" element={<CreateNewPost />} />
                    <Route path="/posts" element={<OverviewPage />} />
                    <Route path="/posts/:id" element={<BlogDetailPage />} />
                    <Route path="*" element={<ErrorPage />} /> {/* 🔧 AANGEPAST: fallback route toegevoegd */}
                </Routes>
            </main>
        </>
    )
}

export default App
