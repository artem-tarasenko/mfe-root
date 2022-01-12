import React from "react";
import AuthStatus from "../auth/authStatus";
import { Outlet } from 'react-router-dom';
import Nav from "./Nav";

export default function Layout( {suspended} ) {
    return (           
        <div className="wrapper">
            <pre>react-root@app.js</pre>
            <div className="header">
                <h2>React-root app</h2>
                <AuthStatus />
            </div>
            <div className="main">
                <Nav />
                <div className="section">
                    {
                        suspended 
                            ? <p>Loading...</p>
                            : <Outlet/>
                    }
                </div>
            </div>
        </div>
    );
}