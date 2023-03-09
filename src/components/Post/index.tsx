import React from 'react';

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import VerifiedIcon from '@mui/icons-material/Verified';
import {Avatar} from '@mui/material';

import './styles.css';

const tempImg = require('../../assets/images/underwater.jpeg');
const tempAvatarSrc =  require('../../assets/images/underwater-modified.png');

interface PostProps {
    displayName: string;
    userName: string;
    verified: boolean;
    text: string;
    timestamp?: string;
    imageSrc?: (string[] | string);
    avatar?: boolean;
}

export default function Post({
    displayName,
    userName,
    verified,
    text,
    timestamp,
    imageSrc,
    avatar
}: PostProps) {
    return (
        <div className="post">
            <div className="post__avatar">
                {avatar && <Avatar src={tempAvatarSrc} alt="avatar"/> }
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__header__text">
                        <h3>
                            {displayName} {' '}
                            {verified && <span className='post__header__verified'>
                                <VerifiedIcon className='post__header__verified-icon' fontSize='small'/>
                            </span>}
                            <span className="post__header__user-name">@{userName} </span>
                        </h3>
                    </div>
                    <div className="post__header-description">
                        <p>Just posted a photo</p>
                    </div>
                </div>
                {/* {imageSrc && <img src={imageSrc} alt="Post"/>} */}
                <img className='post__body__image' src={tempImg} alt="Post"/>
                <div className="post__body__footer">
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderIcon fontSize="small"/>
                    <PublishIcon fontSize="small"/>
                </div>
            </div>
        </div>
    );
}