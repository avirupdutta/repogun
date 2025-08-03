/* eslint-disable react/no-array-index-key */
import React from 'react';

import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Card,
  Group,
  Select,
  Text,
} from '@mantine/core';
import { IconCopy, IconFile, IconSortAscending } from '@tabler/icons-react';

interface SelectedFile {
  name: string;
  path: string;
  size: string;
  tokens: number;
}

interface SelectedFilesProps {
  files: SelectedFile[];
  totalTokens: number;
  onCopy: () => void;
}

const SelectedFiles: React.FC<SelectedFilesProps> = ({
  files,
  totalTokens,
  onCopy,
}) => {
  return (
    <Box>
      <Group justify="space-between" mb="md">
        <Group gap="sm">
          <Text size="sm" fw={500}>
            Selected Files
          </Text>
          <Badge variant="light" size="sm">
            {files.length} files
          </Badge>
          <Badge variant="light" size="sm">
            ~{Math.abs(totalTokens).toLocaleString()} Tokens
          </Badge>
          <Badge variant="light" size="sm">
            0 file apis
          </Badge>
          <Badge variant="light" size="sm">
            ~0.00k tokens
          </Badge>
        </Group>

        <Group gap="xs">
          <Select
            data={[
              { value: 'name', label: 'Sort by Name' },
              { value: 'size', label: 'Sort by Size' },
              { value: 'tokens', label: 'Sort by Tokens' },
            ]}
            defaultValue="name"
            size="xs"
            leftSection={<IconSortAscending size={14} />}
            style={{ width: 140 }}
          />
          <ActionIcon variant="light" size="sm">
            <IconCopy size={14} />
          </ActionIcon>
        </Group>
      </Group>

      <Group gap="sm" mb="md">
        {files.map((file, index) => (
          <Card key={index} padding="sm" withBorder style={{ minWidth: 200 }}>
            <Group gap="xs" mb="xs">
              <IconFile size={16} color="#6c757d" />
              <Text size="sm" fw={500} truncate>
                {file.name}
              </Text>
            </Group>
            <Text size="xs" c="dimmed">
              {file.size}
            </Text>
          </Card>
        ))}
      </Group>

      <Group justify="space-between" align="center">
        <Group gap="sm">
          <Button
            leftSection={<IconCopy size={14} />}
            onClick={onCopy}
            size="sm"
          >
            Copy
          </Button>
        </Group>
        <Text size="xs" c="dimmed">
          Approx. Token Total: ~{Math.abs(totalTokens).toLocaleString()}
        </Text>
      </Group>
    </Box>
  );
};

export default SelectedFiles;
