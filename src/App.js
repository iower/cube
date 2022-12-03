import './App.css';

import { useState } from 'react'

function App() {
  const [value, setValue] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <div className="screens">
          <div className={`screen ${value && 'reduced'}`}>
            <div className={`inner ${value && 'reduced'}`}>
              Screen 1
            </div>
          </div>
          <div className="screen">Screen 2</div>
        </div>

        <div className="buttons">
          <button onClick={() => { setValue(false) }}>&lt;-</button>
          <button onClick={() => { setValue(true) }}>-&gt;</button>
        </div>
      </header>
    </div>
  );
}

export default App;
