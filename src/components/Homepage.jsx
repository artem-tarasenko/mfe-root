import React from "react";


export default function Homepage() {
   
    return (
        <div className="section">
            <h3>Homepage example</h3>
            <p>This is the basic example of implementing secured routes in the application with MDE modules</p>
            <p>Actually, MFE has nothing to do with secured routes. That functionality is handled purely by routing library. Webpack only address the problem of loading a remote module and mounting it when needed. THe routing library says "when" and handles all the rest about auth and routing directly in the root app.</p>
            <p>This example is based on a fake auth status provider, React Context and React Router v6</p>
        </div>
    )
}