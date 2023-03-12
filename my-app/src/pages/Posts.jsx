import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/blogSlice";
import { Container,Card,StyledLink,Title,DeleteBtn, StyledDiv} from "./styles/postsStyle";
import { deletepost } from "../utils/crud";
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
             <StyledDiv key={ind}>
               <StyledLink key={ind} to={`/posts/${post.id}?_embed=comments`}>
                <Card key={ind}>
                  <Title>{post.title}</Title>
                  <p>{post.body}</p>
                </Card>
              </StyledLink>
                <DeleteBtn onClick={()=>{deletepost(dispatch,post);console.log(posts.products.length);}}>Delete Post</DeleteBtn>
             </StyledDiv>
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
