import { faSearch, faTv } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {TopNavbarWrapperProps} from '../types/videoTypes'
const TopNavbar :React.FC<TopNavbarWrapperProps>= ({className}) => {
  return (
 
      <div className={className}>
        <FontAwesomeIcon icon={faTv} className='icon'/>
        <h2>Following | <span>For You</span></h2>
        <FontAwesomeIcon icon={faSearch} className='icon'/>
      </div>
  
  )
}

export default TopNavbar
