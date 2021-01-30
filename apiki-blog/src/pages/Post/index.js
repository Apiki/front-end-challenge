import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Post = (props) => {
console.log("slug", props.match.params.id);
  return (
    <div>
      <h1>
        This Blog page
      </h1>
          </div>
  )
}

export default Post;
