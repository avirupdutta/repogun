import { ColorSchemeScript, MantineProvider } from '@mantine/core';

import Index from './pages';

const App = () => {
  return (
    <MantineProvider defaultColorScheme="dark">
      <ColorSchemeScript defaultColorScheme="dark" />
      <Index />
    </MantineProvider>
  );
};

export default App;
