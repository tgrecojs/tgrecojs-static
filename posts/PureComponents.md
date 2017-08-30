---
title: Why I Love Pure Components (& you should too!)
slug: pure-components
author: Thomas Greco
date: 2017-6-10 15:00 PDT
tags:
  - ReactJS
  - Testing
---

### Understanding Outcomes with Pure Components 
Use of Stateless Functional Components (a.k.a. “pure” or “dumb” components) in ReactJS continues to grow since first being released in React 0.14, and for good reason. By relying on pure components, developers end up writing reusable code thats extremely easy to test, thus leading to better application architecture. Why?
A functional stateless component is merely a factory function used to create a react component. Personally, I like the term “pure component” because its indicative of what the code really is — a pure function sprinkled with some JSX.

> "A pure function is a function which:
Given the same input, will always return the same output.
Produces no side effects.
Relies on no external mutable state." </br>
>  Eric Elliott, Master the JavaScript interview: [What is a Pure Function](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)

Equipped with the right amount of tests, the use of pure functions can help bring peace of mind to developers by ensuring that any scenario which was tested will not have an unintended result in the application. As you can image, this can go along way when building large scale applications. It should also come as no surprise to know that pure functions are the heart of Redux which relies on JavaScript’s `reduce` function. 

In an upcoming post, i’ll go into further detail on how reduce works. For now, I want to continue on with the idea of writing “bullet-proof” React components using pure functions. To best illustrate this, i’m going to show some code that shows a react child component.

```javascript
// Post.js
const Post = ({ title, content }) => 
  <div className="post">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>;
```

The clean nature of these components make it extremely easy to reason about the code. In this case, we see the that `Post` is just a function that takes title and content `props` and produces an element. Usually, you may see `props` but i’ve utilized ES6 destructuring. By doing so, my we’re able to pull specific values out of the `props` object and access `props.title` and `props.content` without using [dot notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors). 

Personally, I think that this is awesome as it removes any mystery about the `props` being passed into a component. In programming, mystery is never good a thing so this allows us to read code than others can more easily reason about, especially as components become more large!

Although this code may not look like much, it could very well play an integral part of an application. For instance, let's imagine this `<Post/>` component renders articles in an application that has over a million daily users. If that's the case, then we will likely rather these smaller, cohesive blocks of code as they allow us to hammer out every last detail! **If we can think of the scenario, we can test how our pure component will react**. 

Developers often get discouraged when writing unit tests as their not sure what to test for. As we learned, the use of pure compoents provide us with everything we need to know in order to write effective tests. In this instance, we know that `<Post />` takes a `title` and a `content` prop. 

```javascript
// Post.test.js
import test from 'tape';
import dom from 'cheerio';
import Post from './Post';
import { renderToStaticMarkup } from 'react-dom';

test('<Post /> ', assert => {
  const msg = 'should render a post with a title and content';
  // define preexisiting conditions
  const props = {
      title: 'I am the title',
      content: 'I am the content!!!!!! Woooooooo!'
  };
  const checkProps = RegExp(props);

  const el = <Post {props} />
  const $ = dom.load(render(el));
  const output = $('post').html();

  const actual = checkProps.test(output);
  const expected = true;

  assert.same(actual, expected, same);
  assert.end()
})
```

Developers often get discouraged when writing unit tests as their not sure what to test for. As we learned, the use of pure compoents provide us with everything we need to know in order to write effective tests. 


### Step 1 - Set up pre-existing conditions
In this instance, we know that `<Post />` takes a `title` and a `content` prop which was see being assigned inside of our `test()` right below the `msg` variable. Following this, we can use `Regex` to create a variabe that contains these props. By doing this, we will be able to use `Regexp`s `test` function to see if our `Post` component contains these values. 

```javascript
// post.test.js
const props = {
    title: 'I am the title',
    content: 'I am the content!!!!!! Woooooooo!'
};
const checkProps = RegExp(props);
```

### Step 2 - Render the HTML from `<div class="post">` 
Following this, we then see the use of cheerio to render our component. Cheerio allows us to traverse and manipulate the DOM using its API. Like many developers, I utilize server side rendering quite often and the nature of Cheerio makes it a fantstic choice. That said, we can use cheerio's `.load` method to render our react element. From there, we simply pass in the selector of the contents which we want to check. In our case, it's the `.post` class.  

```javascript
 // Set up cheerio
 const el = <Post {props} />
 const $ = dom.load(render(el));
 const output = $('post').html();
```

#### Step 3 - Test the props
The last thing we need to do is check the props of our `output` variabe. To do this, we have an `actual` value which will check to see if our component passes our `checkProps` test. If it does, that means the `actual` value will return `true` and give us a passing test! 

```javascript
const actual = checkProps.test(output);
const expected = true;

assert.same(actual, expected, msg);
assert.end();
```