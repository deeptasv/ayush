import React from 'react';
import './StatusTracker.css'; // CSS for the visual layout

// Registration stages
const stages = [
  { key: 'initiated', label: 'Initiated' },
  { key: 'document_submitted', label: 'Document Submitted' },
  { key: 'document_verified', label: 'Document Verified' },
  { key: 'approved', label: 'Approved' },
  { key: 'complete', label: 'Complete' },
];

const StatusTracker = ({ currentStatus }) => {
  return (
    <div className="status-tracker">
      {stages.map((stage, index) => (
        <div
          key={stage.key}
          className={`stage ${stage.key === currentStatus ? 'current' : ''}`}
        >
          <span className="stage-label">{stage.label}</span>
          {index < stages.length - 1 && <span className="stage-separator">→</span>}
        </div>
      ))}
    </div>
  );
};

export default StatusTracker;