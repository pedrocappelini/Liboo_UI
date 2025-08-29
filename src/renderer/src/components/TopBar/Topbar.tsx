import React, { useState } from "react";
import styles from "./TopBar.module.css";

const Topbar: React.FC = () => {
  const [isCHovered, setIsCHovered] = useState(false);
  const [isMaxHovered, setMaxIsHovered] = useState(true);
  const [isMinHovered, setIsMinHovered] = useState(false);
  return (
    <nav className={styles.topbar}>
      <div className={styles.title}> LIBOO </div>
      <div className={styles.windowControls}>
        <div id="button area" className={styles.controlButton}>
          <button
            className={
              !isMinHovered ? styles.minimizeButton : styles.minButtonHover
            }
            onClick={() => {
              window.ipcRender.send("minimize-window");
            }}
            onMouseEnter={() => setIsMinHovered(true)}
            onMouseLeave={() => setIsMinHovered(false)}
          >
            &#128469;
          </button>
          <button
            className={
              !isMaxHovered ? styles.closeButton : styles.maxButtonHover
            }
            onClick={() => window.ipcRender.send("maximize-window")}
            onMouseEnter={() => setMaxIsHovered(true)}
            onMouseLeave={() => setMaxIsHovered(false)}
          >
            &#128470;
          </button>
          <button
            className={
              !isCHovered ? styles.closeButton : styles.closeButtonHover
            }
            onClick={() => window.ipcRender.send("close-window")}
            onMouseEnter={() => setIsCHovered(true)}
            onMouseLeave={() => setIsCHovered(false)}
          >
            &#10005;
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
