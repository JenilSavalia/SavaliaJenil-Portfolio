import './App.css'
import LandingPage from './Pages/LandingPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectSection from './Pages/Projects/ProjectSection';
import AboutMe from './Pages/About/AboutMe';
import ContactMe from './Pages/ContactMe/ContactMe';
import BlogLanding from './Pages/Blog/BlogLanding';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<ProjectSection />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/blog" element={<BlogLanding />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
