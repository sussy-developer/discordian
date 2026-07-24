import React from 'react';
import DownloadButton from './DownloadButton';
import BrowserButton from './BrowserButton';
import './StartSection.css';

export default function StartSection() {
  return (
    <div className="start-section-container">
      <DownloadButton />
      <BrowserButton />
    </div>
  );
}
