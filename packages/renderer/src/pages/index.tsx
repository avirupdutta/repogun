import MainLayout from '../components/MainLayout';

interface FileNode {
  name: string;
  path: string;
  type: 'file' | 'folder';
  children?: FileNode[];
}

interface IndexProps {
  fileTree: FileNode[] | null;
  selectedFolderPath: string | null;
}

const Index: React.FC<IndexProps> = ({fileTree, selectedFolderPath}) => {
  return <MainLayout fileTree={fileTree} selectedFolderPath={selectedFolderPath} />;
};

export default Index;
