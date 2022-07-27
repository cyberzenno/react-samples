import { useContext } from "react";
import AuthContext from "./store/AuthContext";

import { Route, Switch } from "react-router-dom";

import './App.css';
import Layout from "./layout/Layout";
import LayoutRegisterLogin from "./layout/LayoutRegisterLogin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardPage from "./pages/DashboardPage";
import NotFound from "./pages/NotFound";
import ProfilePage from "./pages/ProfilePage";
import UsersPage from "./pages/UsersPage";
import YourToDosPage from "./pages/YourToDosPage";

function App() {


    var authContext = useContext(AuthContext);

    return <Switch>

        <Route path='/register'>
            <Register />
        </Route>
        <Route path='/login'>
            <Login />
        </Route>

        <Route path='/dashboard'>
            <DashboardPage />
        </Route>
        <Route path='/profile'>
            <ProfilePage />
        </Route>
        <Route path='/todos'>
            <YourToDosPage/>
        </Route>
        <Route path='/users'>
            <UsersPage />
        </Route>

        <Route path="/">

            {authContext.isLoggedIn ? <DashboardPage /> : <Login />}

        </Route>

        <Route path="*">

            {authContext.isLoggedIn ? <Layout><NotFound redirectUrl="/dashboard" /></Layout> : <LayoutRegisterLogin><NotFound redirectUrl="/login" /></LayoutRegisterLogin>}

        </Route>
    </Switch>;
}

export default App;
