import Home from '../pages/Home/Home';
import Contract from '../pages/Contract';
import Login from '../pages/Login';

export const publicRouter = [
    { path: "/", name: "Home", Component: Home },
    { path: "/contract", name: "Contract", Component: Contract },
    { path: "/login", name: "Login", Component: Login },
]