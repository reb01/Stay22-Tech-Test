/** @format */

import React, { useState, useEffect } from "react";
import Map from "./Map";
import { Icon } from "react-icons-kit";
import styled, { keyframes } from "styled-components";
import { spinner6 } from "react-icons-kit/icomoon/spinner6";
import { Range, getTrackBackground } from "react-range";

function Homepage() {
  const [hotelData, setHotelData] = useState("");
  const [values, setValues] = useState([50, 700]);
  const STEP = 1;
  const MIN = 50;
  const MAX = 800;

  const location = {
    name: "Bell Center",
    address: "1909 Avenue des Canadiens-de-Montréal, Montréal, QC H4B 5G0",
    lat: 45.4961,
    lng: -73.5693,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [hotelData]);

  useEffect(() => {
    const url = `https://api.stay22.com/v2/booking?latitude=45.4961&longitude=-73.5693&radius=10000&minprice=${MIN}&maxprice=${MAX}&language=en&currency=CAD&guests=A,A&rooms=1&limit=20&page=1&country=CA`;
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setHotelData(response.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [location.lat, location.lng, MIN, MAX]);

  const filterByDate = () => {
    const url = `https://api.stay22.com/v2/booking?latitude=45.4961&longitude=-73.5693&radius=10000&minprice=${values[0]}&maxprice=${values[1]}&language=en&currency=CAD&guests=A,A&rooms=1&limit=20&page=1&country=CA`;
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setHotelData(response.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log("hotelData", hotelData);

  if (!hotelData) {
    return (
      <SpinnerWrapper>
        <StyledIcon size={50} icon={spinner6} color={"blue"} />
      </SpinnerWrapper>
    );
  }

  return (
    <>
      <Wrapper>
        <MapMove>
          <Map location={location} zoomLevel={15} hotelData={hotelData} />
        </MapMove>
        <WrapperPriceRange>
          <Prices>
            <Price>Min price ${values[0]}</Price>
            <Price>Max price ${values[1]}</Price>
          </Prices>
          <Range
            values={values}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={(values) => {
              console.log(values, values);
              setValues(values);
            }}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height: "36px",
                  display: "flex",
                  width: "100%",
                }}
              >
                <div
                  ref={props.ref}
                  style={{
                    height: "5px",
                    width: "100%",
                    borderRadius: "4px",
                    background: getTrackBackground({
                      values,
                      colors: ["#ccc", "#548BF4", "#ccc"],
                      min: MIN,
                      max: MAX,
                    }),
                    alignSelf: "center",
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props, isDragged }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "42px",
                  width: "42px",
                  borderRadius: "4px",
                  backgroundColor: "#FFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 2px 6px #AAA",
                }}
              >
                <div
                  style={{
                    height: "16px",
                    width: "5px",
                    backgroundColor: isDragged ? "#548BF4" : "#CCC",
                  }}
                />
              </div>
            )}
          />
          <Button onClick={filterByDate}>Filter results by price</Button>
        </WrapperPriceRange>
      </Wrapper>{" "}
    </>
  );
}

export default Homepage;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1100px) {
    flex-direction: column;
    margin-bottom: 50px;
  }
`;
const Button = styled.button`
  width: 250px;
  height: 40px;
  border-radius: 20px;
  margin-top: 20px;
  background-color: #de6a99;
  color: white;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  :hover {
    background-color: #ad1457;
  }
  border: none;
  outline: none;
`;
const WrapperPriceRange = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;
const MapMove = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px;
`;
const Prices = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin: 60px;
`;
const Price = styled.div``;
const spinner = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const StyledIcon = styled(Icon)`
  margin: 18% auto;
  animation: ${spinner} linear 1000ms infinite;
`;
const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: grey;
`;
