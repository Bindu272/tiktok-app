import React, { useState } from 'react'
import { RightFooterProps } from '../types/videoTypes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, faBookmark, faCircle, faCircleCheck, faCommentDots, faHeart, faShare } from '@fortawesome/free-solid-svg-icons'
import '../styles/FooterRight.css'
const FooterRight: React.FC<RightFooterProps> = (props) => {
    const { likes, comments, saves, shares, profilePic } = props
    const [liked, setLiked] = useState<boolean>(false)
    const [saved, setSaved] = useState<boolean>(false)
    const [userAddIcon, setUserAddIcon] = useState<IconDefinition |null>(faCircle)

    const handleUserAddClick = () => {
        setUserAddIcon(faCircleCheck)
        setTimeout(() => {
            setUserAddIcon(null)
        }, 3000)
    }

    const parseLikesCount = (count: string | number) => {
        if (typeof count === 'string') {
            if (count.endsWith('k')) {
                return parseFloat(count) * 1000
            }
            return parseInt(count)
        }
        return count
    }
    const formatLikesCount = (count: number) => {
        if (count >= 10000) {
            return (count / 1000).toFixed(1) + 'k'
        }
        return count;
    }
    const handleLikeClick = () => {
        setLiked((prevLiked) =>!prevLiked)
    }
    return (
        <div>
            <div className='footer-right'>
                <div className='sidebar-icon'>
                    {profilePic ? (
                        <img src={profilePic} className='userprofile' alt='profile' style={{ width: '45px', height: '45px', color: '#616161' }} />
                    ) : null}
                    <FontAwesomeIcon icon={userAddIcon} className='useradd' style={{ width: '15px', height: '15px', color: '#FF0000' }} onClick={handleUserAddClick} />
                </div>
                <div className='sidebar-icon'>
                    <FontAwesomeIcon icon={faHeart} style={{ width: '35px', color: liked ? '#FF0000' : 'white' }} onClick={handleLikeClick} />
                    <p>{formatLikesCount(parseLikesCount(likes) + (liked ? 1 : 0))}</p>
                </div>
                <FontAwesomeIcon icon={faCommentDots} style={{ width: '35px', height: '35px', color: 'white' }}/>
                <p>{comments}</p>
                <div className='sidebar-icon'>
                    {saved ? (
                        <FontAwesomeIcon icon={faBookmark} style={{ width: '35px', height: '35px', color: '#ffc107' }} onClick={() => setSaved(false)} />
                    ) : (
                        <FontAwesomeIcon icon={faBookmark} style={{ width: '35px', height: '35px', color: 'white' }}
                            onClick={() => setSaved(true)} />
                    )}
                    <p>{saved ? saves +1:saves}</p>
                </div>
                <div className='sidebar-icon'>
                    <FontAwesomeIcon icon={faShare} style={{ width: '35px', height: '35px', color: 'white' }}/>
                    <p>{shares}</p>
                </div>
                <div className='sidebar-icon record'>
                    <img src='https://static.thenounproject.com/png/934821-200.png' alt='record icon'/>
                </div>
            </div>
        </div>
    )
}

export default FooterRight
