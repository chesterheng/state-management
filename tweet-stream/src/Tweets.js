import React from 'react';

import Tweet from './Tweet';

const Tweets = ({ tweets = [] }) => {
  return (
    <section className="Tweets">
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </section>
  );
};

export default Tweets;
