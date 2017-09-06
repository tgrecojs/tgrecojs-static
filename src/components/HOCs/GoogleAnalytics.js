import React, { Component } from 'react';
import { initGA, logPageView } from '../../lib/googleAnalytics';

const withGA = ComposedComponent =>
  class HOC extends Component {
    componentDidMount() {
      if (!window.GA_INITIALIZED) {
        initGA();
        window.GA_INITIALIZED = true;
      }
      logPageView();
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  };

export default withGA;
