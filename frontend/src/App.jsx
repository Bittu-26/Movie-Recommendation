import React from 'react';
import { useState } from 'react';
import { getRecommendations } from './api';

function App() {
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState([]);

  const submit = async () => {
    const result = await getRecommendations(input);
    setMovies(result);
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h2>Movie Recommendation App</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your movie preference"
        style={{ width: '300px', padding: '8px' }}
      />
      <br /><br />
      <button onClick={submit}>Get Recommendations</button>

      <ul>
        {movies.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
