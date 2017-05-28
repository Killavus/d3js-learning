import React from 'react'
import { Link } from 'react-router-dom'
import './LinePlot/data'

const AppContainer = ({ children }) => (
  <div className='AppContainer-main'>
    <nav className='AppContainer-mainNav'>
      <ul>
        <li><Link to='ex1'>Example #1</Link></li>
        <li><Link to='ex2'>Example #2</Link></li>
      </ul>
    </nav>
    <div className='AppContainer-body'>
      {children}
    </div>
  </div>
)

export default AppContainer