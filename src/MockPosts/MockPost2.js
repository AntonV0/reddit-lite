import '../components/Post.css';
import sampleImage2 from './sampleImage2.png';
import comments from '../utils/images/comments.png';
import scoreArrow from '../utils/images/scoreArrow.png';

export default function MockPost2() {
  return (
    <div class='fullPost'>
      <div class='postOrigin'>
        <img src={scoreArrow} class='arrowIcon' />
        <p class='postScore' title='Reddit score'>SCORE</p>
        <button class='postSubredditButton' title='Visit subreddit'>
          <p class='postSubreddit' title='Visit subreddit'>
            r/<span class='subredditName'>bigName21CharacterMax</span>
          </p>
        </button>
        <p class='postUsername'>Posted by  
          <button class='usernameButton' title='View profile'>u/bigUsername20CharMax</button>
        </p>
      </div>
      <h3 class='postText' id='postTitle'>Eu qui exercitation excepteur est sit ut non. Ipsum dolore occaecat laborum quis nostrud dolor non laborum quis aliquip consectetur. In sint labore laboris exercitation. Exercitation elit deserunt officia ullamco laborum non duis do sit sit officia pariatur proident. Sit anim irure ad ut. Enim aute officia quis exercitation sit commodo esse nulla culpa labore nostrud. Mollit laborum minim laboris excepteur ut irure in commodo eiusmod pariatur laboris velit.</h3>
      <p class='postText'></p>
      {/* <button class='readMoreButton'>Read more</button> */}
      <img src={sampleImage2} class='postImage' /* alt='postAlt' */ />
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