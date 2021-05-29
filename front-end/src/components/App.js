/** @format */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Header from "./Header";
import HeaderSmall from "./HeaderSmall";
import Footer from "./Footer";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";

function App() {
  return (
    <Wrapper>
      <Router>
        <HeaderSmall />
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>
        <Footer />
        <GlobalStyles />
      </Router>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  min-height: calc(0.76 * 100vh);
`;
