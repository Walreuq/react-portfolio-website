import User from "./components/User"
import Navbar from "./components/Navbar"
import './App.css';

function App() {
  return (
    <div>
      <div>
        <Navbar title = "User App"/>

      </div>
      <User
      name = "Osman Uğur Demirer"
      salary = "5000"
      department = "Bilişim"
    />

    </div>
  );
}

export default App;
