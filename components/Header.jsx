import React, { PropTypes, Component } from 'react';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import Drawer from 'material-ui/Drawer';
import SearchBar from './SearchBar';
import NavMenu from 'material-ui/svg-icons/navigation/menu';

const defaultStyle = {
  marginLeft: 0
};

const appBarStyle = {
 fontSize :'64px',
 backgroundColor:'#ce0606',
 fontFamily:'Ubuntu',
 paddingTop : '20px',
 paddingBottom : '20px'
};

const iconStyle = {
 marginLeft : '15px',
 marginRight : '15px',
 color : '#fff',
 fontSize :"64px",
 fontFamily:'Ubuntu',
 paddingRight : '24px'
};

const IconButtonRight = (
<div>
   <FontIcon style={iconStyle}><i className="zmdi zmdi-store"></i></FontIcon>
   <FontIcon style={iconStyle}><i className="zmdi zmdi-shopping-cart"></i></FontIcon>
   <FontIcon style={iconStyle}><i className="zmdi zmdi-account"></i></FontIcon>
</div>
);

const IconButtonLeft = (
<div>
   <FontIcon style={iconStyle}><span style={iconStyle}><i className="zmdi zmdi-menu"></i>&nbsp;Kraftly</span></FontIcon>
</div>
);

class Header extends Component {
  render() {
    return (
      <header className="header">
            <AppBar iconElementLeft={IconButtonLeft}  style={appBarStyle} title="" iconElementRight={IconButtonRight} zDepth={0}/>
            <SearchBar />
      </header>
    );
  }
}

export default Header;
