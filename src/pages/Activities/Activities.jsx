// Replace your existing Activities.js with this

import React from 'react';
import './Activities.css';
<<<<<<< HEAD
=======
import hack from '../../assets/hackathon.jpg';
import tresure from '../../assets/treasure.jpg';
import ideathon from '../../assets/ideathon.jpg';
>>>>>>> b7e63803b3f5bf5034e0938577845d0a89e90b16
import NavComponent from '../../components/NavBar/NavComponent';

const Activities = () => {
  const activityData = [
    {
      title: 'Hacathon',
      description: 'A hackathon ',
      image: hack,
    },
    {
      title: 'Treasure Hunt',
      description: 'Treasure hunt ',
      image: tresure,
    },
    {
      title:'Ideathon',
      description:'Ideathon ',
      image:ideathon
    }
    // Add more activities as needed
  ];

  return (
<<<<<<< HEAD
    <div>
      <NavComponent/>
=======
    <>
    <NavComponent/>
     <h1 className='for-heading-in-team'>Activities</h1>
     <div className='for-activities'>
     
>>>>>>> b7e63803b3f5bf5034e0938577845d0a89e90b16
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
    </>
  );
};

export default Activities;
