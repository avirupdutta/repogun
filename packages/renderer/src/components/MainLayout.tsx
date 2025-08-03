import React, { useState } from 'react';

import { ActionIcon, AppShell, Box, Button, Group, Text } from '@mantine/core';
import {
  IconFilter,
  IconRefresh,
  IconSearch,
  IconSortAscending,
  IconTrash,
} from '@tabler/icons-react';

import CodeEditor from './CodeEditor';
import FileTree, { sampleFileTree } from './FileTree';
import SelectedFiles from './SelectedFiles';

interface SelectedFile {
  name: string;
  path: string;
  size: string;
  tokens: number;
}

const MainLayout: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<SelectedFile[]>([
    {
      name: 'Hero.css',
      path: 'src/components/Hero.css',
      size: '~2.38k (66%)',
      tokens: -2380,
    },
    {
      name: 'Hero.js',
      path: 'src/components/Hero.js',
      size: '~1.77k (42%)',
      tokens: -1770,
    },
  ]);

  const totalTokens = selectedFiles.reduce((sum, file) => sum + file.tokens, 0);

  const handleFileSelect = (path: string, selected: boolean) => {
    if (selected) {
      // Add file to selected files (you would implement actual file reading here)
      const fileName = path.split('/').pop() || '';
      const newFile: SelectedFile = {
        name: fileName,
        path,
        size: '~1.2k (35%)', // This would be calculated
        tokens: -1200, // This would be calculated
      };
      setSelectedFiles((prev) => [...prev, newFile]);
    } else {
      // Remove file from selected files
      setSelectedFiles((prev) => prev.filter((file) => file.path !== path));
    }
  };

  const handleCopy = () => {
    // Implementation for copying selected files content
    console.log('Copying files:', selectedFiles);
  };

  const handleNewChat = () => {
    // Implementation for starting new chat
    console.log('Starting new chat');
  };

  return (
    <AppShell
      navbar={{ width: 300, breakpoint: 'sm' }}
      padding={0}
      style={{ height: '100vh' }}
    >
      <AppShell.Navbar p={0} style={{ borderRight: '1px solid #e9ecef' }}>
        {/* Sidebar Header */}
        <Group
          justify="space-between"
          p="sm"
          style={{ borderBottom: '1px solid #e9ecef' }}
        >
          <Group gap="xs">
            <ActionIcon variant="light" size="sm">
              <IconSortAscending size={16} />
            </ActionIcon>
            <Text size="sm" fw={500}>
              Sort
            </Text>

            <ActionIcon variant="light" size="sm">
              <IconFilter size={16} />
            </ActionIcon>
            <Text size="sm" fw={500}>
              Filters
            </Text>

            <Button variant="light" size="xs">
              Clear
            </Button>
          </Group>

          <ActionIcon variant="light" size="sm">
            <IconRefresh size={16} />
          </ActionIcon>
        </Group>

        {/* Search Bar */}
        <Box p="sm" style={{ borderBottom: '1px solid #e9ecef' }}>
          <Group gap="xs">
            <IconSearch size={16} />
            <Text size="sm" c="dimmed">
              css
            </Text>
            <ActionIcon variant="light" size="xs">
              <IconTrash size={12} />
            </ActionIcon>
          </Group>
        </Box>

        {/* File Tree */}
        <FileTree files={sampleFileTree} onFileSelect={handleFileSelect} />
      </AppShell.Navbar>

      <AppShell.Main
        style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
        <Box p="sm" style={{ borderBottom: '1px solid #e9ecef' }}>
          <SelectedFiles
            files={selectedFiles}
            totalTokens={totalTokens}
            onCopy={handleCopy}
          />
        </Box>
        <Box style={{ flex: 1 }}>
          <CodeEditor onNewChat={handleNewChat} />
        </Box>
      </AppShell.Main>
    </AppShell>
  );
};

export default MainLayout;
