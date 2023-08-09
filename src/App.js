import CurrentOpening from './component/CurrentOpening';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import Overview from './component/Overview';

function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <Overview />
      <CurrentOpening />
      <Footer />
    </>
  );
}

export default App;
