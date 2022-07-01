import {  NavLink } from "react-router-dom";
function NotFound(props) {
    return <div>
        <div className="alert alert-warning mx-4 my-4" role="alert">
            <div>Not found</div>
            <hr />
            <NavLink to={props.redirectUrl} style={{ textWeight: "bold" }}>Back</NavLink>
        </div>
       
    </div>
}


export default NotFound;