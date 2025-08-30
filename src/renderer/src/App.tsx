import React from "react";
import Topbar from "./components/TopBar/Topbar";

import "./assets/main.css";

function App() {
  return (
    <div className="app-layout">
      <Topbar />
      <main className="content">
        <h1>Welcome to Liboo</h1>
        <p>Yeah... there's nothing here really</p>
      </main>
    </div>
  );
}

export default App;
