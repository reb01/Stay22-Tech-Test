/** @format */
import React, { useState, useEffect } from "react";
import Tippy from "@tippy.js/react";
import styled from "styled-components";
import { RiMapPin2Fill } from "react-icons/ri";

const MyMarker = ({ name, price, stars, latCenter, lngCenter, lat, lng }) => {
  const [distance, setDistance] = useState("");

  const tooltipDetails = [
    <Name>{name}</Name>,
    <Price>${price.toFixed(0)} per night before taxes and fees</Price>,
    <Stars>{stars} Stars</Stars>,
    <Distance>{distance}KM distance to the Bell Center</Distance>,
  ];

  function getDistanceFromLatLonInKm(latCenter, lngCenter, lat, lng) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat - latCenter); // deg2rad below
    const dLon = deg2rad(lng - lngCenter);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(latCenter)) *
        Math.cos(deg2rad(lat)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return setDistance(d.toFixed(2));
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
  useEffect(() => {
    getDistanceFromLatLonInKm(latCenter, lngCenter, lat, lng);
  }, [name, latCenter, lngCenter, lat, lng]);

  // console.log("distance", distance);
  return (
    <>
      <Wrapper>
        <StyledTippy content={tooltipDetails}>
          <Pin>
            <RiMapPin2Fill size="35" />
            <PriceWrapper>${price.toFixed(0)}</PriceWrapper>
          </Pin>
        </StyledTippy>
      </Wrapper>
    </>
  );
};

export default MyMarker;

const Wrapper = styled(Tippy)`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-content: center;
`;
const PriceWrapper = styled.div`
  color: black;
  font-weight: bold;
  font-size: 15px;
`;
const Name = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;
const Price = styled.div`
  margin-bottom: 5px;
`;
const Stars = styled.div`
  margin-bottom: 5px;
`;
const Distance = styled.div``;
const StyledTippy = styled(Tippy)`
  color: white;
  background: black;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
`;
const Pin = styled.div`
  display: flex;
  width: 70px;
  color: #de6a99;
`;
