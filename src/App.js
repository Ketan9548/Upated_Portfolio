// import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact';
import Projects from './components/Projects';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects />} />
            <Route path="portfolio" element={<Portfolio />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
