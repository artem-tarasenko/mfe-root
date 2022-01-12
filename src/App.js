import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
  
import RequireAuth from "./auth/requireAuth";
import { AuthProvider } from "./auth/context";

import './styles/main.scss';
import Layout from "./components/Layout";
import Homepage from "./components/Homepage";
import LoginPage from "./components/LoginPage";

const Customers = React.lazy( () => import("customersMfe/Customers"));
const Reports = React.lazy( () => import("reportsMfe/Reports"));

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Suspense fallback={ <Layout suspended={true} /> } >
                    <Routes>

                        <Route element={<RequireAuth><Layout /></RequireAuth>}>
                            <Route path="/" element={<Homepage />} />
                            <Route path="/customers" element={<Customers />} />
                            <Route path="/reports" element={<Reports />} />
                        </Route>

                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
                </Suspense>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default App