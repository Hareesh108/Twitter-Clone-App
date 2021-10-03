import React from 'react';
import "./Feed.css";
import TweetBox from './TweetBox';
import Post from "./Post";

function Feed() {
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            

            {/* TweetBox */}
            <TweetBox />

            {/* Posts */}

            <Post 
            displayName="Hareesh Bhittam"
            username='hareesh_bhittam'
            verified={true}
            text=" “Look deep into nature !"
            
            avatar="https://media-exp1.licdn.com/dms/image/C4E03AQGmWhv5o-al2w/profile-displayphoto-shrink_400_400/0/1632646278474?e=1638403200&v=beta&t=J0SKzEfi5g4o6GD-C8QXDLTJAKuk_6pI0oqQZdRvRyk"
            image="https://tse2.mm.bing.net/th?id=OIP._h7s27M_cYLoJ7SzE7XRZQHaEK&pid=Api&P=0&w=278&h=157"
             />
            
            <Post 
            displayName="Hareesh Bhittam"
            username='hareesh_bhittam'
            verified={true}
            text="It is Awesome !"
            avatar="https://media-exp1.licdn.com/dms/image/C4E03AQGmWhv5o-al2w/profile-displayphoto-shrink_400_400/0/1632646278474?e=1638403200&v=beta&t=J0SKzEfi5g4o6GD-C8QXDLTJAKuk_6pI0oqQZdRvRyk"
            image="https://tse2.mm.bing.net/th?id=OIP.4cYjNkGuwXfSE9EAWhGZFgHaEK&pid=Api&P=0&w=307&h=174"
             />

            <Post 
            displayName="Hareesh Bhittam"
            username='hareesh_bhittam'
            verified={true}
            text="“Adopt the pace of nature: her secret is patience.”"
            avatar="https://media-exp1.licdn.com/dms/image/C4E03AQGmWhv5o-al2w/profile-displayphoto-shrink_400_400/0/1632646278474?e=1638403200&v=beta&t=J0SKzEfi5g4o6GD-C8QXDLTJAKuk_6pI0oqQZdRvRyk"
            image="https://tse3.mm.bing.net/th?id=OIP.r_M8trpEUbkUA93s4pTwiwHaEK&pid=Api&P=0&w=307&h=173"
             />

            <Post 
            displayName="Hareesh Bhittam"
            username='hareesh_bhittam'
            verified={true}
            text="A human being is a part of the whole called by us universe"
            avatar="https://media-exp1.licdn.com/dms/image/C4E03AQGmWhv5o-al2w/profile-displayphoto-shrink_400_400/0/1632646278474?e=1638403200&v=beta&t=J0SKzEfi5g4o6GD-C8QXDLTJAKuk_6pI0oqQZdRvRyk"
            image="https://tse2.mm.bing.net/th?id=OIP.3R3_z2zCLOG4yGyzcxeD8wHaEo&pid=Api&P=0&w=276&h=173"
             />

            <Post 
            displayName="Hareesh Bhittam"
            username='hareesh_bhittam'
            verified={true}
            text="Nature's first green is gold !"
            avatar="https://media-exp1.licdn.com/dms/image/C4E03AQGmWhv5o-al2w/profile-displayphoto-shrink_400_400/0/1632646278474?e=1638403200&v=beta&t=J0SKzEfi5g4o6GD-C8QXDLTJAKuk_6pI0oqQZdRvRyk"
            image="https://tse3.mm.bing.net/th?id=OIP.RnyJ_nSaSOPLdSwLa2yUQAHaEo&pid=Api&P=0&w=250&h=157"
             />
           
        </div>
    );
}

export default Feed;
