import React, { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Leaderboard from "./components/Leaderboard";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [userData, setUserData] = useState(null);
  const [currentPage, setCurrentPage] = useState("dashboard");

  const handleLogout = () => {
    setUserData(null);
    setCurrentPage("dashboard");
  };

  return (
    <div style={{ backgroundColor: "#f9fafe", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {userData ? (
        <>
          <NavBar
            onLogout={handleLogout}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <div style={{ flex: "1" }}>
            {currentPage === "dashboard" && <Dashboard user={userData} />}
            {currentPage === "leaderboard" && <Leaderboard />}
          </div>
          <Footer />
        </>
      ) : (
        <Login onLogin={(data) => setUserData(data)} />
      )}
    </div>
  );
}

export default App;
