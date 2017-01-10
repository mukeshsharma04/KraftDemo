import React, { PropTypes, Component } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

const style = {
 paddingLeft : "24px",
 paddingRight :"34px",
 paddingBottom : "20px",
 backgroundColor:'#ce0606',
 fontFamily:'Ubuntu',
 paddingTop : "20px"

};

class SearchBar extends Component {

render () {
 return (
  <div style={style}>
   <Form>
     <FormGroup bsSize="large">
       <FormControl style={{fontSize:'36px',color:"#555555",padding:"34px"}} type="text" placeholder="Search for Products, Krafts and More" id="search"/>
     </FormGroup>
   </Form>
  </div>
 );
}
}

export default SearchBar;
