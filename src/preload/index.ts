import { contextBridge } from "electron";

if (!process.contextIsolated) {
  throw new Error("Preload scripts must have contextIsolation enabled.");
}

try {
  contextBridge.exposeInMainWorld("context", {
    //todo
  });
} catch (e) {
  console.error(e);
}
