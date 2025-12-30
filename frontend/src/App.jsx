import React, { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [preference, setPreference] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMovies([]);        // 🔑 clear previous results
    setError("");

    if (!preference.trim()) {
      setError("Please enter a movie preference.");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(`${API_URL}/recommend`, {
        preference,
      });

      setMovies(res.data.movies || []);
    } catch (err) {
      setError("Failed to fetch recommendations.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>Movie Recommendation App</h1>

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder='e.g. "Sci-fi movies with time travel"'
          value={preference}
          onChange={(e) => setPreference(e.target.value)}
        />
        <button type="submit">Get Recommendations</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {/* ✅ Results ONLY show when movies exist */}
      {movies.length > 0 && (
        <div className="results">
          <h3>Recommended Movies</h3>
          <ul>
            {movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
