import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';
import './UploadZone.css';

const UploadZone = ({ onFileUpload }) => {
  const onDrop = useCallback((acceptedFiles) => {
    const imageFiles = acceptedFiles.filter(file => 
      file.type.startsWith('image/')
    );
    
    if (imageFiles.length > 0) {
      onFileUpload(imageFiles);
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.webp']
    },
    multiple: true
  });

  return (
    <div className="upload-section">
      <div 
        {...getRootProps()} 
        className={`upload-zone ${isDragActive ? 'drag-active' : ''}`}
      >
        <input {...getInputProps()} />
        <div className="upload-content">
          <Upload size={48} className="upload-icon" />
          <h3>Drop your designs here</h3>
          <p>or click to browse files</p>
          <span className="upload-hint">
            Supports PNG, JPG, GIF, WebP
          </span>
        </div>
      </div>
    </div>
  );
};

export default UploadZone;
