import './Post.css';
import comments from '../utils/images/comments.png';
import scoreArrow from '../utils/images/scoreArrow.png';
import formatNumber from '../utils/constants/formatNumber';

export default function Post({
  score,
  subreddit,
  username,
  title,
  // subtitle
  // media
  mediaUrl,
  isVideo,
  commentsNum
}) {
  return (
    <article className='fullPost'>
      <div className='postOrigin'>
        <img src={scoreArrow} className='arrowIcon' />
        <p className='postScore' title='Reddit score'>{formatNumber(score)}</p>
        <button className='postSubredditButton' title='Visit subreddit'>
          <p className='postSubreddit' title='Visit subreddit'>
            r/<span className='subredditName'>{subreddit}</span>
          </p>
        </button>
        <p className='postUsername'>Posted by&nbsp;
          <button className='usernameButton' title='View profile'>u/<span className='username'>{username}</span></button>
        </p>
      </div>
      <h3 className='postText' id='postTitle'>{title}</h3>
      <p className='postText' id='postSubtitle'>{/*subtitle*/}</p>

      {/* <button className='readMoreButton'>Read more</button> */}

      
      {/* <img src={mediaUrl} className='postImage' alt='' /> */}
      <video src={mediaUrl + '/DASH_600_'} className='postVideo' controls muted alt='' />
      <div className='commentsSection'>
        <button className='commentsButton' title='View Comments'>
          <img src={comments} className='commentsIcon' />
          <span className='commentsText'>{formatNumber(commentsNum)} Comments</span>
        </button>
        <button className='redditButton'>View on Reddit</button>
      </div>
    </article>
  );
}