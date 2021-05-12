
import './App.css';
import List from './List.jsx';
import data from './data'
import { useState } from 'react';

function App() {
  const [people, setPeople] = useState(data);

  function handler() {
    setPeople([]);
  }
  return (
    <div className="App">
      <section className="card">
        <h1>{people.length} Birthday Today</h1>
        <List people={people}></List>
        <button onClick={handler}>Clear All</button>
      </section>
    </div>
  );
}

export default App;
