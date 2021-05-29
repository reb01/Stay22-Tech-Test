/** @format */
import React from "react";
import GoogleMapReact from "google-map-react";
import MyMarker from "./MyMarker";
import LocationPin from "./LocationPin";
import styled from "styled-components";

const Map = ({ location, zoomLevel, hotelData }) => {
  return (
    <>
      <Wrapper>
        <Map1>
          <MapActual>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: process.env.REACT_APP_GOOGLE_KEY,
              }}
              defaultCenter={{
                lat: 45.4961,
                lng: -73.5693,
              }}
              defaultZoom={zoomLevel}
            >
              <LocationPin
                lat={location.lat}
                lng={location.lng}
                text={location.name}
              />
              {hotelData.map((markers, index) => (
                <MyMarker
                  key={index}
                  price={markers.min_rates.per_night}
                  name={markers.name}
                  latCenter={location.lat}
                  lngCenter={location.lng}
                  lat={markers.latitude}
                  lng={markers.longitude}
                  stars={markers.num_stars}
                />
              ))}
            </GoogleMapReact>
          </MapActual>
        </Map1>
      </Wrapper>
    </>
  );
};

export default Map;

const Wrapper = styled.div`
  display: flex;
`;
const Map1 = styled.div`
  height: 70vh;
  width: 60vw;
  border: none;
`;
const MapActual = styled.div`
  display: flex;
  height: 70vh;
  width: 60vw;
  color: blue;
`;
