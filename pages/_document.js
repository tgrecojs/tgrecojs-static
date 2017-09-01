// @flow

import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import styledNormalize from 'styled-normalize';

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    return (
      <html lang="en-US">
        <Head>
          {styleTags}
          <style type="text/css">
            {styledNormalize}
          </style>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <body>
          <div className="root">
            {main}
          </div>
          <NextScript />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/themes/prism.min.css"
          />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Lato|Inconsolata"
          />
        </body>
      </html>
    );
  }
}
