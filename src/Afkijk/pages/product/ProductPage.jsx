import {useNavigate, useParams} from 'react-router-dom';
import './ProductPage.css';
import {socks} from '../../constants/socks.js';
import {useState} from 'react';

function ProductPage() {
	const [sockInfo, setSockInfo] = useState({});
	const [error, toggleError] = useState(false);
	const {sockId} = useParams();
	const navigate = useNavigate();
	// als je wil weten welk type deze variabele heeft
	// console.log(typeof sockId);

	// met een asynchrone functie maken we een GET request voor de juiste sok
	// als dat lukt, zetten we de informatie in de state -> op pagina
	// als dat mislukt (sok bestaat niet) dan sturen we de gebruiker door naar een 404
	async function fetchSock() {
		toggleError(false);
		try {
			// Maak (in het echt) GET-request naar de backend
			const sockToDisplay = socks.find((sock) => {
				return sock.id === sockId;
			});
			console.log(sockToDisplay);
			// zet de "opgehaalde" informatie in de state
			setSockInfo(sockToDisplay);
		} catch (e) {
			console.error(e);
			// optie 1: als request mislukt dan stuur je iemand weg naar een andere pagina
			navigate('/sokken');
			// optie 2: we maken een mooie error-state aan en informeren de gebruiker
			// die kunnen we nu niet triggeren, want we doen geen 'echt' request
			toggleError(true);
		}
	}

	// Dit niet doen: you're gonna have a bad time
	// fetchSock();

	return (
		<>
			<button type="button" onClick={fetchSock}>Haal sok info op</button>

			{error === true
				? <>
					<h1>Oeps... Die sok bestaat niet!</h1>
					<button type="button" onClick={() => navigate('/sokken')}>Terug naar alle sokken</button>
				</>
				: <>
					<h1>Productpagina van sok {sockId}</h1>
					<h2>{sockInfo.name}</h2>
					<p>Kleur: {sockInfo.color}</p>
					<img src={sockInfo.imageLink} alt="Afbeelding van betreffende sok"/>
					<p>€{sockInfo.price},-</p>
				</>
			}
		</>

	);
}

export default ProductPage;