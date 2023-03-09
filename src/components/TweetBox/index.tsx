import React from 'react';

import './styles.css';

import {Avatar, Button} from '@mui/material';

const avatarSrc =  require('../../assets/images/underwater-modified.png');

export default function TweetBox() {
    return (
        <div className="tweet-box">
        <form>
            <div className="tweet-box__input">
                <Avatar alt="Avatar" src={avatarSrc}/>
                <input placeholder="What's happening?" />
            </div>
            <input className="tweet-box__image-input" placeholder="Optional: Enter image URL" type="text"/>
            <Button className='tweet-box__tweet-button'>Tweet</Button>
        </form>
        </div>
    );
    }