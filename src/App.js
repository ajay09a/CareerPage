import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './component/Navbar';
import Career from './page/Career';
import Home from './page/Home';
import About from './page/About';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Career />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
