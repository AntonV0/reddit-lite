import '../components/Post.css';
// import sampleVideo from './sampleVideo.mp4';
import comments from '../utils/images/comments.png';
import scoreArrow from '../utils/images/scoreArrow.png';

export default function MockPost6() {
  return (
    <div class='fullPost'>
      <div class='postOrigin'>
        <img src={scoreArrow} class='arrowIcon' />
        <p class='postScore'>SCORE</p>
        <button class='postSubredditButton'>
          <p class='postSubreddit'>r/subredditName</p>
        </button>
        <p class='postUsername'>Posted by  
          <button class='usernameButton'>u/username</button>
        </p>
      </div>
      <h3 class='postText' id='postTitle'>Nulla id est sit ut quis culpa reprehenderit enim dolore ad labore nostrud. Minim quis laboris quis exercitation occaecat voluptate exercitation enim et labore eiusmod deserunt.</h3>
      <p class='postText'></p>
      {/* <button class='readMoreButton'>Read more</button> */}
      {/* <img src={sampleImage4} class='postImage' alt='postAlt' /> */}
      {/* <video src={sampleVideo} class='postVideo' controls alt='postAlt' /> */}
      <button class='commentsButton'>
        <img src={comments} class='commentsIcon' />
        <span class='commentsText'>## Comments</span>
      </button>
      <button class='redditButton'>View on Reddit</button>
    </div>
  );
}