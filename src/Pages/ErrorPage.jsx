import '../App.css';

import HomePage from "../Afkijk/pages/home/HomePage.jsx";
import {Link} from "react-router-dom";

function ErrorPage() {
    return (
        <>
            <main className="main-page-container">
            <h2>Er is iets niet goed gegaan</h2>
            Klik hier om terug te keren naar de <Link to={`/`}>homepage</Link>
            </main>
        </>
    );
}

export default ErrorPage;