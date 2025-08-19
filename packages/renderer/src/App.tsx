import {ColorSchemeScript, MantineProvider, Button} from '@mantine/core';
import {useState} from 'react';

import Index from './pages';

interface FileNode {
  name: string;
  path: string;
  type: 'file' | 'folder';
  children?: FileNode[];
}

const App = () => {
  const [fileTree, setFileTree] = useState<FileNode[] | null>(null);
  const [selectedFolderPath, setSelectedFolderPath] = useState<string | null>(null);

  const handleOpenFolder = async () => {
    // Directly use the btoa-encoded keys
    const openDirectoryDialogKey = btoa('openDirectoryDialog');
    const readDirectoryContentsKey = btoa('readDirectoryContents');

    // Check if the functions are exposed
    if (window[openDirectoryDialogKey] && window[readDirectoryContentsKey]) {
      const openDialog = window[openDirectoryDialogKey];
      const readContents = window[readDirectoryContentsKey];

      const folderPath = await openDialog();
      if (folderPath) {
        setSelectedFolderPath(folderPath);
        const tree = await readContents(folderPath);
        setFileTree(tree);
      }
    } else {
      console.error('Electron API not exposed correctly.');
    }
  };

  return (
    <MantineProvider defaultColorScheme="dark">
      <ColorSchemeScript defaultColorScheme="dark" />
      {selectedFolderPath ? (
        <Index fileTree={fileTree} selectedFolderPath={selectedFolderPath} />
      ) : (
        <Button onClick={handleOpenFolder}>Select Folder</Button>
      )}
    </MantineProvider>
  );
};

export default App;
