import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './components/style.css'
import Person from './components/Person';

function App() {
  return (
<>
<div className="App">
      <>
      {/* <Home/> */}
      <Navbar/>
      <Home />
        
      </>
    </div>
</>
  );
}

export default App;
