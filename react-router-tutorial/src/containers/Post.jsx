import React from 'react';
import BigText from '../components/BigText.jsx';

const Post = ({ params }) => (
  <div>
    <BigText>{params.id}</BigText>
  </div>
);

export default Post;
