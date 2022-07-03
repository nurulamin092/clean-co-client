import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";
import { publicRouter } from "./routes/publicRouters";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import PrivetRoute from "./authentication/PrivetRoute";
import Service from './pages/Service';
import { privateRouter } from "./routes/privateRoutes";
import AdminRoute from "./authentication/AdminRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
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
          <Route element={<AdminRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
