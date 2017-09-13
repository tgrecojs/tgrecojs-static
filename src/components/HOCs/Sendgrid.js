import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loadGetInitialProps } from 'next/dist/lib/utils';

const WrappedComponent = ComposedComponent =>
  class HOC extends Component {
    static propTypes = {
      serverRendered: PropTypes.bool,
      env: PropTypes.shape({
        SENDGRID_API_KEY: PropTypes.string,
      }),
    };

    static async getInitialProps(ctx) {
      const subProps = await loadGetInitialProps(ComposedComponent, ctx);
      const serverRendered = !process.browser;
      const env = serverRendered
        ? {
            SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
          }
        : {};

      return {
        env,
        serverRendered,
        ...subProps,
      };
    }
    
    render() {
      return <ComposedComponent {...this.props} />;
    }
  };

export default WrappedComponent;
