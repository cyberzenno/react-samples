import { useRef, useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import LayoutRegisterLogin from '../layout/LayoutRegisterLogin';

import AuthContext from "../store/AuthContext";
import { useApiUrls } from "../store/AuthContext";

function Login() {

    var _ctx = useContext(AuthContext);

    var _apiUrls = useApiUrls(_ctx.environment);

    var usernameRef = useRef();
    var passwordRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        var username = usernameRef.current.value;
        var password = passwordRef.current.value;

        var logindata = {
            username,
            password
        };

        var loginUrl = _apiUrls.loginUrl;
        fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(logindata),
        })
            .then(async response => {

                if (response.ok) {
                    var data = await response.json();

                    var redirectUrl = _ctx.baseName;
                    _ctx.login(data, redirectUrl);

                    console.log('Success:', data);
                } else {
                    throw new Error("Error on login");
                }
            })
            .catch(error => {
                alert('Error: ' + error.message);
            });
    }


    return <LayoutRegisterLogin>

        <div className="card-body p-0">
            <div className="row">
                <div className="col-lg-6 d-none d-lg-flex">
                    <div className="flex-grow-1 bg-login-image" style={{ backgroundImage: "url('assets/img/dogs/image3.jpeg')" }}></div>
                </div>
                <div className="col-lg-6">
                    <div className="p-5">
                        <div className="text-center">
                            <h4 className="text-dark mb-4">Welcome Back!</h4>
                        </div>
                        <form className="user">
                            <div className="mb-3">
                                <input className="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp"
                                    placeholder="Enter Email Address..." name="email" ref={usernameRef} />
                            </div>
                            <div className="mb-3">
                                <input className="form-control form-control-user" type="password" id="exampleInputPassword"
                                    placeholder="Password" name="password" ref={passwordRef} />
                            </div>
                            <div className="mb-3">
                                <div className="custom-control custom-checkbox small">
                                    <div className="form-check">
                                        <input className="form-check-input custom-control-input" type="checkbox" id="formCheck-1" />
                                        <label className="form-check-label custom-control-label" style={{ color: '#4e73df' }} htmlFor="formCheck-1">Remember Me</label>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-primary d-block btn-user w-100" onClick={submitHandler}>Login</button>
                            <hr />
                        </form>
                        {/*<div className="text-center">*/}
                        {/*    <a className="small" style={{ color: '#4e73df' }} href="forgot-password.html">Forgot Password?</a>*/}
                        {/*</div>*/}
                        <div className="text-center">

                            <NavLink to="/register" className="small" style={{ color: '#4e73df' }}>
                                Create an Account!
                        </NavLink>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </LayoutRegisterLogin>;
}

export default Login;