---
title: Unit Testing in Tape Vs. Jest
description:  After recently switching my unit tests from Tape to using Jest I decided to write a post on some of my experiences while teaching readers a lesson on testing!
slug: tape-jest-testing
author: Thomas Greco
date: 2017-9-05 15:00 PDT
tags:
  - ReactJS
  - Testing
---

## Getting Acquainted with Jest
#### Intro
Like any developer, my preference of tools that was built pretty much entirely on past experiences. This means that if i’m not using the tool and it’s known to be an aid to developers then there’s a good chance i’m uninformed on the topic. This was particularly true with Jest, which has become the most widely used library for testing ReactJS applications, so I thought it would be wise to explore the topic a little bit in a blog post. In this post, I want to share my feedback about recently using Jest while contributing to the next-static project.  

I recently ended up pivoting from a dynamic web application to a static site for tgrecojs.com. next-static and the solution has worked A1 so I ended up contributing to the project. The first order of business was to write some tests for this project so I dove right in. Throughout 2017 I received a ton of experience writing unit tests for ReactJS apps but I always used tape so it was no shock that I initially gravitated to my normal dev environment for writing tests.

#### Reading the Unit Test
A few minutes after getting my environment set up I had the boilerplate for my first `test.js` file all ready to go. 

Below, we can see the code submitted in [initial pull request](https://github.com/infiniteluke/next-static/pull/9/commits/006dbe18a2b80f25f9b4d95c090e940da09f09f7).

```javascript
// imports….
// set up for test scope
test('<Post />', nest => {
  nest.test('given no props', assert => {
    const msg = `should render a post`;

    const props = makeProps();
    const re = RegExp(props);

    const el = <Post {...props} />;

    const $ = dom.load(render(el));
    const output = $('.post').html();
    const actual = re.test(output);
    const expected = true;

    assert.same(actual, expected, msg);
    assert.end();
  });
});
```

Once ran, this log for this test would look like the image below.

![tap](https://s26.postimg.org/7glcfzwjd/TAP-_OUTPUT.png)

Isn’t that pretty? I’m a sucker for some good TAP which tape produces little did I know that I was taking it for granted but more on that in a moment. At this point, I finally had something that I could confidently push over to the next-static repo. About a day later, I received this remark from the project owner.

![next static issue](https://s26.postimg.org/a0gza3k3d/Screen_Shot_2017-09-05_at_1.03.05_AM.png)

But of course! Why was I using this stone-age technology when I could just plug in Jest! All kidding aside I wasn’t surprised by this. I know how crazy important of a tool Jest has become to so many developers and I was just excited to dive into the framework.

### Becoming one with Jest
I knew that migrated this super basic test wasn’t going to be hard. I just needed to know how my test was to be set up.

Initially, I use the `test` function imported from the tape library. Once my test was complete, it was then loaded in an `index.test.js` file which I had set up at the main test file. One of Jest’s marquee behaviors is it’s ability to magically runs tests as long as they are either:
* in *.test.js or *.spec.js
* they are in a tests folder.

At the time of writing my test, I wasn’t even aware of this criteria however my code was inside `test.js` file so everything worked out great. Additionally, I could completely eliminate that main index.test.js file as the `jest` command would navigate to the tests on its own. Once inside these tests, Jest will look for specific global variables that it provides users with for writing tests. In my case, I had to swap out `test` for Jest's `describe` function which will signify that a test suite has been created.

> Globals
> In your test files, Jest puts each of these methods and objects into the global environment. You don't have to require or import anything to use them.
 - [Jest Docs](https://facebook.github.io/jest/docs/en/api.html)


These globals are what allow Jest to magically run our tests without importing any code. I don’t want to be over critical of an extremely well known tool like Jest however I became very conscious of polluting my global scope throughout the last year. Yes, even in regards to testing. Over time, I became super comfortable with importing tape directly. It only took a write an import statement (I could add to a VS code snippet if I really needed to) and I feel comfort in knowing my test code is completely self-contained and free from outside bugs. Now, I don’t want to make it seem like i’m nitpicking here. This is merely my feedback on the library. That being said, I think that this no set-up configuration could allows testing to get off the ground as soon as possible.


Sure enough, I ran my tests and saw that Jest was picking up on my code. I didn’t know the .test or .spec criteria at this time but my tests already fell in line with the criteria necessary. I modified my code to fit Jest’s syntax, and my unit test looked like the following.

```javascript
describe('<Post /> with no args', () => {
it('should render a post with default args', () => {
const props = makeProps();
const re = RegExp(props);

const el = <Component {...props} />;

const $ = loadComponent(el);

const output = $('.post').html();
const actual = re.test(output);
const expected = true;

expect(actual).toEqual(expected);
    });
});`
```

As you can see, my test no longer has the `assert` call back that was used with Tape. Instead, we see Jest’s `expect` function to create test assertions. Specifically, we see `expect` asserting that the `actual` value is equal to the `expected` value using `toEqual`. As you can see, migrating this test really didn’t take much and it felt good know that I could have certainly migrated any test’s I’ve written to use Jest without any sort of conflict. Same concepts just different libraries. I love sinking my teeth into knew technologies (especially if I can undertand them from the jump) so it felt good to have my tests now passing with Jest. 


#### You had one job
A day after pushing my newly committed Jest’ test to the next-static repo, I was informed that I failed to fully understand what was being asked of me. I produced a unit test but I really needed to create a snapshot test. Great! Now that I correctly identified the objective, I just needed to find out what exactly a snapshot test was.

#### Enter Snapshot Testing
As it’s name suggests, a snapshot test will take a `snapshot` of a component each time a test is run. If there is an existing snapshot, Jest will compare the two to make sure that nothing in our UI has changed unexpectedly. This is meant to provide developers with instant feedback of their UI. Whereas unit test assertions are meant to test a specific behavior, snapshot tests allow us to monitor trivial modifications in our UI. 

To accomplish this, we use the `react-test-renderer` library’s `.toMatchSnapshot()` method. Once this is set up, Jest will compare the snapshot of our component to any previous snapshot’s and test their contents are the same. 

```javascript
describe('Snapshot::<Post />s', () => {
it('should render the contents of the component.', () => {
const props = makeProps();
const el = <Component {...props} />;

const tree = renderer.create(el).toJSON();

expect(tree).toMatchSnapshot();
    });
});
```

Below is the exact snapshot Jest created for the `<Post/>` component. I’m not going to explain each line but you should be able to easily reason about what the UI should render. 

```javascript
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`Snapshot::<Post />s should render the contents of the component. 1`] = `
<article
  className="post Post__Article-s1eculme-0 fQItYZ"
  itemScope={true}
  itemType="http://schema.org/BlogPosting";
>
  <header>
    <a
      href="/post/test-post"
      onClick={[Function]}
    >
      <h1
        className="post--title"
        itemProp="headline"
      >
        Hello
      </h1>
    </a>
    <footer
      className="post--info"
    >
      <span>
        <time
          dateTime="7/22/2017"
          itemProp="datePublished"
        >
          about 1 month ago
        </time>
      </span>
      <span
        itemProp="author"
      >
        User
      </span>
    </footer>
  </header>
  <div
    className="post--body"
    dangerouslySetInnerHTML={
      Object {
        "__html": "<p>lorem ipsum is the name making tests is this game</p>
      ",
      }
    }
  />
  <footer>
    <small
      className="post--tags"
    >
      <span>
        Filed under: 
      </span>
      <span
        className="post--tag"
        itemProp="keywords"
      >
        <a
          href="/tag/javascript"
          onClick={[Function]}
        >
          javascript
        </a>
        , 
      </span>
      <span
        className="post--tag"
        itemProp="keywords"
      >
        <a
          href="/tag/angular"
          onClick={[Function]}
        >
          angular
        </a>
        
      </span>
    </small>
  </footer>
</article>
`;
```

As you can see, Jest has created a readable representation of our UI. From this point forward, any future implementations of `<Post/>` will be tested against this snapshot. To get a better understanding of this, let’s see what happens when we remove the `<footer>` from our `Post` component and run our snapshot test. 

![jest snapshot ss](https://s26.postimg.org/o2ybbc03d/Screen_Shot_2017-09-04_at_5.01.48_PM.png)

Taking a look at this image, we see that Jest is expecting the `<footer>` div and it can’t find it inside our component. As a result of this, we see the`-` sign thus signifying that the code block has been removed from the file.   If I was instructed to remove this footer, I would acknowledge this change and run `jest -u` to update my snapshot but I wasn’t. Instead, I was creating the initial snapshot for this component and therefore I didn’t have to worry about prior snapshots. The fact that I had created the starting point for futures tests was good enough.


![jest update snapshot ss](https://s26.postimg.org/xdf0sm06v/Screen_Shot_2017-09-04_at_5.06.21_PM.png)

At this point I was further seeing seeing the benefits that Jest bring to a project but I haven’t been completely sold on it being the end all be all of testing solutions. It’s meant to run super quickly but I found that my tests actually ran a bit quicker with tape which would make sense due to how lightweight tape is. 

Additionally, tape allows me to use TAP. Call me old-fashioned but TAP has been around since the 1980’s. That’s older than me and technologies that have lasted this long are usually etched in stone for good reason. I haven’t personally tried to integrate a custom TAP reporter with Jest but from what i’ve gathered it’s fairly difficult task. Is this the end of the world? No. Not at all but it’s worth noting. On the other hand, when the `—watch` flag is used, Jest offers a pretty cool interface that makes running specific tests a breeze. `—watch` keeps Jest running after creating snapshot tests and offer us the ability to update our previous snapshots by just pressing `u`.



#### Final Words
There’s no denying that Jest makes it easy to get begin testing code. In fact, easy is putting it lightly. As I just mentioned, it was so easy that I was initially a bit confused as to how this was supposed to work but the point is that it did indeed work. Aside from the globabl varables and not being able to easily print test results in TAP and the global variables, I have no qualms about the effectiveness of Jest. On the contrary, I am really excited to see what else Jest has to offer as I know that this isn't the last I will see of it! Hopefully you too are 
