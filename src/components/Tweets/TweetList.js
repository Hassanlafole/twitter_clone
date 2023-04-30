
import React from "react";
import TweetCard from "./TweetCard";

// add css here
import "./TweetList.css";

function Tweets(props) {

    const { tweets } = props;

  return (
    <div className="middle">
      {tweets.map(tweet => (
        <TweetCard key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
}

export default Tweets;
