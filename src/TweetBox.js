import React from 'react';
import "./TweetBox.css";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';



function TweetBox() {
    return (
    <div className="tweetBox">
        <form>
            <div className="tweetBox__input">
            <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQGmWhv5o-al2w/profile-displayphoto-shrink_400_400/0/1632646278474?e=1638403200&v=beta&t=J0SKzEfi5g4o6GD-C8QXDLTJAKuk_6pI0oqQZdRvRyk" alt=""/>
            <input placeholder="What is happening?" type="text"/>

            </div>
            <input 
              className="tweetBox__imageInput"
              placeholder="Enter image URL"
              type="text"
            />
            <Button className="tweetBox__tweetButton">Tweet</Button>
            
        </form>
    </div>
    );

}

export default TweetBox;
