import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero';
import About from './Components/About';
import HorizontalScrolling from './Components/HorizontalScrolling';


function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <HorizontalScrolling/>
    </div>
  );
}

export default App;
