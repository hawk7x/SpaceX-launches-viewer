import { useState, useEffect } from 'react';
import LaunchList from './components/LaunchList';
import LaunchDetail from './components/LaunchDetail';
import './App.css';

export default function App() {
  const [launches, setLaunches] = useState([]);
  const [selectedLaunch, setSelectedLaunch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api.spacexdata.com/v5/launches')
      .then(res => res.json())
      .then(data => {
        setLaunches(data.slice(0, 15));
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading"> Loading launches...</div>;
  if (error) return <div className="error"> Error: {error}</div>;

  return (
    <div className="app-container">
      <h1>SpaceX Launches Viewer</h1>

      <input
      type="text"
      placeholder="Search launches..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-input"
      />

      <LaunchList
        launches={launches.filter(l =>
          l.name.toLowerCase().includes(searchTerm.toLowerCase())
        )}
        onSelect={setSelectedLaunch}
      />

      {selectedLaunch && (
        <div className="modal-backdrop" onClick={() => setSelectedLaunch(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <LaunchDetail launch={selectedLaunch} />
            <button className="close-btn" onClick={() => setSelectedLaunch(null)}>
              ✖ Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
