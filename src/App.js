import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero';
import About from './Components/About';
import HorizontalScrolling from './Components/HorizontalScrolling';
import Outro from './Components/Outro';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <HorizontalScrolling/>
      <Outro/>
      <Footer/>
    </div>
  );
}

export default App;
