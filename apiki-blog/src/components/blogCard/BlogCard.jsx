import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const BlogCard = (props) => {

  const { blog } = props;

  return (
    <div>
      <h2>blog - Card:</h2>
      {/* <h1>{blog._embedded['wp:featuredmedia']['0'].source_url}</h1> */}
      <div>{blog.title.rendered}</div>
      <img src={`${blog._embedded['wp:featuredmedia']['0'].source_url}`} alt={blog.title.rendered} width="300"></img>
    </div>
  )
}

export default BlogCard;
