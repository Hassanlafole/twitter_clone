import React from "react";
import "./App.css";
import Navigation from "./components/Navbar/Navigation";
import TweetList from "./components/Tweets/TweetList";
import Trending from "./components/Trending/Trending";
import { Container} from "react-bootstrap";

const mockTweets = [
  {
    id: 1,
    avatar:
      "https://avatars1.githubusercontent.com/u/53025782?s=400&u=f1ffa8eaccb8545222b7c642532161f11e74a03d&v=4",
    author: "John Doe",
    twitteruser: "@elton_lazzarin",
    posttime: "1h",
    content: "Just had a great day at the beach! ☀️🏖️ #summertime",
    retweet: true,
    commentscount: 29,
    retweetscount: 8,
    likecount: 37,
  },
  {
    id: 2,
    avatar:
      "https://avatars1.githubusercontent.com/u/53025782?s=400&u=f1ffa8eaccb8545222b7c642532161f11e74a03d&v=4",
    author: "Jane Doe",
    twitteruser: "@jane_doe",
    posttime: "2h",
    content: "I'm so excited to start my new job at Twitter! 🐦",
    retweet: false,
    commentscount: 2,
    retweetscount: 10,
    likecount: 4,
  },

  // add more mock tweets as needed
];

function App() {
  const [tweets] = React.useState(mockTweets);
  return (
    <Container className="container">
      <Navigation />
      <TweetList tweets={tweets} />
      <Trending />
    </Container>
  );
}

export default App;
