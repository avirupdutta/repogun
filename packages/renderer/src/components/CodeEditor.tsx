import React, { useState } from 'react';

import { ActionIcon, Box, Button, Group, Tabs, Text, Textarea } from '@mantine/core';
import { IconMessage, IconPlus, IconSettings } from '@tabler/icons-react';

interface CodeEditorProps {
  onNewChat: () => void;
}

const CodeEditor: React.FC<CodeEditorProps> = () => {
  const [activeTab, setActiveTab] = useState('instructions');
  const [instructions, setInstructions] = useState<string | null>(null);

  return (
    <Box style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Top Action Bar */}
      <Group justify="space-between" p="sm" style={{ borderBottom: '1px solid #e9ecef' }}>
        <Group gap="sm">
          <Button variant="light" size="sm" style={{ background: '#007bff', color: 'white' }}>
            Compose
          </Button>
          <Button variant="light" size="sm">
            Apply
          </Button>
        </Group>

        <Group gap="xs">
          <ActionIcon variant="light" size="sm">
            <IconMessage size={16} />
            <Text size="xs">Chat</Text>
          </ActionIcon>
          <ActionIcon variant="light" size="sm">
            <IconSettings size={16} />
          </ActionIcon>
        </Group>
      </Group>

      {/* Tabs */}
      <Tabs
        value={activeTab}
        onChange={(value) => setActiveTab(value ?? 'instructions')}
        style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Tabs.List>
          <Tabs.Tab value="instructions">Instructions</Tabs.Tab>
          <Tabs.Tab value="codemap">Code Map</Tabs.Tab>
          <Tabs.Tab value="xmldiff">XML Diff</Tabs.Tab>
          <Group ml="auto" gap="xs">
            <Text size="sm" c="dimmed">
              Prompts
            </Text>
            <ActionIcon variant="light" size="xs">
              <IconPlus size={12} />
            </ActionIcon>
          </Group>
        </Tabs.List>

        <Box style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Tabs.Panel
            value="instructions"
            style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Textarea
              placeholder="Enter your instructions here..."
              value={instructions ?? ''}
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                const handler: (value: string | null) => void = setInstructions;
                handler(event.currentTarget.value);
              }}
              style={{ flex: 1 }}
              styles={{
                input: {
                  height: '100%',
                  resize: 'none',
                  border: 'none',
                  background: 'transparent',
                },
              }}
            />
          </Tabs.Panel>

          <Tabs.Panel value="codemap">Code map content would go here</Tabs.Panel>
          <Tabs.Panel value="xmldiff">XML Diff content would go here</Tabs.Panel>
        </Box>
      </Tabs>
    </Box>
  );
};

export default CodeEditor;
