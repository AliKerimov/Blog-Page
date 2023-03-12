import styled from "styled-components";
export const Container = styled.div`
  flex-wrap: wrap;
  margin-top:5%;
`;

export const PostContainer = styled.div`
  flex-basis: 100%;
  padding: 20px;

  @media (min-width: 768px) {
    flex-basis: 70%;
  }
`;

export const PostCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const PostTitle = styled.h2`
  font-weight: bold;
  margin: 0;
  padding: 20px;
`;

export const PostBody = styled.p`
  line-height: 1.5;
  margin: 0;
  padding: 20px;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin:4%
`;

export const CommentCard = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 45%;
  margin-bottom: 16px;
  padding: 16px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CommentName = styled.h3`
  margin-top: 0;
`;

export const CommentEmail = styled.p`
  font-style: italic;
  margin-bottom: 8px;
`;

export const CommentBody = styled.p`
  margin-bottom: 0;
`; 

export const Edit=styled.img`
width:20px;
cursor:pointer;
`