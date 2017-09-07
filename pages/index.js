// @flow

import React from 'react';
import Layout from '../src/components/Layout';
import posts from '../posts';
import Card from '../src/components/Card/index';
import withGA from '../src/components/HOCs/GoogleAnalytics';

export default withGA(
  Layout(
    () =>
      <div>
        {posts.map(post => <Card key={post.slug} {...post} />)}
      </div>,
    'Home'
  )
);
