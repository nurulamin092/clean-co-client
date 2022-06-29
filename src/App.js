import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";
import { publicRouter } from "./routes/publicRouters";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import PrivetRoute from "./authentication/PrivetRoute";
import Service from './pages/Service';
import { privateRouter } from "./routes/privateRoutes";
function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Navbar>
        <Routes>
          {
            publicRouter.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />))
          }
          <Route element={<PrivetRoute />}>
            {
              privateRouter.map(({ path, Component }, index) => (
                <Route key={index} path={path} element={<Component />} />))
            }
          </Route>
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
