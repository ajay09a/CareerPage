import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './component/Navbar';
import Career from './page/Career';
import Home from './page/Home';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/career' element={<Career />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
