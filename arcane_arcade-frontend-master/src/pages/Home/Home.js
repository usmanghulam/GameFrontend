import React from "react";
import { observer } from "mobx-react";
import "./Home.scss";
import "../../slider.css";
import Navbar from "../../components/Navbar/Navbar";
import { Container } from 'react-bootstrap';
import Tabs from "./Tabs";
import GamesTiles from "./GamesTiles";
import Toolbar from "./Toolbar";

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Tabs />
        <Toolbar />
        <GamesTiles/>
      </Container>
    </div>
  );
};

export default observer(Home);
