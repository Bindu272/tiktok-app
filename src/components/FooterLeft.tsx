import React from 'react'
import { LeftFooterProps } from '../types/videoTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import './FooterLeft.css'

const FooterLeft:React.FC<LeftFooterProps> = (props) => {
    const {username, description, song}=props;
  return (
    <div>
      <div className='footer-container'>
        <div className='footer-left'>
            <div className='text'>
                <h3>@{username}</h3>
                <p>{description}</p>
                <div className='ticker'>
                <FontAwesomeIcon icon={faMusic} style={{ width: '30px' }} />
                <div className="ticker-content">
                            <span>{song}</span>
                        </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FooterLeft
