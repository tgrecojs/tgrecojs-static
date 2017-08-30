// @flow

import React from 'react';
import Link from 'next/link';
import Layout from '../src/components/Layout';
import posts from '../posts';

export default Layout(
  () =>
    <div>
      {posts.map(post =>
        <Link href={`/post?post=${post.slug}`} as={`/post/${post.slug}`}>
          <a>
            <h1 itemProp="headline" className="post--title">
              {post.title}
            </h1>
          </a>
        </Link>
      )}
    </div>,
  'Home'
);
