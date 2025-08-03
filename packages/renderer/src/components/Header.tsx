// src/renderer/components/Header.tsx
import React from 'react';

const StepIndicator: React.FC<{
  number: number;
  label: string;
  active?: boolean;
}> = ({ number, label, active }) => {
  const indicatorStyle = active ? { color: 'green' } : {};
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div
        style={{
          ...indicatorStyle,
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          border: '1px solid #ccc',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span style={{ ...indicatorStyle, fontSize: '16px' }}>{number}</span>
      </div>
      <span style={{ ...indicatorStyle, marginTop: '5px' }}>{label}</span>
    </div>
  );
};
const Header: React.FC = () => {
  return (
    <header
      style={{
        backgroundColor: '#f0f0f0',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      <div>
        <h3>Select Project Folder</h3>
        <p>
          Selected: C:\Users\aviru\OneDrive\Desktop\CodeBuddy\others\repogun
        </p>
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <StepIndicator number={1} label="Prepare Context" active />
        <StepIndicator number={2} label="Compose Prompt" active />
        <StepIndicator number={3} label="Execute Prompt" />
        <StepIndicator number={4} label="Apply Patch" />
      </div>
    </header>
  );
};

export default Header;
