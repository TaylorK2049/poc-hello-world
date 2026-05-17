import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import profile from './assets/profile.png';
import './App.css';

function HomePage() {
  const initialInterests = [
    'Artificial Intelligence',
    'Cybersecurity',
    'Software Engineering',
    'Research',
    'Fitness'
  ];

  const [interests, setInterests] = useState(initialInterests);
  const [ascending, setAscending] = useState(true);

  const handleSort = () => {
    let sorted = [...interests].sort((a, b) => a.localeCompare(b));

    if (!ascending) {
      sorted.reverse();
    }

    setInterests(sorted);
    setAscending(!ascending);
  };

  return (
    <section className="card">
      <h1>Hello, welcome to my website!</h1>

      <p className="intro">
        I'm Taylor Kang, a CS student at UW Bothell interested in AI,
        cybersecurity, software engineering, and research.
      </p>

      <img
        src={profile}
        alt="Profile"
        className="profile-image"
      />

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
  );
}

function ReadingPage() {
  return (
    <section className="card">
      <h1>Things to Read</h1>

      <p>
        These are websites and topics I find interesting.
      </p>

      <ul className="reading-list">
        <li><a href="https://react.dev" target="_blank">React Documentation</a></li>
        <li><a href="https://openai.com" target="_blank">OpenAI</a></li>
        <li><a href="https://developer.mozilla.org" target="_blank">MDN Web Docs</a></li>
        <li><a href="https://owasp.org" target="_blank">OWASP</a></li>
        <li><a href="https://www.w3.org/WAI/" target="_blank">W3C Accessibility</a></li>
        <li><a href="https://www.cisa.gov" target="_blank">CISA</a></li>
        <li><a href="https://www.nasa.gov" target="_blank">NASA</a></li>
        <li><a href="https://arxiv.org" target="_blank">arXiv</a></li>
        <li><a href="https://www.khanacademy.org" target="_blank">Khan Academy</a></li>
        <li><a href="https://github.com" target="_blank">GitHub</a></li>
      </ul>

      <section className="keyboard-docs">
        <h2>Keyboard Accessibility Documentation</h2>

        <p>
          This website supports keyboard navigation for all major controls,
          including the navigation bar, buttons, and external links.
        </p>

        <ul>
          <li>Use the Tab key to move between navigation links, buttons, and website links.</li>
          <li>Use Shift + Tab to move backward through controls.</li>
          <li>Press Enter to activate buttons and links.</li>
        </ul>

        <p>
          I focused on making keyboard navigation predictable, visible,
          and easy to use without requiring a mouse.
        </p>
      </section>
    </section>
  );
}

function App() {
  return (
    <main className="page">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/reading">Things to Read</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reading" element={<ReadingPage />} />
      </Routes>
    </main>
  );
}

export default App;