import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getpost } from "../utils/crud";
import {
  Container,
  CommentBody,
  CommentCard,
  CommentContainer,
  CommentEmail,
  CommentName,
  PostBody,
  PostCard,
  PostContainer,
  PostTitle,
} from "./styles/postStyle";
const Post = () => {
  const [post, setPost] = useState({});
  const params = useParams();
  
  useEffect(() => {
    getpost(params,setPost);
  }, [params]);

  return (
    <Container>
      <PostContainer>
        <PostCard>
          <PostTitle>{post.title}</PostTitle>
          <PostBody>{post.body}</PostBody>
        </PostCard>
      </PostContainer>
      <CommentContainer>
        {post.comments &&
          post.comments.map((comment, ind) => {
            return (
              <CommentCard key={ind}>
                <CommentName>{comment.name}</CommentName>
                <CommentEmail>{comment.email}</CommentEmail>
                <CommentBody>{comment.body}</CommentBody>
              </CommentCard>
            );
          })}
      </CommentContainer>
    </Container>
  );
};

export default Post;
