import { contextBridge, ipcRenderer } from "electron";

if (!process.contextIsolated) {
  throw new Error("Preload scripts must have contextIsolation enabled.");
}

try {
  contextBridge.exposeInMainWorld("ipcRender", {
    send: (channel: string) => {
      const validChannels = [
        "minimize-window",
        "maximize-window",
        "close-window",
      ];
      if (validChannels.includes(channel)) {
        ipcRenderer.send(channel);
      }
    },
  });
} catch (e) {
  console.error(e);
}
