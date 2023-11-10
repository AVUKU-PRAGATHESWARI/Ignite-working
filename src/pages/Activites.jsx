import React from 'react';
import { ActivitesCard } from '../components/Card/Card';

const Activites = () => {
  return (
    <div className='Activity-main'>
      <div className="activites">
        Our Projects
      </div>
      <div className="Activity">
      <ActivitesCard/>
      <ActivitesCard/>
      <ActivitesCard/>
      </div>
      
    </div>
  )
}

export default Activites;