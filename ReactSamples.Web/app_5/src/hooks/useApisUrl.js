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
