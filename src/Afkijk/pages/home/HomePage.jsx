import {Link} from 'react-router-dom';
import './HomePage.css';

function HomePage() {
    return (
        <>
            <h1>De sickste sokkenshop 🧦</h1>
            <p>Bekijk alle sokken op de sokkenoverzichtspagina, of ga direct naar <Link to="/sok">de best verkopende sok!</Link></p>
        </>
    );
}

export default HomePage;