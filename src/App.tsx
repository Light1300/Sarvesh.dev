import React, { useState } from 'react';
import Navbar from './components/Navbar';
import RegistryHeader from './components/RegistryHeader';
import ReadmeTab from './components/ReadmeTab';
import ProjectsTab from './components/ProjectsTab';
import WritingTab from './components/WritingTab';
import ExperienceTab from './components/ExperienceTab';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';
import { Tab } from './types';

export default function App() {
  const { theme, toggle } = useTheme();
  const [activeTab, setActiveTab] = useState<Tab>('readme');

  return (
    <>
      {/* Subtle grid background */}
      <div className="grid-overlay" />

      <Navbar activeTab={activeTab} onTab={setActiveTab} theme={theme} onToggleTheme={toggle} />

      <RegistryHeader activeTab={activeTab} onTab={setActiveTab} />

      {/* Main 2-col layout */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '28px 24px 64px' }}>
        <div style={grid}>
          {/* Left content */}
          <div>
            {activeTab === 'readme' && <ReadmeTab />}
            {activeTab === 'projects' && <ProjectsTab />}
            {activeTab === 'writing' && <WritingTab />}
            {activeTab === 'experience' && <ExperienceTab />}
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>

      <Footer />
    </>
  );
}

const grid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 280px',
  gap: 32,
};
