import React from 'react';
import { Col, Row } from 'react-bootstrap';
import aboutImg from '../assets/about_us.png';

function About() {
  return (
    <div className="about" id="aboutus">
      <Row>
        <Col>
          <div className="aboutus__content">
            <h3>
              Where it <span>started</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
              etiam dignissim diam quis enim lobortis scelerisque fermentum dui
              faucibus in ornare quam viverra
            </p>
          </div>
        </Col>
        <Col>
          <div className="aboutus__img">
            <img src={aboutImg} alt="About Us" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default About;
