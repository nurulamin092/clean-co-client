import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";
import { publicRouter } from "./routes/publicRouters";

function App() {

  return (
    <>
      <Navbar>
        <Routes>
          {
            publicRouter.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />))
          }
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
