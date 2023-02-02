import '../components/Post.css';
import comments from '../utils/images/comments.png';
import scoreArrow from '../utils/images/scoreArrow.png';

export default function MockPost6() {
  return (
    <div class='fullPost'>
      <div class='postOrigin'>
        <img src={scoreArrow} class='arrowIcon' />
        <p class='postScore' title='Reddit score'>SCORE</p>
        <button class='postSubredditButton' title='Visit subreddit'>
          <p class='postSubreddit' title='Visit subreddit'>
            r/<span class='subredditName'>subredditName</span>
          </p>
        </button>
        <p class='postUsername'>Posted by  
          <button class='usernameButton' title='View profile'>u/username</button>
        </p>
      </div>
      <h3 class='postText' id='postTitle'>Nulla id est sit ut quis culpa reprehenderit enim dolore ad labore nostrud. Minim quis laboris quis exercitation occaecat voluptate exercitation enim et labore eiusmod deserunt.</h3>
      <p class='postText'></p>
      {/* <button class='readMoreButton'>Read more</button> */}
      {/* <img src={sampleImage4} class='postImage' alt='postAlt' /> */}
      {/* <video src={sampleVideo} class='postVideo' controls alt='postAlt' /> */}
      <div class='commentsSection'>
        <button class='commentsButton' title='View Comments'>
          <img src={comments} class='commentsIcon' />
          <span class='commentsText'>## Comments</span>
        </button>
        <button class='redditButton'>View on Reddit</button>
      </div>
    </div>
  );
}