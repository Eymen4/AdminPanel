import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    let userId = 11;
    return (
        <div>
            <ul>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/admin">Admin</Link></li>
                <li><Link to={{pathname: '/users' + userId}}>User Profile</Link></li>

            </ul>
        </div>

    )
}

export default Navbar;