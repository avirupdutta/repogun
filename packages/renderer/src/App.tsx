import { Button, ColorSchemeScript, MantineProvider } from '@mantine/core';
import { useState } from 'react';

import viteLogo from '/vite.svg';

import reactLogo from './assets/react.svg';
import { cn } from './utils/helper';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <MantineProvider defaultColorScheme="dark">
      <ColorSchemeScript defaultColorScheme="dark" />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Button
          className={cn({
            'text-green-500': count % 2 === 0,
            'text-red-500': count % 2 !== 0,
          })}
          variant="outline">
          Click me
        </Button>
        <p className="text-3xl font-bold underline text-yellow-500">Vite + React</p>
        <div className="card">
          <button onClick={() => setCount((nextCount) => nextCount + 1)}>count is {count}</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      </div>
    </MantineProvider>
  );
};

export default App;
