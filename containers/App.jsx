import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';

// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../src/material_ui_raw_theme_file'

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={theme}>
          <div>
            <Header />
            <MainSection />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
