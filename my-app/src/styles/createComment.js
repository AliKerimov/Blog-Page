import styled from "styled-components";


export const Container = styled.div`
  margin-top:2%;
  width:50%;
  display:flex;
  justify-content:center;
  align-items:center;
  @media (max-width: 767px) {
  }
`;
export const Create = styled.div`
border:1px solid black;
padding:5px;
cursor:pointer;
display:flex;
justify-content:center;
align-items:center;
margin-top:5px;
`
export const Success = styled.p`
  color: green;
`;

export const Err = styled.p`
  color: red;
`;
