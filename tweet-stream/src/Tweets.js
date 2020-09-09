import React from 'react';
import { connect } from 'react-redux'

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

const mapStateToProps = ({ tweets }) => ({ tweets });

export default connect(mapStateToProps)(Tweets);
