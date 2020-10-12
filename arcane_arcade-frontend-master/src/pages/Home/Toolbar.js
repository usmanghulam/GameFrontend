import React from "react";
import { DropdownButton, DropdownItem, Dropdown, Row, Col } from 'react-bootstrap';


const Toolbar = () => {
    return (
        <div className="tool-bar">
            <div className="sorting">
                <label>Sort By:</label>
                <DropdownButton id="dropdown-basic-button" title="Release Date">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
            </div>
            <div className="platform">
                <label>Platform:</label>
                <DropdownButton id="dropdown-basic-button" title="Xbox">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
            </div>
            <div className="search">
                <input type="text" placeholder="Search" />
            </div>
        </div>
    );
};

export default Toolbar;
