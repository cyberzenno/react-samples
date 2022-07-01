import React, { useState, useRef, useContext, useEffect } from "react";
import Layout from "../layout/Layout";
import AuthContext from "../store/AuthContext";

function ProfilePage() {

    var _ctx = useContext(AuthContext);

    const [currentUser, setCurrentUser] = useState(_ctx.currentUser());

    return <Layout>

        <div className="container-fluid">
            <h3 className="text-dark mb-4">Profile</h3>
            <div className="row mb-3">
                <div className="col-lg-4">
                    <div className="card mb-3">
                        <div className="card-body text-center shadow">
                            <img className="rounded-circle mb-3 mt-4" src="assets/img/dogs/image2.jpeg" width="160" height="160" />
                            <div className="mb-3">
                                <button className="btn btn-primary btn-sm" type="button">Change Photo</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col">
                            <div className="card shadow mb-3">
                                <div className="card-header py-3">
                                    <p className="text-primary m-0 fw-bold">User Settings</p>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row">
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="first_name">
                                                        <strong>First Name</strong>
                                                    </label>
                                                    <input className="form-control" type="text" id="first_name" placeholder="John" name="first_name" defaultValue={currentUser.firstName} />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="last_name">
                                                        <strong>Last Name</strong>
                                                    </label>
                                                    <input className="form-control" type="text" id="last_name" placeholder="Doe" name="last_name" defaultValue={currentUser.lastName} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="username">
                                                        <strong>Username</strong>
                                                    </label>
                                                    <input className="form-control" type="text" id="username" placeholder="username" name="username" defaultValue={currentUser.username} />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="email">
                                                        <strong>Email Address</strong>
                                                    </label>
                                                    <input className="form-control" type="email" id="email" placeholder="user@example.com" name="email" defaultValue={currentUser.email} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="first_name">
                                                        <strong>User Role</strong>
                                                    </label>
                                                    <input className="form-control" type="text" id="first_name-1" placeholder="user" name="user_role" value={currentUser.role} disabled="disabled" />
                                                </div>
                                            </div>
                                            <div className="col"></div>
                                        </div>
                                        <div className="mb-3">
                                            <button className="btn btn-primary btn-sm" type="submit" disabled>Save Settings</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </Layout>;
}

export default ProfilePage