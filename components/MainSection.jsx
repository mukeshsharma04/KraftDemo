import React, { Component, PropTypes } from 'react';
import HomeSlider from './Slider';
import Category from './HomeCategory';



class MainSection extends Component {
  render() {
    return (
      <section className="main">
       <HomeSlider style={{width:"inherit",position:"relative"}} />
       <Category />
      </section>
    );
  }
}


export default MainSection;
