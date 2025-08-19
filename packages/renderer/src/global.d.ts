interface Window {
  [key: string]: any; // Allow indexing with string
  // Explicitly define the btoa-encoded keys
  [btoa('openDirectoryDialog')]: () => Promise<string | null>;
  [btoa('readDirectoryContents')]: (dirPath: string) => Promise<FileNode[] | null>;
}

interface FileNode {
  name: string;
  path: string;
  type: 'file' | 'folder';
  children?: FileNode[];
}
