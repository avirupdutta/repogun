import React, { useState } from 'react';

import {
  ActionIcon,
  Box,
  Checkbox,
  Collapse,
  Group,
  ScrollArea,
  Text,
} from '@mantine/core';
import {
  IconChevronDown,
  IconChevronRight,
  IconFile,
  IconFolder,
} from '@tabler/icons-react';

interface FileNode {
  name: string;
  path: string;
  type: 'file' | 'folder';
  children?: FileNode[];
  selected?: boolean;
}

interface FileTreeProps {
  files: FileNode[];
  onFileSelect: (path: string, selected: boolean) => void;
}

const FileTreeItem: React.FC<{
  node: FileNode;
  level: number;
  onSelect: (path: string, selected: boolean) => void;
}> = ({ node, level, onSelect }) => {
  const [expanded, setExpanded] = useState(true);
  const [checked, setChecked] = useState(node.selected || false);

  const handleToggle = () => {
    if (node.type === 'folder') {
      setExpanded(!expanded);
    }
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.currentTarget.checked;
    setChecked(newChecked);
    onSelect(node.path, newChecked);
  };

  const paddingLeft = level * 20;

  return (
    <>
      <Group
        gap="xs"
        style={{ paddingLeft, cursor: 'pointer' }}
        onClick={handleToggle}
      >
        {node.type === 'folder' && (
          <ActionIcon variant="transparent" size="xs">
            {expanded ? (
              <IconChevronDown size={14} />
            ) : (
              <IconChevronRight size={14} />
            )}
          </ActionIcon>
        )}
        {node.type === 'file' && <Box style={{ width: 22 }} />}

        <Checkbox
          checked={checked}
          onChange={handleCheckboxChange}
          onClick={(e) => e.stopPropagation()}
          size="xs"
        />

        {node.type === 'folder' ? (
          <IconFolder size={16} color="#54aeff" />
        ) : (
          <IconFile size={16} color="#6c757d" />
        )}

        <Text size="sm" style={{ userSelect: 'none' }}>
          {node.name}
        </Text>
      </Group>

      {node.type === 'folder' && node.children && (
        <Collapse in={expanded}>
          {node.children.map((child, index) => (
            <FileTreeItem
              key={`${child.path}-${index}`}
              node={child}
              level={level + 1}
              onSelect={onSelect}
            />
          ))}
        </Collapse>
      )}
    </>
  );
};

const FileTree: React.FC<FileTreeProps> = ({ files, onFileSelect }) => {
  return (
    <ScrollArea style={{ height: '100%' }}>
      <Box p="sm">
        {files.map((file, index) => (
          <FileTreeItem
            key={`${file.path}-${index}`}
            node={file}
            level={0}
            onSelect={onFileSelect}
          />
        ))}
      </Box>
    </ScrollArea>
  );
};

// Sample data structure based on your project
export const sampleFileTree: FileNode[] = [
  {
    name: 'src',
    path: 'src',
    type: 'folder',
    selected: true,
    children: [
      {
        name: 'components',
        path: 'src/components',
        type: 'folder',
        selected: true,
        children: [
          { name: 'Demo.css', path: 'src/components/Demo.css', type: 'file' },
          {
            name: 'Features.css',
            path: 'src/components/Features.css',
            type: 'file',
          },
          {
            name: 'Footer.css',
            path: 'src/components/Footer.css',
            type: 'file',
          },
          {
            name: 'Hero.css',
            path: 'src/components/Hero.css',
            type: 'file',
            selected: true,
          },
          {
            name: 'PrivacyPolicy.css',
            path: 'src/components/PrivacyPolicy.css',
            type: 'file',
          },
          {
            name: 'Screenshots.css',
            path: 'src/components/Screenshots.css',
            type: 'file',
          },
          {
            name: 'TermsAndConditions.css',
            path: 'src/components/TermsAndConditions.css',
            type: 'file',
          },
          {
            name: 'ThemeSwitcher.css',
            path: 'src/components/ThemeSwitcher.css',
            type: 'file',
          },
          {
            name: 'Toolbar.css',
            path: 'src/components/Toolbar.css',
            type: 'file',
          },
        ],
      },
      {
        name: 'styles',
        path: 'src/styles',
        type: 'folder',
        children: [
          { name: 'theme.css', path: 'src/styles/theme.css', type: 'file' },
        ],
      },
      { name: 'App.css', path: 'src/App.css', type: 'file' },
      { name: 'index.css', path: 'src/index.css', type: 'file' },
      { name: 'tailwind.css', path: 'src/tailwind.css', type: 'file' },
    ],
  },
];

export default FileTree;
