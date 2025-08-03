// src/renderer/components/Sidebar.tsx
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside
      style={{
        width: '300px',
        background: '#f8f9fa',
        padding: '10px',
        overflowY: 'auto',
      }}
    >
      <h4>Project Files</h4>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        <li>
          <input type="checkbox" checked /> repogun
          <ul>
            <li>
              <input type="checkbox" checked /> .erb
            </li>
            <li>
              <input type="checkbox" /> .git
            </li>
            <li>
              <input type="checkbox" checked /> .github
            </li>
            {/* Add more files as needed */}
          </ul>
        </li>
      </ul>
      <h4>Steps</h4>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        <li>
          <input type="checkbox" checked /> 1. Prepare Context
        </li>
        <li>
          <input type="checkbox" checked /> 2. Compose Prompt
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
