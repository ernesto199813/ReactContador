import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navegacion } from "./Navegacion";
import {Home} from "./Home";
import {Login} from "./Login";


function App() {
  return (
    <div className="App">
      <Navegacion />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

