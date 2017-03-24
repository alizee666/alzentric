# tests

> `tests.js` is an entry point that is only used during test running.

You do not have to import or export anything on the `tests/index.js` anymore.

### In case you are running on windows, add NODE_PATH as an env var, and run 'gulp tests' rather than npm test

### Testing with tape.js
* A simple unit test will go as:

```js
  import test from 'tape';

  test('A passing test', (assert) => {

    assert.pass('This test will pass.');
    assert.end();
  });

  test('Assertions with tape.', (assert) => {
    const expected = 'something to test';
    const actual = 'something to test';

    assert.notEqual(actual, expected,
      'Given two mismatched values, .equal() should produce a nice bug report');

    assert.end();
  });
```

#### Testing a React Component with tape
* An important note is that i created a simple util that extends tape, that is located in `tests/index.js`. So to test components import this in like so:

```js
  import test from 'tape';
  import { createRenderer } from 'react-addons-test-utils';
  import testReact from 'tests'; // <-- this is that util
  import Counter from './Counter';

  testReact('Counter component', (assert) => {
    const renderer = createRenderer();

    renderer.render(
      <Counter
        count={9}
        increment={()=>{}}
        decrement={()=>{}}
        incrementAsync={()=>{}} />
     );

    const actual = renderer.getRenderOutput();

    assert.jsxEquals(actual,
      <p>
        Clicked: 9 times
        <button onClick={function noRefCheck() {}}>+</button>
        <button onClick={function noRefCheck() {}}>-</button>
        <button onClick={function noRefCheck() {}}>Increment async</button>
      </p>,
      'component rendered properly');

    assert.end();
  });
```



### Docs
* [tape.js](https://github.com/substack/tape)
* [tape-jsx-equals](https://github.com/atabel/tape-jsx-equals)
* [Why tape?](https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4)
