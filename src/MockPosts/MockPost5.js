import '../components/Post.css';
import sampleVideo from './sampleVideo.mp4';
import comments from '../utils/images/comments.png';
import scoreArrow from '../utils/images/scoreArrow.png';

export default function MockPost5() {
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
      <h3 class='postText' id='postTitle'>Sint ipsum ex et duis. Sunt ad qui esse non amet veniam ea aute ea aliqua nisi. In exercitation consequat irure cillum officia mollit duis dolor enim in eiusmod. Nostrud enim aliqua ullamco tempor commodo fugiat ipsum veniam quis non quis deserunt.</h3>
      <p class='postText'></p>
      {/* <button class='readMoreButton'>Read more</button> */}
      {/* <img src={sampleImage4} class='postImage' alt='postAlt' /> */}
      <video src={sampleVideo} class='postVideo' controls /* alt='postAlt' */ />
      <button class='commentsButton'>
        <img src={comments} class='commentsIcon' />
        <span class='commentsText'>## Comments</span>
      </button>
      <button class='redditButton'>View on Reddit</button>
    </div>
  );
}