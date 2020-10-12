import React from "react";
import { Tabs, Tab, Row, Col } from 'react-bootstrap';
import kingdom_come from "../../img/kingdom_come.jpeg";
import tiles_21 from "../../img/tiles-21.jpeg"; 
import tiles_22 from "../../img/tiles-22.jpeg"; 


const GamesTiles = () => {
    return (
        <div className="tiles-list">
            <div className="games-tiles">
                <a href=""><img src={tiles_22} className="img-fluid"/></a>
            </div>
            <div className="games-tiles">
                <a href=""><img src={tiles_21} className="img-fluid"/></a>
            </div>
            <div className="games-tiles">
                <a href=""><img src={tiles_22} className="img-fluid"/></a>
            </div>
            <div className="games-tiles">
                <a href=""><img src={tiles_21} className="img-fluid"/></a>
            </div>
            <div className="games-tiles">
                <a href=""><img src={tiles_22} className="img-fluid"/></a>
            </div>
            <div className="games-tiles">
                <a href=""><img src={tiles_21} className="img-fluid"/></a>
            </div>
            <div className="games-tiles">
                <a href=""><img src={tiles_22} className="img-fluid"/></a>
            </div>
            <div className="games-tiles">
                <a href=""><img src={tiles_21} className="img-fluid"/></a>
            </div>
            <div className="games-tiles">
                <a href=""><img src={tiles_22} className="img-fluid"/></a>
            </div>
            <div className="games-tiles">
                <a href=""><img src={tiles_21} className="img-fluid"/></a>
            </div>
            <div className="games-tiles">
                <a href=""><img src={tiles_22} className="img-fluid"/></a>
            </div>
            <div className="games-tiles">
                <a href=""><img src={tiles_21} className="img-fluid"/></a>
            </div>
        </div>
 );
};

export default GamesTiles;
