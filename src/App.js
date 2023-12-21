
import './App.css';
import Card from './componenets/Card';
import Button from './componenets/Button';
// import { getWeatherData } from './api/index.jsx';
import { useWaether } from './context/Weather.jsx';

function App() {
  const Weather = useWaether();
  console.log(Weather)

  return (
<>
{/* <Input/> */}

<Card/>
</>
  );
}

export default App;
