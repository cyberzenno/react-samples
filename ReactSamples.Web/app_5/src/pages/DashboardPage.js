import React, { useState, useRef, useContext, useEffect } from "react";
import Layout from "../layout/Layout";
import AuthContext from "../store/AuthContext";

function DashboardPage() {

    var _ctx = useContext(AuthContext);

    const [currentUser, setCurrentUser] = useState(_ctx.currentUser());

    return <Layout>
        <div className="container-fluid">
            <div className="d-sm-flex justify-content-between align-items-center mb-4">
                <h3 className="text-dark mb-0">Dashboard</h3>
            </div>
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <h5 className="text-dark mb-0">Welcome <b>{currentUser.fullName}</b>!</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>;
}

export default DashboardPage