import { useEffect, useState, useContext, useRef } from 'react'
import Layout from '../layout/Layout';
import AuthContext from "../store/AuthContext";
import { useApiUrls } from "../hooks/useApisUrl";

function YourToDosPage() {

    var _ctx = useContext(AuthContext);

    var _apiUrls = useApiUrls(_ctx.environment);

    const [todos, setTodos] = useState([]);
    const [allTodos, setAllTodos] = useState([]);
    const [currentFilter, setCurrentFilter] = useState("All");


    //task CRUD
    var todoTitleRef = useRef();
    function addTodoHandler() {
        var title = todoTitleRef.current.value;

        var todoData = {
            title
        };

        var addTodoUrl = _apiUrls.addTodoUrl;
        fetch(addTodoUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + _ctx.token
            },
            body: JSON.stringify(todoData),
        })
            .then(async response => {

                if (response.ok) {
                    var data = await response.json();

                    setAllTodos(x => data);
                    setTodos(x => filterTodos(currentFilter, data));

                    todoTitleRef.current.value = "";

                } else {
                    throw new Error("Error on Adding Todo");
                }
            })
            .catch(error => {
                alert('Error: ' + error.message);
            });


    }
    function onEnterButtonHandler(event) {
        if (event.key === 'Enter') {
            addTodoHandler();
        }
    }

    function changeTodoStateHandler(event) {
        var id = event.currentTarget.getAttribute("data-id");

        var todoData = {
            id
        };

        var changeTodoStateUrl = _apiUrls.changeTodoStateUrl;
        fetch(changeTodoStateUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + _ctx.token
            },
            body: JSON.stringify(todoData),
        })
            .then(async response => {

                if (response.ok) {
                    var data = await response.json();

                    setAllTodos(x => data);
                    setTodos(x => filterTodos(currentFilter, data));

                    todoTitleRef.current.value = "";

                } else {
                    throw new Error("Error on Adding Todo");
                }
            })
            .catch(error => {
                alert('Error: ' + error.message);
            });
    }

    function deleteTodoHandler(event) {
        var id = event.currentTarget.getAttribute("data-id");

        var todoData = {
            id
        };

        var deleteTodoUrl = _apiUrls.deleteTodoUrl;
        fetch(deleteTodoUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + _ctx.token
            },
            body: JSON.stringify(todoData),
        })
            .then(async response => {

                if (response.ok) {
                    var data = await response.json();

                    setAllTodos(x => data);
                    setTodos(x => filterTodos(currentFilter, data));

                    todoTitleRef.current.value = "";

                } else {
                    throw new Error("Error on Adding Todo");
                }
            })
            .catch(error => {
                alert('Error: ' + error.message);
            });
    }

    //task filter
    function filterTasksHandler(event) {

        var taskFilter = event.currentTarget.innerText.trim();

        var filteredTodos = filterTodos(taskFilter, allTodos);

        setTodos(x => filteredTodos);

        setCurrentFilter(x => taskFilter);
    }

    function filterTodos(filterString, todos) {

        return filterString != "All" ? todos.filter(x => x.statusAsString == filterString) : todos;
    }

    //task load
    function loadTodos() {
        var loadTodosUrl = _apiUrls.loadTodosUrl;
        fetch(loadTodosUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + _ctx.token
            }
        })
            .then(response => {

                if (response.ok) {
                    return response.json();
                } else {
                    throw "Error: " + response.status;
                }
            })
            .then(data => {

                setTodos(x => data);
                setAllTodos(x => data);
            })
            .catch((error) => {

                alert(error);

            });
    }
    useEffect(loadTodos, []);

    return <Layout>

        <div className="container-fluid">
            <h3 className="text-dark mb-4">Your To-Do List</h3>

            <div className="row">
                <div className="col">
                    <label className="form-label">New task</label>
                    <div className="input-group">
                        <input className="form-control" type="text" ref={todoTitleRef} onKeyPress={onEnterButtonHandler} />
                        <button className="btn btn-primary" type="button" onClick={addTodoHandler}>
                            Add New Task
                        </button>
                    </div>
                </div>
                <div className="col">
                    <label className="form-label">Filter</label>
                    <div className="input-group">
                        <button
                            onClick={filterTasksHandler}
                            className={"btn " + (currentFilter == "All" ? "btn-primary" : "btn-light")}
                            type="button">All</button>
                        <button
                            onClick={filterTasksHandler}
                            className={"btn " + (currentFilter == "Pending" ? "btn-primary" : "btn-light")}
                            type="button">Pending</button>
                        <button
                            onClick={filterTasksHandler}
                            className={"btn " + (currentFilter == "Done" ? "btn-primary" : "btn-light")}
                            type="button">Done</button>
                    </div>
                </div>
            </div>


            <div className="table mt-2" role="grid" aria-describedby="dataTable_info">
                <table className="table my-0">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Task</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(x =>
                            <tr key={x.id} className={x.statusAsString.toLowerCase()}>
                                <td>{x.id}</td>
                                <td>{x.title}</td>
                                <td>{x.statusAsString}</td>
                                <td>
                                    <button data-id={x.id} onClick={changeTodoStateHandler}
                                        className={"btn btn-sm " + (x.statusAsString == "Done" ? "btn-success" : "btn-outline-success")} type="button">
                                        <i className="fa fa-check"></i>
                                    </button>
                                    <button data-id={x.id} onClick={deleteTodoHandler}
                                        className="btn btn-outline-danger btn-sm mx-2" type="button">
                                        <i className="fa fa-trash-o"></i>
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>

    </Layout>;
}

export default YourToDosPage;