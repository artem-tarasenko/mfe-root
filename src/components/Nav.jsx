import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {


    return (
        <div className="rootnav">
            <h3 className="rootnav-title">Menu</h3>
            <div className="rootnav-list">
                <NavLink to="/">Homepage</NavLink>
                <NavLink to="/reports">Reports</NavLink>
                <NavLink to="/customers">Customers</NavLink>
            </div>
        </div>
    )
}
