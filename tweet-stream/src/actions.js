export const fetchTweets = () => {
  return (dispatch) => {
    fetch('http://tweet-stream.glitch.me/api/tweets')
      .then(response => response.json())
      .then(response => console.log(response, dispatch));
  }
};