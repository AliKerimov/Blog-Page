import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">My Site</Logo>
      <Menu>
        <Link to="/">Home</Link>
        <Link to="/posts/create">Create Post</Link>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 90%;
  background-color:gray;
  border-bottom:1px solid black;

  @media (max-width: 768px) {
    // padding: 0 20px;
  }
`;

const Logo = styled(Link)`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
`;

const Burger = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    z-index: 20;

    div {
      width: 25px;
      height: 3px;
      margin: 5px;
      background-color: #333;
      transition: all 0.3s ease;
    }
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in-out;
  }

  a {
    color: #333;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    margin-right: 20px;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #777;
    }

    @media (max-width: 768px) {
      margin: 10px 0;
    }
  }
`;

export default Navbar;
