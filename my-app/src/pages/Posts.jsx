import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/blogSlice";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Title = styled.h1`
  font-size: 1em;
  text-align: center;
  color: palevioletred;
`;
const Card = styled.div`
  border: 1px solid black;
  padding: 5px;
  height: 250px;
  cursor: pointer;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2%;
  margin: 5% 5%;
`;
const Posts = () => {
  const dispatch = useDispatch();
  let posts = useSelector((state) => state.fetch);

  useEffect(() => {
    dispatch(fetchProducts("/posts"));
  }, [posts.Loading]);

  return (
    <div>
      {!posts.Loading ? (
        <Container>
          {posts?.products.map((post, ind) => {
            return (
              <Link key={ind} to={`/posts/${post.id}?_embed=comments`}>
                <Card key={ind}>
                  <Title>{post.title}</Title>
                  <p>{post.body}</p>
                </Card>
              </Link>
            );
          })}
        </Container>
      ) : (
        <h1>There is a some issue!</h1>
      )}
    </div>
  );
};

export default Posts;
