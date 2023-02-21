import './Post.css';
import comments from '../utils/images/comments.png';
import scoreArrow from '../utils/images/scoreArrow.png';
import formatNumber from '../utils/constants/formatNumber';

export default function Post({
  // JSON Data fetched from Reddit (key-value pairs for these are in Posts.js return statement)
  // Post header data:
  score,
  subreddit,
  username,
  // Post text:
  title,
  // subtitle/paragraph text?
  // Images, videos, and links:
  media,
  url,
  over18,
  isVideo,
  secureMedia,
  postHint,
  thumbnail,
  // Post comments and permalink:
  commentsNum,
  permalink,
}) {
  // Reddit domain
  const domain = 'https://www.reddit.com';

  // Checks if media is SFW and has a video property
  let fallback_url;
  if (media !== null && media.hasOwnProperty('reddit_video') && !over18) {
    ({ fallback_url } = media.reddit_video);
  }

  return (
    <article className='fullPost'>
      <div className='postOrigin'>
        <img src={scoreArrow} className='arrowIcon' />
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
      <p className='postText' id='postSubtitle'>{/*subtitle*/}</p>

      {/* Display hosted video */}
      {fallback_url && postHint === 'hosted:video' && (
        // Reddit video and audio are separate mp4 files, so all audio in this project has been muted
        <video src={fallback_url} className='postVideo' alt='Post video' controls></video>
      )}

      {/* Display image */}
      {(url && postHint === 'image' && !over18) && (
        <img src={url} className='postImage' alt='Post image' />
      )}

      {/* Display link and thumbnail, hide rich video */}
      {((url && postHint === 'link' && !over18) || (url && postHint === 'rich:video' && !over18)) && (
        <div className='thumbnailContainer'>
          {/* Display non-default thumbnails */}
          {(thumbnail !== 'default') && (
            <a href={url} target='_blank' rel='noreferrer' className='thumbnailImage' title='Visit link'><img src={thumbnail} alt='Post thumbnail' /></a>
          )}
          {/* Display thumbnail link */}
          <a href={url} target='_blank' rel='noreferrer' className='thumbnailLink' title='Visit link'>{url}</a>
        </div>
      )}

      {/* NSFW text and button */}
      {over18 && <p className='nsfw'>NSFW</p>}
      
      {/* Comments and Reddit link */}
      <div className='commentsSection'>
        <button className='commentsButton' title='View Comments'>
          <img src={comments} className='commentsIcon' />
          <span className='commentsText'>{formatNumber(commentsNum)} Comments</span>
        </button>
        <a href={domain + permalink} target='_blank'>
          <button className='redditButton'>View on Reddit</button>
        </a>
      </div>
    </article>
  );
}