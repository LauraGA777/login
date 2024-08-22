import React, { useContext, useEffect } from "react";
import { AuthContext, AuthProvider } from "./components/login/AuthContext";
import Login from "./components/login/Login";

const AppContent = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);

    return (<>
        <div className="App">
            {isAuthenticated ? (
                <div className="container mt-5">
                    <h1>Bienvenido</h1>
                    <button onClick={logout} className="btn btn-danger">Cerrar Sesión</button>
                    {"Hola Mundo"}
                </div>) : (<Login />)}
        </div>
        </>
    );
};
const App = () => (
    <AuthProvider>
        <AppContent />
    </AuthProvider>
);
export default App;
