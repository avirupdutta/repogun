// src/renderer/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        textAlign: 'center',
        marginTop: '20px',
        padding: '10px',
        backgroundColor: '#eee',
      }}
    >
      <p>&copy; {new Date().getFullYear()} My Electron App</p>
    </footer>
  );
};

export default Footer;
