---
title: 5 (of the many things) to love about Next.js
description: Next.js continues to be considered a “win” amongst a number of developers everywhere. (If you couldn't guess, I am one of them!) To help shine light on some of the reasons why I love the framework, I dediced to put together a series of posts on the topic. In this first one, I'm going to cut right to the chase and shed light on a few of the amazing things that Next.js makes possible.
slug: next-js-part1
author: Thomas Greco
date: 2017-8-29 20:00 EST
tags:
  - ReactJS
  - nextjs
---

[Next.js](https://zeit.co/blog/next) continues to be considered a “win” amongst a number of developers everywhere. If you couldn't guess, I am one of them! To help shine light on some of the reasons why I love the framework, I dediced to put together a series of posts on the topic. In this first one, I'm going to cut right to the chase and shed light on a few of the amazing things that Next.js makes possible.


### Ease of Use

Anyone who has used the technology will tell you how easy it is to get started building a project with Next.js. You can have an app running as quickly as you’re computer can install the required packages... seriously.

Below is all that’s needed to create the shell for an app.

```bash
npm init -y # creates package.json
npm install react react-dom next # self explanatory
mkdir pages && touch pages/index.js
```

Granted that you’re package.json’s `script`'s object has been [modified correctly](https://github.com/zeit/next.js/#setup), you can paste the code below into the `pages/index.js`, run `npm run dev` and watch you’re application come to life.

```javascript
import React from 'react';

export default ({title = 'How tight is this next.js thing?'}) => <h2>{title}</h2>;
```
<code>pages</code> acts as our router in Next.js. If we added the same code toa new file named `pages/about.js` and then visited `localhost:3000/about`, we'll see that our component is displayed and Next.js took care of the routing for us! Now let's continue on to some more cool stuff.


### Automatic Code Splitting

Any programmer in the now will tell you how important code splitting is to ensure an application’s performance is optimal. As it’s name suggests, [code splitting](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=3&cad=rja&uact=8&ved=0ahUKEwiMpYm24JHWAhXFSyYKHR-VAk4QFggyMAI&url=https%3A%2F%2Fwebpack.github.io%2Fdocs%2Fcode-splitting.html&usg=AFQjCNHoevmMDgzx9nVy7XMvPx5xusQ3Kg) allows us to *split* our application code up into a series of lightweight bundles. Instead of loading all of our JavaScript, our application will only load the bundle needed. Webpack is the tool most associated with this process. Instead of having to configure webpack to perform this, we can rely on Next.js! Let' get a better understanding of how this is accomplished so we can better understand what's going on. 

Below shows an example of the `.next` directory created from running `next build`. 

![nextjs build directory](https://s3.postimg.org/p628izu1f/Screen_Shot_2017-08-23_at_2.52.45_AM.png)

Inside `.next` we see the `bundles` folder. When our `next build` runs, it uses webpack to generate bundles based on our app's `pages` directory. `pages` acts as a file system which allows Webpack easily target this directory and succeed in bundling our code without us having to do a thing. Additionally, application will load the `index.js` bundle when a visiter hits the `/` route. If a user then visits `/blog` route then the `index.js` bundle will be swapped in for the `blog.js` bundle.

### Prefetching

Prefetching picks off where code splitting leaves off. Next.js allows all of our optimized bundles of code to be lazily-loaded behind the scenes. 

To harness the benefits of prefetching, all users need to do is add the `prefetch` attribute to their Link components.

```javascript
// Will NOT prefetch route
<Link href="/blog" />
// Will have response cached and ready to go :)
<Link prefetch href="/blog" />
```

When next.js sees `prefetch`, it will provide a ServiceWorker for the corresponding route which will load all of the JavaScript behind the scenes. I, [along with other developers](https://github.com/zeit/next.js/issues/740), was initially under the impression that this magic `prefetch` attribute would wire up a service worker that would cache my applicaton's blog posts. After all, I linked to them with `prefetch`! It turns out that this is actually better that we must wire up our own service worker to perform this. It's also a tremendous example of how the tools Next.js provides users with are so crucial yet till pretty unonpinionated. Next.js wants nothing to do with how you handle your data. They just want to supply the tools needed for you to handle it in the best manner.

### Server Side Rendering
I still haven’t covered the fact that Next.js allows all of our application code to utilize server side rendering (SSR), thus providing the [benefits that come with this](https://medium.com/walmartlabs/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8). By employing SSR, we…

* eliminate the need for the client to download code by having the HTML ready in the response. 
* can provide users with an initial render of the the application’s view while loading the code in the background.
* deploy SEO friendly applications that are both Indexable and crawlable.
* do countless more awesome things with JavaScript.

Additionally, Next.js makes it super easy to define custom routes on the server using a framework of your choice or, if you’d like, you can roll your own server. Like many JavaScript developers, I have a lot of experience using ExpressJS so I was able to apply this knowledge to create a custom backend with just a few lines of code. 

By taking a look at the [projects repo](https://github.com/zeit/next.js/tree/v3-beta/examples), you will see a slew of examples with frameworks like Express, Koa, and Hapi, further showing how extendable Next.js truly is. Next.js simply provides all of these amazing benefits and let’s the developer pick and choose how they want to harnesss them. 

### HMR and Error Reporting
The effectiveness of [Hot-module replacement](https://webpack.github.io/docs/hot-module-replacement.html) (HMR) has made it a must-have for the development process. Instead of reloading an entire application when code is changed, HMR will only recreate modules that have been altered. Webpack’s homepage describes the practice as “Livereload for every module” so as you can image, this allows next.js to come equipped with a high-powered development process but it doesn’t stop there. Users will quickly learn about the amazing error messages that Next.js immediately renders to the browser whenever code is in correct. 

Yes, you’ve heard that correct. I said “amazing error messages”. Surely I must be crazy. Well, take a look for yourself. I’ve recorded a quick clip of this in action. 

<div style="display: flex; justify-content: center">
<iframe src="https://giphy.com/embed/3ov9jYfehcX86yv4xa" width="480" height="281" frameBorder="0"allowFullScreen></iframe>
</div>

At first we see the application being rendered correctly in the browser. To demonstrate Next.js’ ability then see an error as a result of me removing the `>` symbol from my JSX. No matter how small, these errors can cause serious headaches due to all sorts of nonsense so I thought this provided a good example of Next.js instantly picking up the error and it doesn’t stop pinpoints the file and even the line on which this error is occurring thus making tracking down bugs a breeze. Every developer knows the struggle of spending more time than they’d be willing to admit on finding a bug, only to find out that the issue was embarrassingly trivial. Next.js eliminates this problem and allows developers to work with great efficiency. 

### Final thoughts
Hopefully by now you’re beginning to realize how powerful of a framework Zeit has created with Next.js. In my next post, i'm going to dive deeper into Next.js and in particular, my experiences working it. In the meantime, I highly recommend you checking out yet another home-run that Zeit has released to the people! 

##### Additional Resources
* [Next.js Repo](https://github.com/zeit/next.js)
* [Learn Next.js -- Awesome for beginners!!!](learnnextjs.com)
* [Zeit Blog - Next.js 3](https://zeit.co/blog/next3)
* [Zeit Slack](https://zeit.chat/)
* [awesome-nextjs](https://github.com/unicodeveloper/awesome-nextjs)
