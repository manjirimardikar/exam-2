import './App.css';
import { Brands } from './Components/Brands/Brands';
import { Credexperience } from './Components/Credexperience/Credexperience';
import { Credsecurity } from './Components/Credsecurity/Credsecurity';
import { Credstory } from './Components/Credstory/Credstory';
import { Feelspecial } from './Components/Feelspecial/Feelspecial';
import { Header } from './Components/Header/Header';
import { Headersection } from './Components/Headersection/Headersection';



function App() {
  return (
    <div className="App">
      <Header />
      <Headersection />
      
      <Feelspecial/>
      <Brands />
      <Credexperience />
      
      <Credsecurity />
      <Credstory />
     
     
    </div>
  );
}

export default App;
