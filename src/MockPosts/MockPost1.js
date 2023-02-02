import '../components/Post.css';
import sampleImage1 from './sampleImage1.png';
import comments from '../utils/images/comments.png';
import scoreArrow from '../utils/images/scoreArrow.png';

export default function MockPost1() {
  return (
    <div class='fullPost'>
      <div class='postOrigin'>
        <img src={scoreArrow} class='arrowIcon' />
        <p class='postScore' title='Reddit score'>SCORE</p>
        <button class='postSubredditButton'>
          <p class='postSubreddit' title='Visit subreddit'>
            r/<span class='subredditName'>subredditName</span>
          </p>
        </button>
        <p class='postUsername'>Posted by  
          <button class='usernameButton' title='View profile'>u/username</button>
        </p>
      </div>
      <h3 class='postText' id='postTitle'>Ut sit esse sit consequat. Excepteur qui culpa laborum veniam quis. Irure eiusmod labore ad nulla proident sint anim quis ea sunt. Consectetur commodo Lorem in magna non amet. Ullamco sunt laborum sint non aliqua dolore. Aliquip eu est commodo sit cillum ipsum nulla. Proident cupidatat consectetur ipsum pariatur. Excepteur cupidatat duis velit enim est irure laborum anim quis magna dolore nostrud veniam. Consequat do aliquip laborum deserunt in id ipsum officia laborum elit aliquip pariatur. Aute id aliqua ipsum nostrud cillum culpa laborum anim excepteur eu aute tempor duis. Excepteur anim enim labore amet reprehenderit est non labore ad.</h3>
      <p class='postText'> Ipsum pariatur labore consectetur ut non in eu consequat eiusmod laboris incididunt. Sunt enim cupidatat anim anim velit do fugiat minim voluptate id. Et Lorem laboris do laboris consectetur. Cillum id et aliqua ullamco do reprehenderit dolore eu anim. Nostrud nostrud nisi ipsum occaecat voluptate ipsum quis. Amet irure eiusmod in ex. Tempor occaecat ipsum nostrud velit sunt in consequat commodo deserunt et fugiat elit commodo veniam.</p>
      {/* <button class='readMoreButton'>Read more</button> */}
      <img src={sampleImage1} class='postImage' /* alt='postAlt' */ />
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