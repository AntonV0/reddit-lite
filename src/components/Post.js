import './Post.css';
import comments from '../utils/images/comments.png';
import scoreArrow from '../utils/images/scoreArrow.png';
import formatNumber from '../utils/constants/formatNumber';

export default function Post({
  score,
  subreddit,
  username,
  title,
  media,
  url,
  over18,
  isVideo,
  secureMedia,
  postHint,
  thumbnail,
  commentsNum,
  permalink,
  selftext
}) {
  const domain = 'https://www.reddit.com';
  let mediaContent;

  if (over18) {
    mediaContent = <p className='nsfw'>NSFW</p>;
  } else if (postHint === 'hosted:video' && media && media.reddit_video) {
    mediaContent = <video src={media.reddit_video.fallback_url} className='postVideo' controls />;
  } else if (postHint === 'image') {
    mediaContent = <img src={url} className='postImage' alt='Post image' />;
  }

  return (
    <article className='fullPost'>
      <div className='postOrigin'>
        <img src={scoreArrow} className='arrowIcon' alt='Score Arrow' />
        <p className='postScore' title='Reddit score'>{formatNumber(score)}</p>
        <button className='postSubredditButton'>
          <p className='postSubreddit'>
            r/<span className='subredditName' title='Visit subreddit'>{subreddit}</span>
          </p>
        </button>
        <p className='postUsername'>
          <button className='usernameButton' title='View profile'>u/<span className='username'>{username}</span></button>
        </p>
      </div>
      <h3 className='postText' id='postTitle'>{title}</h3>
      <p className='postText' id='postSubtitle'>{selftext}</p>

      <p className='postText' id='postSubtitle'>{/*subtitle*/}</p>

      {/* Media Content: Image/Video/NSFW */}
      {mediaContent}

      {/* Display link and thumbnail, hide rich video */}
      {(postHint === 'link' || postHint === 'rich:video') && !over18 && (
        <div className='thumbnailContainer'>
          {thumbnail !== 'default' && (
            <a href={url} target='_blank' rel='noreferrer' className='thumbnailImage' title='Visit link'>
              <img src={thumbnail} alt='Post thumbnail' />
            </a>
          )}
          <a href={url} target='_blank' rel='noreferrer' className='thumbnailLink' title='Visit link'>{url}</a>
        </div>
      )}

      <div className='commentsSection'>
        <button className='commentsButton' title='View Comments'>
          <img src={comments} className='commentsIcon' alt='Comments' />
          <span className='commentsText'>{formatNumber(commentsNum)} Comments</span>
        </button>
        <a href={domain + permalink} target='_blank' rel='noreferrer'>
          <button className='redditButton'>View on Reddit</button>
        </a>
      </div>
    </article>
  );
}
