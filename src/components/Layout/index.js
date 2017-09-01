// @flow

import React from 'react';
import Head from 'next/head';
import {
  // styled,
  ThemeProvider,
} from 'styled-components';
import config from '../../../config';
import Footer from '../Footer';
import Header from '../Header';
import { type Request } from '../../../types/request';
import { type NextPage } from '../../../types/next';
import Layouts from '../../layouts';
import { defaultColors } from '../../lib/theme';
import Nav from '../navbar/component'
const Layout = Layouts[config.layout || 'none'];

export default (Page: NextPage, title: string) => ({ ...props }: Request) =>
  <ThemeProvider theme={config.theme ? config.theme.colors : defaultColors}>
    <Layout>
      <Head>
        <title>{`${config.siteName} - ${title}`}</title>
      </Head>
      <Nav />
      <Header />
      <div className="content">
        <main className="main">
          <Page {...props} />
        </main>
      </div>
      <Footer className="footer" />
    </Layout>
  </ThemeProvider>;
