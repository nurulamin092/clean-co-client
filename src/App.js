import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Contract from './pages/Contract';
import Service from './pages/Service';
import About from './pages/About';
import Login from './pages/Login';
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Navbar>

    </>
  );
}

export default App;
