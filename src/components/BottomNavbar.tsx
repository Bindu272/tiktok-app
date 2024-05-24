import { fa7, faHouse, faInbox, faPlus, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { TopNavbarWrapperProps } from '../types/videoTypes'

const BottomNavbar: React.FC<TopNavbarWrapperProps> = ({className}) => {
  return (
   
      <div className={className}>
        <div className='nav-item'>
            <FontAwesomeIcon icon={faHouse} className='icon active'/>
            <span className='item-name active'>Home</span>
        </div>
        <div className='nav-item'>
            <FontAwesomeIcon icon={faUserFriends} className='icon'/>
            <span className='item-name'>Friends</span>
        </div>
        <div className='nav-item'>
            <FontAwesomeIcon icon={faPlus} className='icon plus'/>
            <span className='item-name'>Create</span>
        </div>
        <div className='nav-item'>
            <FontAwesomeIcon icon={fa7} className='notification'/>
            <FontAwesomeIcon icon={faInbox} className='icon'/>
            <span className='item-name'>Inbox</span>
        </div>
        <div className='nav-item'>
            <FontAwesomeIcon icon={faUser} className='icon'/>
            <span className='item-name'>Profile</span>
        </div>
      </div>
  
  )
}

export default BottomNavbar
