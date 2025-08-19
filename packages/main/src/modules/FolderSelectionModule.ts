import {ipcMain, dialog} from 'electron';
import {AppModule, ModuleContext} from '../ModuleContext';
import * as fs from 'fs';
import * as path from 'path';

interface FileNode {
  name: string;
  path: string;
  type: 'file' | 'folder';
  children?: FileNode[];
}

async function readDirectoryRecursive(dirPath: string): Promise<FileNode[]> {
  const entries = await fs.promises.readdir(dirPath, {withFileTypes: true});
  const fileNodes: FileNode[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      const children = await readDirectoryRecursive(fullPath);
      fileNodes.push({
        name: entry.name,
        path: fullPath,
        type: 'folder',
        children,
      });
    } else {
      fileNodes.push({
        name: entry.name,
        path: fullPath,
        type: 'file',
      });
    }
  }
  return fileNodes;
}

export function createFolderSelectionModule(): AppModule {
  return {
    enable: async (context: ModuleContext) => {
      ipcMain.handle('open-directory-dialog', async () => {
        const {canceled, filePaths} = await dialog.showOpenDialog({
          properties: ['openDirectory'],
        });
        if (canceled) {
          return null;
        } else {
          return filePaths[0];
        }
      });

      ipcMain.handle('read-directory-contents', async (event, dirPath: string) => {
        try {
          const fileTree = await readDirectoryRecursive(dirPath);
          return fileTree;
        } catch (error) {
          console.error('Failed to read directory contents:', error);
          return null;
        }
      });
    },
    disable: async () => {
      // Clean up IPC handlers if necessary
    },
  };
}
