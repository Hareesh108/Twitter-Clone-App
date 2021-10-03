import React from 'react';
import "./widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";
  import SearchIcon from '@mui/icons-material/Search';

  function Widgets() {
    return (
      <div className="widgets">
        <div className="widgets__input">
          <SearchIcon className="widgets__searchIcon" />
          <input placeholder="Search Twitter" type="text" />
        </div>
  
        <div className="widgets__widgetContainer">
          <h2>What's happening</h2>
  
          <TwitterTweetEmbed tweetId={"1428982668608217089"} />
  
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="hareesh_bhittam"
            options={{ height: 400 }}
          />
  
          <TwitterShareButton
            url={"https://twitter.com/hareesh_bhittam"}
            options={{ text: "#reactjs is awesome", via: "Hareesh Bhittam" }}
          />
        </div>
      </div>
    );
  }

export default Widgets;
