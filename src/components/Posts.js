import React, { useState, useEffect } from 'react';
import './Posts.css';
import Post from './Post.js';

export default function Posts() {

  const [posts, setPosts] = useState([]);
  // const [subreddit, setSubreddit] = useState('all');
  // const [time, setTime] = useState('?t=day');
  // const [limit, setLimit] = useState('?limit=25');

  useEffect(() => {
    // Fetches Reddit JSON data of top posts from all subreddits
    fetch('https://www.reddit.com/r/all/.json').then(response => {
      // Checks if request has succeeded (HTTP 200 OK status)
      if(response.status !== 200) {
        console.log('Error: Response status is not 200.');
        return;
      }
      
      response.json().then(data => {
        if (data !== null) {
          console.log(data); // Displays all post data when inspecting the browser console (25 posts)
          setPosts(data.data.children); // Sets 'Posts' data equal to the 'children' array
        }
      })
    })
    // Currently the post data updates one time on load, remove empty array to update constantly
  }, []/*, [subreddit]*/);

  return (
    <div>
      <div className='postsContainer'>
        <h2>Top Reddit Posts&nbsp;
          <span className='postTime'>Today</span>&nbsp;/&nbsp;
          <span className='postTime'>This Week</span>&nbsp;/&nbsp;
          <span className='postTime'>This Month</span>&nbsp;/&nbsp;
          <span className='postTime'>This Year</span>&nbsp;/&nbsp;
          <span className='postTime'>All Time</span>
        </h2>
        <div className='posts'>
          {/* Creates new array populated with the relevant JSON data */}
          {(posts !== null) ? posts.map((post) => 
            // Renders 25 instances of the <Post /> component
            <Post 
              // key={value} pairs for relevant JSON data
              key={post.data.id} 
              score={post.data.score}
              subreddit={post.data.subreddit}
              username={post.data.author}
              title={post.data.title}
              // subtitle={post.data.?} ???
              media={post.data.media}
              url={post.data.url}
              isVideo={post.data.is_video}
              commentsNum={post.data.num_comments}
              over18={post.data.over_18}
              secureMedia={post.data.secure_media}
              permalink={post.data.permalink}
              postHint={post.data.post_hint}
              thumbnail={post.data.thumbnail}
            />
          // Dependency array returns empty string if (posts === null)
          ) : ''}

         
        </div>
      </div>
      <div className='loadMoreButtonContainer'>
        <button className='loadMoreButton'>Load More Posts</button>
      </div>
    </div>
  );
}

