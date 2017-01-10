import React, { PropTypes, Component } from 'react';
import Paper from 'material-ui/Paper';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Image }  from 'react-bootstrap';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

const style = {
 paddingLeft : "24px",
 paddingRight :"24px",
 paddingBottom : "24px",
 fontFamily:'Roboto',
 paddingTop : "24px"
};

export default class HomeCategory extends Component {
 render () {
  return (
   <div style={{marginTop:"15px"}}>
    <Paper zDepth={1}>

     <Row className="show-grid"  style={style}>
     <Col xs={3} md={4}>
        <Link to="men"><Image src="https://kartrocket-res.cloudinary.com/image/fetch/w_200,h_200,q_90,c_fill,f_auto/https%3A%2F%2Fnozzle.s3-ap-southeast-1.amazonaws.com%2F559cd83f45ac462a728b50bd%2Fmen.jpg" circle />
       <h3 style={{textAlign:"center"}}>Men</h3></Link>
      </Col>
      <Col xs={3} md={4}>
       <Image src="https://kartrocket-res.cloudinary.com/image/fetch/w_200,h_200,q_90,c_fill,f_auto/https%3A%2F%2Fnozzle.s3-ap-southeast-1.amazonaws.com%2F559cd4e345ac462a728b5065%2Fwomen.png" circle />
       <h3 style={{textAlign:"center"}}>Women</h3>
      </Col>
      <Col xs={3} md={4}>
       <Image src="https://kartrocket-res.cloudinary.com/image/fetch/w_200,h_200,q_90,c_fill,f_auto/https%3A%2F%2Fnozzle.s3-ap-southeast-1.amazonaws.com%2F559cda0245ac462a728b50ec%2Fkids.jpg" circle />
       <h3 style={{textAlign:"center"}}>Kids</h3>
      </Col>
      <Col xs={3} md={4}>
       <Image src="https://kartrocket-res.cloudinary.com/image/fetch/w_200,h_200,q_90,c_fill,f_auto/https%3A%2F%2Fnozzle.s3-ap-southeast-1.amazonaws.com%2F559cdbec45ac462a728b511d%2Fhome.png" circle />
       <h3 style={{textAlign:"center"}}>Furniture & Dining</h3>
      </Col>
     </Row>
    </Paper>
   </div>
  );
 }
}
