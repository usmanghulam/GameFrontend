import React from "react";
import { Tabs, Tab, Row, Col } from 'react-bootstrap';
import kingdom_come from "../../img/kingdom_come.jpeg";
import biomutant_slider from "../../img/biomutant_slider.jpg";
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default () => (
  <Tabs className="homepage-tabs" defaultActiveKey="profile" id="uncontrolled-tab-example">
      <Tab eventKey="home" title="Discover">
         <Row className="no-gutters">
            <Col sm="8">
                <img src={kingdom_come} className="img-fluid"/>
            </Col>
            <Col sm="4">
                <div className="featured-content">
                    <h1>Lorem ipsum dolor</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren</p>
                </div>
            </Col>
         </Row>
         
      </Tab>
      <Tab eventKey="profile" title="Explore">
		<Splide>
			<SplideSlide>
				<img src={biomutant_slider} className="img-fluid" height="494"/>
			</SplideSlide>
			<SplideSlide>
				<img src={biomutant_slider} className="img-fluid" height="494"/>
			</SplideSlide>
			<SplideSlide>
				<img src={biomutant_slider} className="img-fluid" height="494"/>
			</SplideSlide>
		</Splide>
      </Tab>
  </Tabs>
);
