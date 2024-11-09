import React, { useState } from "react";
import { auth, provider, signInWithPopup, signOut } from "./firebase";
import AuthButton from "./components/AuthButton";
import LeadForm from "./components/LeadForm";
import LeadCard from "./components/LeadCard";

function App() {
    const [user, setUser] = useState(null);
    const [leadData, setLeadData] = useState(null);

    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => setUser(result.user))
            .catch((error) => console.error("Login Error:", error));
    };

    const handleLogout = () => {
        signOut(auth)
            .then(() => setUser(null))
            .catch((error) => console.error("Logout Error:", error));
    };

    return (
        <div>
            <AuthButton user={user} onLogin={handleLogin} onLogout={handleLogout} />
            {user && (
                <>
                    <LeadForm setLeadData={setLeadData} />
                    {leadData && <LeadCard data={leadData} />}
                </>
            )}
        </div>
    );
}

export default App;
