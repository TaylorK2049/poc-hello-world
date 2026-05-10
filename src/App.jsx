import { useState } from 'react';
import profile from './assets/profile.png';
import './App.css';

const initialInterests = [
  'Artificial Intelligence',
  'Cybersecurity',
  'Software Engineering',
  'Research',
];

function App() {
  const [interests, setInterests] = useState(initialInterests);
  const [ascending, setAscending] = useState(true);

  const handleSort = () => {
    let sorted = [...interests].sort((a, b) => a.localeCompare(b));
    if (!ascending) sorted.reverse();
    setInterests(sorted);
    setAscending(!ascending);
  };

  return (
    <main className="page">
      <section className="card">
        <h1>Hello, welcome to my website!</h1>

        <p className="intro">
          I'm Taylor Kang, a CS student at UW Bothell interested in AI,
          cybersecurity, software engineering, and research.
        </p>

        <img src={profile} alt="Profile" className="profile-image" />

        <section className="info-box">
          <h2>My Interests</h2>

          <button onClick={handleSort}>
            Re-sort list ({ascending ? 'A-Z' : 'Z-A'})
          </button>

          <ul>
            {interests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}

export default App;