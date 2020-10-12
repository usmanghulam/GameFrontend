import React from "react";

import ReactPlayer from "react-player";

import { observer } from "mobx-react";

import "./Home.scss";
import "../../slider.css";

import Navbar from "../../components/Navbar/Navbar";

import GamesListings from "./GamesListings";

import bastion from "../../img/bastion.jpeg";
import fire_emblem from "../../img/fire_emblem.png";
import kingdomCome from "../../img/kingdom_come.jpeg";
import greedfall from "../../img/greedfall.jpg";
import xcom from "../../img/xcom.jpg";
import { Container } from 'react-bootstrap';

import { useStore } from "../../store";
import Tabs from "./Tabs";

const Home = () => {
  const { selectedGame } = useStore("games");

  return (
    <div className="App">
      <Navbar />
      <Container>
        <Tabs />
      </Container>
      <nav
        className="navbar browse-listings"
        role="navigation"
        aria-label="main navigation"
      >
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              <input
                type="search"
                placeholder="enter search term or tag"
                className="topcoat-search-input"
              />
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <label htmlFor="sort-by">Sort By</label>

              <div className="select">
                <select name="sort-by">
                  <option value="sort_by">Relevance</option>
                  <option value="release_date">Release Date</option>
                  <option value="Name">Name</option>
                  <option value="price_asc">Lowest Price</option>
                  <option value="price_desc">Highest Price</option>
                  <option value="reviews">User Reviews</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="games">
        <div className="game-list">
          <GamesListings />
        </div>

        <div className="filters">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">Narrow by Price</p>
            </header>
            <div className="card-content">
              <div className="content">
                <input type="range" className="topcoat-range" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(Home);
