import { useRef, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import LayoutRegisterLogin from '../layout/LayoutRegisterLogin';
import AuthContext from "../store/AuthContext";
import { useApiUrls } from "../hooks/useApisUrl";


function Register() {

    var _ctx = useContext(AuthContext);

    var _apiUrls = useApiUrls(_ctx.environment);

   

    var firstNameRef = useRef();
    var lastNameRef = useRef();
    var emailRef = useRef();
    var passwordRef = useRef();

    function submitHandler(event) {
        event.preventDefault();


        var firstName = firstNameRef.current.value;
        var lastName = lastNameRef.current.value;
        var email = emailRef.current.value;
        var password = passwordRef.current.value;

        var registerData = {
            firstName,
            lastName,
            email,
            password
        };

        var registerUrl = _apiUrls.registerUrl;
        fetch(registerUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerData),
        })
            .then(response => response.json())
            .then(data => {

                //we expect Register to return an already logged in dataUserToken (same as normal login)
                _ctx.login(data, _ctx.baseName);

            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    return <LayoutRegisterLogin>

        <div className="card-body p-0">
            <div className="row">
                <div className="col-lg-5 d-none d-lg-flex">
                    <div className="flex-grow-1 bg-register-image" style={{ backgroundImage: "url('assets/img/dogs/image2.jpeg')" }}></div>
                </div>
                <div className="col-lg-7">
                    <div className="p-5">
                        <div className="text-center">
                            <h4 className="text-dark mb-4">Create an Account!</h4>
                        </div>
                        <form className="user">
                            <div className="row mb-3">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <input className="form-control form-control-user" type="text" placeholder="First Name" name="first_name" ref={firstNameRef} />
                                </div>
                                <div className="col-sm-6">
                                    <input className="form-control form-control-user" type="text" placeholder="Last Name" name="last_name" ref={lastNameRef} />
                                </div>
                            </div>
                            <div className="mb-3">
                                <input className="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Email Address" name="email" ref={emailRef} />
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <input className="form-control form-control-user" type="password" id="examplePasswordInput" placeholder="Password" name="password" ref={passwordRef} />
                                </div>
                                <div className="col-sm-6">
                                    <input disabled className="form-control form-control-user" type="password" id="exampleRepeatPasswordInput" placeholder="Repeat Password" name="password_repeat" />
                                </div>
                            </div>
                            <button className="btn btn-primary d-block btn-user w-100" onClick={submitHandler}>
                                Register Account
                        </button>
                            <hr />
                        </form>
                        {/*<div className="text-center"><a className="small" style={{ color: '#4e73df' }} href="forgot-password.html">Forgot Password?</a></div>*/}

                        <div className="text-center">
                            <NavLink to="/login" className="small" style={{ color: '#4e73df' }}>
                                Already have an account? Login!
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </LayoutRegisterLogin>;
}

export default Register;