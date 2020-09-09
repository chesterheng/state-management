import React from 'react';

const FetchTweets = ({ fetchTweets }) => {
  return <button onClick={fetchTweets}>Fetch Tweets</button>;
};

export default FetchTweets;
