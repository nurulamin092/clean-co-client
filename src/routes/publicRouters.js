import Home from '../pages/Home/Home';
import Contract from '../pages/Contract';
import About from '../pages/About';
import Login from '../pages/Login';

export const publicRouter = [
    { path: "/", name: "Home", Component: Home },
    { path: "/about", name: "About", Component: About },
    // { path: "/service", name: "Service", Component: Service },
    { path: "/contract", name: "Contract", Component: Contract },
    { path: "/login", name: "Login", Component: Login },
]