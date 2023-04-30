
import React, { useState} from "react";

import "./TweetCard.css";
import {
    Card,
    Button,
} from "react-bootstrap";

function TweetCard(props) {

    const { tweet } = props;

    const [likeCount, setLikeCount] = useState(tweet.likecount);
    const [retweetCount, setRetweetCount] = useState(tweet.retweetscount);

  return (
    <div className="tweet-card" key={tweet.id}>
       <Card.Body>
        <Card.Title>{tweet.author} <span className="time">{tweet.posttime} ago</span></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{tweet.twitteruser}</Card.Subtitle>
        <Card.Text>
            {tweet.content}
        </Card.Text>
        
        <Button className="button" variant="primary">Comments {tweet.commentscount}</Button>
        <Button className="button" variant="primary" onClick={() => setRetweetCount(retweetCount + 1)}>Retweets {retweetCount}</Button>
        <Button className="button" variant="primary" onClick={() => setLikeCount(likeCount + 1)}>Likes {likeCount}</Button>
        
      </Card.Body>
    </div>

  );
}

export default TweetCard;
