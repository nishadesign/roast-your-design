import React, { useState, useEffect } from 'react';
import { Trash2 } from 'lucide-react';
import './App.css';
import UploadZone from './components/UploadZone';
import DesignCard from './components/DesignCard';
import { generateRoast, generateRoastTitle } from './roastGenerator';

function App() {
  const [designs, setDesigns] = useState([]);

  // Load designs from localStorage on component mount
  useEffect(() => {
    const savedDesigns = localStorage.getItem('roastedDesigns');
    if (savedDesigns) {
      setDesigns(JSON.parse(savedDesigns));
    }
  }, []);

  // Save designs to localStorage whenever designs change
  useEffect(() => {
    localStorage.setItem('roastedDesigns', JSON.stringify(designs));
  }, [designs]);

  const handleFileUpload = (files) => {
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newDesign = {
          id: Date.now() + Math.random(),
          name: file.name,
          image: e.target.result,
          roast: generateRoast(),
          roastTitle: generateRoastTitle(),
          uploadDate: new Date().toLocaleDateString()
        };
        setDesigns(prev => [newDesign, ...prev]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleDeleteDesign = (id) => {
    setDesigns(prev => prev.filter(design => design.id !== id));
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all designs? This cannot be undone.')) {
      setDesigns([]);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Get Roasted</h1>
        <p className="app-subtitle">
          Upload your designs and get hilariously honest (but constructive) feedback. We roast because we care!
        </p>
      </header>

      <main className="app-main">
        <UploadZone onFileUpload={handleFileUpload} />
        
        {designs.length > 0 && (
          <div className="stats-section">
            <div className="stats">
              <span className="stat-item">
                <strong>{designs.length}</strong> design{designs.length !== 1 ? 's' : ''} roasted
              </span>
            </div>
            <button 
              onClick={handleClearAll}
              className="clear-all-btn"
              title="Clear all designs"
            >
              <Trash2 size={16} />
              Clear All
            </button>
          </div>
        )}

        <div className="designs-gallery">
          {designs.length === 0 ? (
            <div className="empty-state">
              <p>No designs roasted yet. Upload your first design to get started!</p>
            </div>
          ) : (
            designs.map(design => (
              <DesignCard 
                key={design.id} 
                design={design} 
                onDelete={handleDeleteDesign}
              />
            ))
          )}
        </div>
      </main>

      <footer className="app-footer">
        <p>Made with love (and a bit of sass) for the UX team</p>
      </footer>
    </div>
  );
}

export default App;
