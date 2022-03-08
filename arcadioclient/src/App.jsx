import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, ArcadioMain, ArcadioServices, ArcadioNFT, ArcadioARDO, ArcadioGamefi, Footer } from './components';

const App = () => {
  return (
    <div className="gradient-bg-welcome">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ArcadioMain />} />
          <Route path="/ArcadioNFT" element={<ArcadioNFT />} exact />
          <Route path="/ArcadioARDO" element={<ArcadioARDO />} exact />
          <Route path="/ArcadioGamefi" element={<ArcadioGamefi />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;