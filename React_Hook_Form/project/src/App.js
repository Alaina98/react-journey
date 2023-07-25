import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import GitHub from './components/GitHub';
import Home from './components/Home';
import Store from './components/Store';
import '../src/components/style.css'
import News from './components/News';

function App() {
  return (
   <>
   {/* <Register /> */}
   {/* <GitHub /> */}
   {/* <Home /> */}
   {/* <div className='style'>
      <Store />
    </div> */}
     <div className='style'>
      <News />
    </div>
   </>
  );
}

export default App;
