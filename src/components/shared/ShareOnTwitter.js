import React from 'react';
import Link from 'next/link';

const PostFooter = (
  {
    title,
    slug,
    twitterIconClass = 'twitter-icon',
    buttonRowClass = 'post-btn-row',
  } = {}
) =>
  <div className={buttonRowClass}>
    <button>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </button>
    <Link
      href={`http://twitter.com/share?text=Read ${title} via @tgrecojs #javascript &url=https://tgrecojs.com/posts/${slug}`}
    >
      <a className="twitter-link">
        Share Post<img
          className={twitterIconClass}
          alt="Share on Twitter"
          src="/static/twitter-icon.png"
        />
      </a>
    </Link>
  </div>;

export default PostFooter;
