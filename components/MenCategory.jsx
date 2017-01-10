import React, { PropTypes, Component } from 'react';
import Paper from 'material-ui/Paper';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Image }  from 'react-bootstrap';


const style = {
 padding : "20px"
};

export default class MenCategory extends Component {
 render () {
  return (
   <div style={{marginTop:"15px"}}>
    <Paper zDepth={1}>

     <Row className="show-grid"  style={style}>
      <Col xs={12} md={4}>
       <Image src="https://res.cloudinary.com/kartrocket/image/fetch/q_80,f_auto/https://nozzle.s3-ap-southeast-1.amazonaws.com/push/images/1483623589_mweb.jpg" rounded />
      </Col>
     </Row>
    </Paper>
   </div>
  );
 }
}
