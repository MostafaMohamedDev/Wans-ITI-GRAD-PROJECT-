import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { constants } from '../../constants';
import './Post.css';

// current FQDN
const URL = constants.API_HOST;

// component
const Post = () => {
  // get post id from previous page /Blogging
  const { id } = useParams();

  // set post data from database
  const [postData, setPostData] = useState({});

  // fetch data
  useEffect(() => {
    const request = async () => {
      const response = await fetch(URL + '/api/blog/' + id);
      return await response.json();
    };
    const data = request().then((res) => {
      setPostData(res.data);
    });
  }, []);

  // render return
  return (
    <div className="post-container">
      <hr />
      <div>
        <h1 className="post-title">{postData.title}</h1>
        <img className="post-image" src={URL + '/' + postData.image} alt="blog-image" />
        <p className="post-author">Author: {postData.author}</p>
        <p className="post-time">{postData.time}</p>
      </div>
      <hr />
      <div>
        <div className="post-article" dangerouslySetInnerHTML={{ __html: postData.article }} />
      </div>
    </div>
  );
};

export default Post;
