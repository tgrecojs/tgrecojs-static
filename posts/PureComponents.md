---
title: Why I Love Pure Components (& you should too!)
description: This article takes a look at Functional Stateless Components which React released in v0.14. Since then, they've made a huge impact in the community by providing users with a cleaner syntax that allows for us to write more declarative code. To show why this is so helpful, this article will take a look at stateless components and finish up with some unit tests.
slug: pure-components
author: Thomas Greco
date: 2017-8-22 15:00 PDT
tags:
  - ReactJS
  - Testing
---

### Understanding Outcomes with Pure Components
Use of Stateless Functional Components (a.k.a. “pure” or “dumb” components) in ReactJS continues to grow since first being released in React 0.14, and for good reason. By relying on pure components, developers end up writing reusable code thats extremely easy to test, thus leading to better application architecture. Why? A functional stateless component is merely a factory function used to create a react component. Personally, I like the term “pure component” because its indicative of what the code really is — a pure function sprinkled with some JSX.

> "A pure function is a function which:
Given the same input, will always return the same output.
Produces no side effects.
Relies on no external mutable state." </br>
> Eric Elliott, Master the JavaScript interview: [What is a Pure Function](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)

Equipped with the right amount of tests, the use of pure functions can help bring peace of mind to developers by ensuring that any scenario that has been tested will not have an unintended result in the application. As you can imagine, this can go along way when building large scale applications. It should also come as no surprise to know that pure functions are the heart of Redux which relies on JavaScript’s `[reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=a)` function. 

In an upcoming post, i’ll go into further detail on how reduce works. For now, I want to continue on with the idea of writing “bullet-proof” React components using pure functions. To best illustrate this, i’m going to show some code that shows a react child component.

```javascript
// Post.js
const Post = ({ title, content }) =>
<div className="post">
<h2>{title}</h2>
<p>{content}</p>
</div>;
```

The clean nature of these components make it extremely easy to reason about the code. In this case, we see the that `Post` is just a function that takes title and content props and then uses these props to produce an element. You may often see `props` being passed in as a parameter but i’ve utilized ES6 [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment). By doing so, my we’re able to pull specific values out of the `props` object and access `props.title` and `props.content` without using [dot notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors).

Personally, I think that this is awesome as it removes any mystery about the `props` being passed into a component. In programming, mystery is never good a thing so this allows us to read code than others can more easily reason about, especially as components become more large!

### Why this is important
Although this component may not look like much, it could very well play an integral part of an application. For instance, let's imagine `<Post/>` renders articles in for a website that has over a million daily users. If that's the case, then we will likely rather these smaller, cohesive blocks of code as they allow us to easily hammer out every last detail! You’ll also find that pure components make modifications a breeze and also result in writing code that can be easily ported into other projects. In addition to these benefits, pure components also make it extremely easy to test them with any crazy props that you wish. Like a pure function, pure components will always map the same input to the same output therefore **If we can think of the scenario, we can test how our component will react**.


#### Diving into Unit Tests
As we just saw, the code for functional components provide us awesome intel on with everything we need to know in order to write effective tests. To best illustrate this, i’m going to take you through the code block below which is a unit test of the `<Post />` component.   

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

Don’t worry if the code above is a bit confusing to you. It will all make sense soon. 


### Step 1 - Set up pre-existing conditions
In this instance, we know that `<Post />` takes a `title` and a `content` prop so we can test this by simply passing in these values to a `props` variable. Once we’ve assigned the props we want to test, we can use JavaScript's `Regex` function to create another variable, `checkProps`, that will make sure the component being tested contains the props it is being given. 

```javascript
// post.test.js
const props = {
title: 'I am the title',
content: 'I am the content!!!!!! Woooooooo!'
};
const checkProps = RegExp(props);
```

### Step 2 - Render the HTML from `<div class="post">`
Following this, we then see the use of cheerio to render our component. Cheerio allows us to traverse and manipulate the DOM using its API. Additionally, Cheerio is lighting fast and as a result of that, it’s at the heart of popular libraries like [enzyme](https://github.com/airbnb/enzyme/blob/master/docs/api/render.md).

Taking a look into our code, we can use cheerio's `.load` method to render our react element. From there, we simply pass in the selector of the contents which we want to check. In our case, it's the `.post` class Following our selector, we then see cheerio’s `.html()` method which will render the content from our selector and allow us to check for our component’s props.

```javascript
// Set up cheerio
const el = <Post {...props} />
const $ = dom.load(render(el));
const output = $(‘.post').html();
```

#### Step 3 - Test the props
The last thing we need to do is check the props of our `output` variabe. To do this, we have an `actual` value which will check to see if our component passes our `checkProps` test. If it does, that means the `actual` value will return `true` and give us a passing test!

```javascript
const actual = checkProps.test(output);
const expected = true;
// asserts that actual and expected are equal
assert.same(actual, expected, msg);
// ends assertion test
assert.end();
```

#### Step 4 - Celebrate (Final Words)
Awesome! You’ve made it to the end. Hopefully by now you’ve got a good understanding of how functional stateless components work in React. Personally, I can’t get enough of them and I hardly every try to use classes in my code. Why use `this` if you don’t need to? :)






