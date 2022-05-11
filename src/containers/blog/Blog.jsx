import React from 'react';
import Article from '../../components/article/Article';
import { srishti, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={srishti} style={{ height: 88, width: 58 }} text="Srishti Pawar" />
        <Article imgUrl={blog03} text="Shrey Sinha" />
        <Article imgUrl={blog04} text="Umang Goel" />
        <Article imgUrl={blog05} text="Sarvesh Kumar" />
      </div>
    </div>
  </div>
);

export default Blog;
