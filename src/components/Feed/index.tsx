import React from "react";

import {TweetBox, Post} from "../../components";

import './styles.css';

export default function Feed(){
    return <div className="feed">
        {/* {header} */}
        <div className="feed__header">
            <h2>Home</h2>
        </div>
        {/* {tweetbox} */}
        <TweetBox />
        {/* {post} */}
        <Post displayName="Mirza" userName="mirza" verified={true} text="This is a test post" avatar/> 
        {/* {post} */} 
        {/* {post} */} 
        {/* {post} */} 
        {/* {post} */} 
        {/* {post} */} 

        
    </div>;
}