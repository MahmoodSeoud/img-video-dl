import React, { useState } from 'react';
import Toolbar from "./components/Toolbar/Toolbar";
import Settings from './components/Settings/Settings'; // Adjust the path based on your folder structure
import { UilCog } from '@iconscout/react-unicons'
import './App.css'

function App() {

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Toggle the active state
  function handleSettingsClick() {
    setIsSettingsOpen(true);
  }

  // Handle the closing of the settings
  function closeSettings() {
    setIsSettingsOpen(false);
  }

  return (
    <div className="App">
      <div
        onClick={handleSettingsClick}
      >
        <UilCog
          className="settings-icon"
          width={25}
          height={25}
        />

      </div>
      { isSettingsOpen && <Settings onClose={closeSettings} isOpen={isSettingsOpen} />}
      <Toolbar />
    </div>
  );
}

export default App;

