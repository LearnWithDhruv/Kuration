import React from "react";

function AuthButton({ user, onLogin, onLogout }) {
    return user ? (
        <button onClick={onLogout}>Logout</button>
    ) : (
        <button onClick={onLogin}>Login with Google</button>
    );
}

export default AuthButton;
