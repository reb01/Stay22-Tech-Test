/** @format */

import React from "react";
import styled from "styled-components";
import logo from "../assets/stay22Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <Logo to="/">
        <img src={logo} alt="Logo" width="200px" />
      </Logo>
      <div>Tech Test - Rebecca Gilhespy </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  font-size: 20px;
  font-weight: bold;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-width: 1px;
  border-color: #202020;
  border-bottom-style: solid;
  border-width: 1px;
  border-color: black;
  height: 100px;
  padding-left: 40px;
  padding-right: 100px;
  background-color: white;
  padding-left: 70px;
`;

const Logo = styled(Link)``;
