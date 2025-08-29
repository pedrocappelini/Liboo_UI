/// <reference types="vite/client" />

export {};

declare global {
  interface Window {
    ipcRender: {
      send: (channel: string, args?: any) => void;
    };
  }
}
