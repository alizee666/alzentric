# elements

> The elements are used by `../components` or by other elements.

Basically an element could possibly be anything that doesn't require to use React's "render" method.

An element doesn't do any data fetching and expects data pass via `props`. It represents a low-level reusable component that can be used by different components. An element don't have state. A element expects low-level data.

An element brings its own styles. Optionally it can take class names to override styling (theming).

Examples for elements: a drop down list, autocompletion edit box, radio button list.

### Convention
Elements are the basic building blocks of our application, and are completely unaware of state. Therefore they do not need to leverage react's render method or component lifecycles. You want to compose these as stateless fat arrow functions.

```javascript
const Element = ({ text, className }) =>
  <button className={className}>{text}</button>;

Element.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};
```

A element is allowed to import the following stuff:
* `elements/*`
* external styles and components

Don't import:
* `components/*` -> pass a component via `props` instead.
* `store/*` -> a element don't want to fetch data. Move the file to components and pass the data via `props`.
* `modules/*` -> pass a callback via `props` and call the action in the container instead.
* `routes/*`
