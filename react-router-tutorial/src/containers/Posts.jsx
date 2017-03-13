import React from 'react';
import BigText from '../components/BigText.jsx';
import PostLinks from '../components/PostLinks.jsx';

const Posts = ({ children }) => (
  <div>
    <BigText>포스트</BigText>
    <PostLinks />
    {children}
  </div>
);

export default Posts;
