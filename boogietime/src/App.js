import './App.css';
import Settings from './Settings';
import Timer from './Timer';
import { useState } from 'react';
import backgroundImage from './boogie.jpeg';


function App() {

  const [showSettings, setShowSettings] = useState(false);
  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover', // Cover the entire viewport
      backgroundPosition: 'center', // Center the background image
      width: '100vw', // Full viewport width
      height: '100vh', // Full viewport height
      color: '#eee' // Text color
    }}>
      <main> 
        {showSettings ? <Settings /> : <Timer />}
        </main>
    </div>
  );
}

export default App;
