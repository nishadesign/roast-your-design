import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Trash2, ZoomIn, X } from 'lucide-react';
import './DesignCard.css';

const DesignCard = ({ design, onDelete }) => {
  const [showPreview, setShowPreview] = useState(false);

  // Handle escape key and prevent body scroll when preview is open
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setShowPreview(false);
      }
    };

    if (showPreview) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showPreview]);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this design?')) {
      onDelete(design.id);
    }
  };

  return (
    <>
      <div className="design-card">
        <div className="design-image-container">
          <img 
            src={design.image} 
            alt={design.name} 
            className="design-image"
          />
          <div className="design-overlay">
            <button 
              className="zoom-btn"
              onClick={() => setShowPreview(true)}
              title="View full size"
            >
              <ZoomIn size={20} />
            </button>
            <button 
              className="delete-btn"
              onClick={handleDelete}
              title="Delete design"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>
        
        <div className="design-content">
          <div className="design-header">
            <h3 className="design-name">{design.name}</h3>
            <span className="upload-date">{design.uploadDate}</span>
          </div>
          
          <div className="roast-section">
            <h4 className="roast-title">{design.roastTitle}</h4>
            <p className="roast-text">{design.roast}</p>
          </div>
        </div>
      </div>

      {/* Image Preview Modal */}
      {showPreview && createPortal(
        <div className="preview-modal" onClick={() => setShowPreview(false)}>
          <div className="preview-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="preview-close"
              onClick={() => setShowPreview(false)}
              title="Close preview"
            >
              <X size={24} />
            </button>
            <img 
              src={design.image} 
              alt={design.name} 
              className="preview-image"
            />
            <div className="preview-info">
              <h3>{design.name}</h3>
              <p>Uploaded on {design.uploadDate}</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default DesignCard;
