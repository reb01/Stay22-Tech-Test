/** @format */

import React from "react";
import styled from "styled-components";
import Tippy from "@tippy.js/react";

import { RiMapPin2Fill } from "react-icons/ri";

const LocationPin = ({ text }) => (
  <StyledTippy content={`${text}`}>
    <Pin>
      <RiMapPin2Fill size="55" />
      <NameWrapper>{text}</NameWrapper>
    </Pin>
  </StyledTippy>
);

export default LocationPin;

const Pin = styled.div`
  display: flex;
  width: 85px;
  font-weight: bold;
  font-size: 18px;
`;
const NameWrapper = styled.div`
  color: black;
  font-weight: bold;
  font-size: 18px;
`;
const StyledTippy = styled(Tippy)`
  color: white;
  background: black;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  font-weight: bold;
`;
