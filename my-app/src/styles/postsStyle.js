import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  padding: 20px;
  align-items: stretch;
  margin-top:5%;
  @media (max-width: 767px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export const Card = styled.div`
  background-color: #fff;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  padding: 20px;
`;

export const StyledLink = styled(Link)`
  all: unset;
  font-size: 16px;
  flex: 1;
`;
export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor:pointer;
  display: flex;
  height:40vh;
  padding:10px;
  flex-direction: column;
`;
export const DeleteBtn = styled.p`
border:1px solid black;
padding:3px;
text-align:center;
`