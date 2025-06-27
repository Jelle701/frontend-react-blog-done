import './App.css';
import {useEffect, useState} from 'react';
import BlogRequestExample from './components/BlogRequestExample.jsx';

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // In de effect-hook zetten we alles dat alléén uitgevoerd wordt op "mount"
    console.log('🎉 HET MOUNT EFFECT IS AFGEVUURD!');

    // Schrijf hier bijvoorbeeld je asynchrone functie om data op te halen wanneer de pagina laadt (ter vervanging van button-klik)
    // 🚨 Belangrijk: roep de functie hier ook aan! 🚨

    // Dit is bijvoorbeeld niet nodig wanneer je sowieso al een button nodig had, bijvoorbeeld bij het versturen van een formulier e.d.


  }, []); // <--- 🚨 deze lege array geeft aan dat we dit effect alleen in de MOUNT cycle willen triggeren. Als je die vergeet, weet React niet welk soort effect dit zou moeten zijn

  console.log('We gaan opstarten, de function App() wordt aangeroepen');

  function changeState() {
    console.log('De waarde van de state WAS', counter);
    setCounter(counter + 1);
    console.log('Als we nu direct de state proberen te loggen lopen we nog achter...', counter)
  }
  // Dit mag absoluut niet, want na elke state update wordt de update-cycle aangeroepen en function App() en de HTML uit de return opnieuw uitgevoerd!
  // changeState();

  return (
    <>
      <button type="button" onClick={changeState}>Verhoog counter!</button>
      {console.log('Nu wordt alle HTML gerenderd', counter)}

      {/*Bekijk onderstaand component voor het request-voorbeeld:*/}
      <BlogRequestExample />
    </>
  )
}

export default App
