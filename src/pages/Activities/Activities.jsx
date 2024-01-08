// Replace your existing Activities.js with this

import React from 'react';
import './Activities.css';

const Activities = () => {
  const activityData = [
    {
      title: 'Activity 1',
      description: 'Description for Activity 1. This is a sample description.',
      image: 'url-to-image-1.jpg',
    },
    {
      title: 'Activity 2',
      description: 'Description for Activity 2. This is another sample description.',
      image: 'url-to-image-2.jpg',
    },
    // Add more activities as needed
  ];

  return (
    <div>
      {activityData.map((activity, index) => (
        <div key={index} className="activity-card">
          <img src={activity.image} alt={`Activity ${index + 1}`} className="activity-image" />
          <div className="activity-content">
            <div className="activity-title">{activity.title}</div>
            <div className="activity-description">{activity.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activities;
