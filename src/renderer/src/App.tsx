import React from "react";
import Topbar from "./components/TopBar/Topbar";

import "./assets/main.css";

function App() {
  return (
    <div className="app-layout">
      <Topbar />
      <main className="content">
        <h1>Welcome to Your App!</h1>
        <p>The layout is now fixed using your existing CSS files.</p>
      </main>
    </div>
  );
}

export default App;
