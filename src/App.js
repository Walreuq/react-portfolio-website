import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Homepage from "./components/Homepage"
import Portfolio from "./components/Portfolio"
import About from "./components/About"
import Contact from "./components/Contact"
import './App.css';

function App() {
  return (
    <div>
      <div className="bg-secondary">
        <Navbar title = "User App"/>
        <Homepage/>
        <Portfolio/>
        <About/>
        <Contact/>
        <Footer/>
      </div>
      

    </div>
  );
}

export default App;
