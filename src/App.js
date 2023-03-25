import Nav from './components/Nav';
import Home from './components/Home';
import Home2 from './components/Home2';
import Home3 from './components/Home3';
import Home4 from './components/Home4';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App bg-black">
     <Nav/>
     <Home/>
     <Home2/>
     <Home3/>
     <Home4/>
     <Footer/>
    </div>
  );
}

export default App;
