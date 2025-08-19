import {sha256sum} from './nodeCrypto.js';
import {versions} from './versions.js';
import {ipcRenderer} from 'electron';

function send(channel: string, message: string) {
  return ipcRenderer.invoke(channel, message);
}

async function openDirectoryDialog(): Promise<string | null> {
  return ipcRenderer.invoke('open-directory-dialog');
}

interface FileNode {
  name: string;
  path: string;
  type: 'file' | 'folder';
  children?: FileNode[];
}

async function readDirectoryContents(dirPath: string): Promise<FileNode[] | null> {
  return ipcRenderer.invoke('read-directory-contents', dirPath);
}

export {sha256sum, versions, send, openDirectoryDialog, readDirectoryContents};
