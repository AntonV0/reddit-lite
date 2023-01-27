import './Posts.css';
// import Post from './Post.js';
import MockPost1 from '../MockPosts/MockPost1';
import MockPost2 from '../MockPosts/MockPost2';
import MockPost3 from '../MockPosts/MockPost3';
import MockPost4 from '../MockPosts/MockPost4';
import MockPost5 from '../MockPosts/MockPost5';
import MockPost6 from '../MockPosts/MockPost6';

export default function Posts() {
  return (
    <div>
      <div class='postsContainer'>
        <h2>TOP REDDIT POSTS TODAY</h2>
        <div class='posts'>
          <MockPost1 />
          <MockPost2 />
          <MockPost3 />
          <MockPost4 />
          <MockPost5 />
          <MockPost6 />
          <MockPost1 />
          <MockPost2 />
          <MockPost3 />
          <MockPost4 />
          <MockPost5 />
          <MockPost1 />
          <MockPost2 />
          <MockPost3 />
          <MockPost6 />
          <MockPost5 />
          <MockPost1 />
          <MockPost2 />
          <MockPost3 />
          <MockPost4 />
          <MockPost5 />
          <MockPost6 />
          <MockPost2 />
          <MockPost3 />
          <MockPost4 />
          <MockPost5 />
        </div>
      </div>
      <div class='loadMoreButtonContainer'>
        <button class='loadMoreButton'>Load More Posts</button>
      </div>
    </div>
  );
}

