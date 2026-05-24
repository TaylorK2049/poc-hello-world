import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import profile from './assets/profile.png';
import droneAerial from './assets/drone_aerial.png';
import rp5 from './assets/rp5.png';
import testLabel1 from './assets/test_label1.jpg';
import testLabel2 from './assets/test_label2.jpg';
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
    if (!ascending) sorted.reverse();
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
  );
}

function ReadingPage() {
  return (
    <section className="card">
      <h1>Things to Read</h1>

      <p>These are websites and topics I find interesting.</p>

      <ul className="reading-list">
        <li><a href="https://react.dev" target="_blank" rel="noreferrer">React Documentation</a></li>
        <li><a href="https://openai.com" target="_blank" rel="noreferrer">OpenAI</a></li>
        <li><a href="https://developer.mozilla.org" target="_blank" rel="noreferrer">MDN Web Docs</a></li>
        <li><a href="https://owasp.org" target="_blank" rel="noreferrer">OWASP</a></li>
        <li><a href="https://www.w3.org/WAI/" target="_blank" rel="noreferrer">W3C Accessibility</a></li>
        <li><a href="https://www.cisa.gov" target="_blank" rel="noreferrer">CISA</a></li>
        <li><a href="https://www.nasa.gov" target="_blank" rel="noreferrer">NASA</a></li>
        <li><a href="https://arxiv.org" target="_blank" rel="noreferrer">arXiv</a></li>
        <li><a href="https://www.khanacademy.org" target="_blank" rel="noreferrer">Khan Academy</a></li>
        <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
      </ul>

      <section className="keyboard-docs">
        <h2>Keyboard Accessibility Documentation</h2>
        <p>
          This website supports keyboard navigation for the navigation bar,
          buttons, and external links.
        </p>

        <ul>
          <li>Use Tab to move forward through controls.</li>
          <li>Use Shift + Tab to move backward.</li>
          <li>Use Enter to activate links and buttons.</li>
        </ul>

        <p>
          I focused on predictable navigation, visible focus indicators,
          and keyboard-only usability.
        </p>
      </section>
    </section>
  );
}

function AttentionPage() {
  return (
    <section className="attention-page">

      <section className="attention-hero">
        <div>
          <p className="eyebrow">Overview</p>

          <h1>
            Evaluating ML Models for Wildfire Detection on Drones
          </h1>

          <p>
            Early wildfire detection is critical for reducing damage and
            improving emergency response. This project evaluates lightweight
            computer vision models for real-time fire and smoke detection
            on drone-class embedded hardware.
          </p>
        </div>

        <img
          src={droneAerial}
          alt="Drone monitoring wildfire area"
        />
      </section>

      <section className="attention-highlight">
        <p className="eyebrow">Key Findings</p>

        <h2>Key Result</h2>

        <p>
          YOLOv8 INT8 achieved the best balance of detection accuracy,
          inference speed, and model size on the Raspberry Pi 5,
          making it the strongest deployment option for edge-based
          wildfire monitoring.
        </p>
      </section>

      <section className="image-grid">

        <article>
          <img
            src={testLabel1}
            alt="Dataset integration and object labeling"
          />

          <h3>Dataset Integration</h3>

          <p>
            Combining multiple wildfire datasets introduced challenges
            such as inconsistent labels and class imbalance.
          </p>
        </article>

        <article>
          <img
            src={testLabel2}
            alt="Fire and smoke detection examples"
          />

          <h3>Detection Challenges</h3>

          <p>
            Detecting smoke and fire accurately becomes more difficult
            when additional object classes are introduced.
          </p>
        </article>

        <article>
          <img
            src={rp5}
            alt="Raspberry Pi 5 edge deployment"
          />

          <h3>Edge Deployment</h3>

          <p>
            Lightweight models were evaluated on Raspberry Pi 5 hardware
            to measure real-time inference performance and deployment feasibility.
          </p>
        </article>

      </section>

      <section className="design-note">
        <h2>How the page guides attention</h2>

        <p>
          The page is designed to guide attention first to the large
          title and drone image at the top through size and placement.
          The highlighted results section attracts attention second
          using contrast and whitespace. The grouped image cards
          create the third attention area using proximity, similarity,
          and left-to-right reading order.
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
        <Link to="/attention">Attention Design</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reading" element={<ReadingPage />} />
        <Route path="/attention" element={<AttentionPage />} />
      </Routes>
    </main>
  );
}

export default App;