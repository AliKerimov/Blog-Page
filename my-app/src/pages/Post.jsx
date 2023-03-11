import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
const Card = styled.div`
  border: 1px solid black;
  padding: 5px;
  height:250px;
  cursor: pointer;
`;
const Post = () => {
  const [post, setPost] = useState({});
  const params = useParams();
  async function getpost() {
    try {
      const response = await axios.get(
        `https://blog-api-t6u0.onrender.com/posts/${params?.id}?_embed=comments`
      );
      const data = response.data;
      setPost({ ...data });
      console.log(data);
    } catch (error) {
      // setPost({})
      return;
    }
  }
  useEffect(() => {
    getpost();
  }, []);

  return (
    <div>
      {post !== {} ? <div>
        <p>{post.title}</p>
        <p>{post.body}</p>
        {post.comments && post?.comments.map((comment, ind) => {
          console.log(comment);
            return (
              <Card key={ind}>
                <p>{comment.name}</p>  
                <p>{comment.email}</p>  
                <p>{comment.body}</p>  
              </Card>
            );
          })}
      </div> : <h1>Sorry there is a some issue</h1>}
    </div>
  );
};

export default Post;
