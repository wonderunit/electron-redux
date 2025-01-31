export default jest.fn();

export const webContents = {
  getAllWebContents: jest.fn(() => []),
};

export const ipcMain = {
  on: jest.fn(),
};

export const ipcRenderer = {
  on: jest.fn(),
  send: jest.fn(),
  sendSync: jest.fn(),
};
