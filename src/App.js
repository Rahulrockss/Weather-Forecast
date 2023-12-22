
import './App.css';
import Card from './componenets/Card.jsx';
import BackgroundImage from './componenets/BackgroundImage.jsx'
// import { getWeatherData } from './api/index.jsx';
import { useWaether } from './context/Weather.jsx';


function App() {
  const Weather = useWaether();
  console.log(Weather)

  return (
<>
<BackgroundImage/>
<Card/>
</>
  );
}

export default App;
