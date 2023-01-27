import '../components/Post.css';
import sampleImage3 from './sampleImage3.png';
import comments from '../utils/images/comments.png';
import scoreArrow from '../utils/images/scoreArrow.png';

export default function MockPost3() {
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
      <h3 class='postText' id='postTitle'>Adipisicing sint magna ullamco proident eiusmod labore fugiat.</h3>
      <p class='postText'></p>
      {/* <button class='readMoreButton'>Read more</button> */}
      <img src={sampleImage3} class='postImage' /* alt='postAlt' */ />
      <button class='commentsButton'>
        <img src={comments} class='commentsIcon' />
        <span class='commentsText'>## Comments</span>
      </button>
      <button class='redditButton'>View on Reddit</button>
    </div>
  );
}