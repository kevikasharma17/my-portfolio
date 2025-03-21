import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import PhotographyPage from './pages/PhotographyPage';
import MarketingCampaignsPage from './pages/MarketingCampaignsPage';
import BrandContentPage from './pages/BrandContentPage';
import BrandVideosPage from './pages/BrandVideosPage';
import AcademicProjectsPage from './pages/AcademicProjectsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/photography" element={<PhotographyPage />} />
        <Route path="/marketing-campaigns" element={<MarketingCampaignsPage />} />
        <Route path="/brand-content" element={<BrandContentPage />} />
        <Route path="/brand-videos" element={<BrandVideosPage />} />
        <Route path="/academic-projects" element={<AcademicProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;