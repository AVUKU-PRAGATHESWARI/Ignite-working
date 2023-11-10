import React from 'react'
import { Link } from 'react-router-dom';
import './startpage.css';

function StartPage() {
  return (
    <div className='for-buttons'>
      <Link to='/login'>
        <button className='for-botton'>Login</button>
       </Link>
    </div>
  )
}

export default StartPage
