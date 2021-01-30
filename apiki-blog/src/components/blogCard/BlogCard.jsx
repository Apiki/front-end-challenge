import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const BlogCard = (props) => {

  const { blog } = props;


  return (
    <div>
      <h2>blog - Card:</h2>
      <div>{blog.title.rendered}</div>
      <img src={`${blog.urlImg}`} alt={blog.title.rendered} width="300"></img>
    </div>
  )
}

export default BlogCard;
