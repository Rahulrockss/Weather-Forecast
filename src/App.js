
import './App.css';
import Card from './componenets/Card';
import Input from './componenets/Input';
import Button from './componenets/Button';
// import { getWeatherData } from './api/index.jsx';
import { useWaether } from './context/Weather';

function App() {
  const Weather = useWaether();

  return (
<>
<Input/>
<Button onClick={Weather.fetchdata} value="search"/>
<Card/>

</>
  );
}

export default App;
