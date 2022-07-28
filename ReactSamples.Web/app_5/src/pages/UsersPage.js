import { useEffect, useState, useContext } from 'react'
import Layout from '../layout/Layout';
import AuthContext from "../store/AuthContext";
import { useApiUrls } from "../hooks/useApisUrl";

function UsersPage() {

    var _ctx = useContext(AuthContext);

    var _apiUrls = useApiUrls(_ctx.environment);

    const [users, setUsers] = useState([]);

    function loadUsers() {
        var loadUsersUrl = _apiUrls.loadUsersUrl;
        fetch(loadUsersUrl, {
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
                setUsers(x => data);
            })
            .catch((error) => {

                alert(error);

            });
    }

    useEffect(loadUsers, []);

    return <Layout>

        <div className="container-fluid">
            <h3 className="text-dark mb-4">Users</h3>
            <div className="card shadow">
                <div className="card-header py-3">
                    <p className="text-primary m-0 fw-bold">User Info</p>
                </div>
                <div className="card-body">
                    <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                        <table className="table my-0" id="dataTable">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Registration Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(x =>
                                    <tr key={x.username}>
                                        <td>
                                            {x.fullName}
                                        </td>
                                        <td>
                                            {x.username}
                                        </td>
                                        <td>
                                            {x.email}
                                        </td>
                                        <td>
                                            {x.role}
                                        </td>
                                        <td>
                                            {x.registrationDate}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </Layout>;
}

export default UsersPage;