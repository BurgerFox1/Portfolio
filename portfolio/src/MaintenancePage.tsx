import React, { useEffect, useState } from 'react';
import './MaintenancePage.css';

const MaintenancePage: React.FC = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<number | undefined>(undefined);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstVisit(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  const [orient, setText] = useState<string>('right');

  const updateTextContent = () => {
    if (window.innerWidth <= 1000) {
        setText('below');
    } else {
        setText('right');
    }
  };

  const [number, setNumber] = useState<number>(0);
  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 50) + 1;
    setNumber(randomNum);
  }, []); 

  useEffect(() => {

    updateTextContent();

    window.addEventListener('resize', updateTextContent);

    return () => window.removeEventListener('resize', updateTextContent);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsDialogOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsDialogOpen(false);
    }, 500); // Adjust the delay as needed
    setTimeoutId(id);
  };

  

  const textTitle = "Hello and Welcome to my Website, Unfortunetely there is nothing to see in here for now.. (ᴗ_ ᴗ。)";

  return (
    <div className="maintenance-container">
      <div className={`content ${isFirstVisit ? '' : 'open'}`}>
        <div className="text-container">
          <h1>A website will be here soon!</h1>
          <p>
            {textTitle}
          </p>
          <p>Anyways enjoy these random 50 images {orient} of your screen everytime you refresh this page ⸜(｡˃ ᵕ ˂ )⸝♡ </p>
          <p>&mdash; burgerfox1</p>
        </div>
        <button
          className="chat-button"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ></button>
        <div
          className={`dialog-box ${isDialogOpen ? 'open' : ''}`}
          style={{ top: cursorPosition.y, left: cursorPosition.x }}
        >
          <p className="dialog-box-content"><b>You can contact me at kitsunebusiness1@gmail.com</b></p>
        </div>
      </div>
      <div className="image">
        <img src={`src/assets/${number}.jpg`} alt={`random image lol ${number}`} />
      </div>
    </div>
  );
};

export default MaintenancePage;
