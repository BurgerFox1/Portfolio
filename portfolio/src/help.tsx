// Help.tsx
import React from 'react';

interface HelpProps {
  isOpen: boolean;
}

const Help: React.FC<HelpProps> = ({ isOpen }) => {
  if (!isOpen) {
    return null; // Return null if dialog is not open
  }

  return (
    <div className="dialog-box">
      <p className="dialog-box-content">This is the dialog content.</p>
    </div>
  );
};

export default Help;
