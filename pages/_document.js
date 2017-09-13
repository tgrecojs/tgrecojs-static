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
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="manifest" href="./static/manifest.json" />
          <meta name="theme-color" content="#56a5b7" />
          <link
            rel="shortcut icon"
            type="image/png"
            href="/static/tg-logo.png"
          />
        </Head>
        <body>
          <div className="root">
            {main}
          </div>
          <NextScript />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/themes/prism-coy.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Lato"
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" />
        </body>
      </html>
    );
  }
}
