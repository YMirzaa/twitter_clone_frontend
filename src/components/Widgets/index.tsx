import React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed';

import './styles.css';

export default function Widgets(){
    return <div className="widgets">
        <div className="widgets__input">
            <SearchIcon className='widgets__search-icon' />
            <input placeholder="Search Twitter" type="text" />
        </div>

        <div className="widgets__widget-container">
            <h2>What's happening</h2>
            <TwitterTweetEmbed tweetId={"1633740666634137600"} />
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="pusholder"
                options={{height: 400}}
            />
            <TwitterShareButton
                url={"https://github.com/YMirzaa"}
                options={{text: "#this dude is amazing!!", via: "mirza"}}
            />
        </div>
    </div>;
}