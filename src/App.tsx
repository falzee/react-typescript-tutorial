import React from 'react';

import './App.css';
import { Person, Town } from './component/Person';

function App() {
  return (
    <div className="App">
      <Person name="naufal" age={21} email="tes@mail.com" town={Town.Bangkok}/>
    </div>
  );
}

export default App;
