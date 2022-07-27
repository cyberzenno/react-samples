import React, { useState } from "react";

const AuthContext = React.createContext({
    token: "",
    isLoggedIn: false,
    login: dataUserToken => { },
    logout: () => { },
    currentUser: user => { },
    isAdmin: user => { },
    environment: ""
});

export const AuthContextProvider = props => {
    var existingToken = localStorage.getItem("token");
    const [token, setToken] = useState(existingToken);

    //var location = useLocation();

    function logout(redirectUrl) {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        window.location.href = redirectUrl ? redirectUrl : "/";
    }

    //this is the DEFAULT for the context
    var contextValue = {
        token: token, //from state above
        isLoggedIn: !!token, //js "trick" to check if token has value in it
        login: (dataUserToken, redirectUrl) => {
            //setToken(token);
            localStorage.setItem('token', dataUserToken.token);

            var userJson = JSON.stringify(dataUserToken.user);
            localStorage.setItem("user", userJson);


            window.location.href = redirectUrl ? redirectUrl : "/dashboard";
        },
        logout: logout,
        currentUser: userJson => {
            userJson = localStorage.getItem("user");
            if (userJson && userJson != "undefined") {
                return JSON.parse(userJson);
            }
            else {
                logout();
            }
        },
        isAdmin: user => {
            return user.role.toLowerCase() == "admin"
        },
        environment: props.environment,
        baseName: props.baseName
    };

    //that we pass here
    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
};

export const useApiUrls = function (environment) {

    environment = environment ? environment : "Local";

    var localHost = "https://localhost:44302";
    var liveHost = "https://react-api.cyberzenno.com";

    var host = "";
    switch (environment) {
        case "Live":
            host = liveHost;
            break;

        case "Local":
            host = localHost;
            break;

        default:
    }

    return {
        environment,
        loginUrl: host + "/api/account/login",
        registerUrl: host + "/api/account/register",
        loadUsersUrl: host + "/api/account/users",

        loadTodosUrl: host + "/api/custom-content/todos",
        addTodoUrl: host + "/api/custom-content/add-todo",
        changeTodoStateUrl: host + "/api/custom-content/change-todo-state",
        deleteTodoUrl: host + "/api/custom-content/delete-todo",
    };
}

export default AuthContext;