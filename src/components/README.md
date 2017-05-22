# components

> These components are used by `../containers` or by other components.

A component doesn't do any data fetching and expects data passed through via `props` and or `context` if it's a grandchild. It represents a reusable component that can be used in many different contexts. A component can have state. A component expects high-level data.

A component can have styles for layouts. It should not have styles for visual stuff.

A component is allowed to import the following stuff:
* `components/*`
* `elements/*`

The A-typical directory structure will consist of:
* `index.js` -> the JSX mark up.
* `spec.js` -> the test spec.
* `messages.js` -> the react-intl data.
* `styles.scss` -> sass styling (optional).

Don't import:
* `containers/*` -> these can never be imported into a component.
* `module/*` -> do it from the container instead and pass data via `props`.
  - pass a callback via `props` and call the action in the container instead.
  - we want to keep these as simple and dumb as possible!
* external styles and components -> wrap the style or component in an element
* `route-handlers/*` -> are handled at the container level

## JSX

> We are using `.js` extensions instead of `.jsx`.

#### Convention
  * Components should be dumb and only worry about how things look "Presentational".

  * Create stateless functions that take props passed down to them from the container.

  ```js
    export default ({prop1, prop2, prop,3}) => {
      const stuff = `${prop1} and stuff`;
      return (
        <div>
          <div className="component-prettycomponent"></div>
        </div>
      );
    }
  ```

  * If the component is ONLY displaying JSX without any additional variables or logic occurring in the render function, we can use an implicit return which would look like this:

   * Notice the difference from the first example*

  ```js
      export default ({prop1, prop2, prop,3})=>
        <div>
          <div className="component-prettycomponent"></div>
        </div>;
  ```

  - When attributes get longer than two (> 2) begin and indent on new line:

  ```js
  render() {
    <Component attr1={} attr2={} />
  }

  render() {
    <Component
      attr1={}
      attr2={}
      attr3={}
    />
  }
  ```
  - Always add PropTypes to the Element, Component, or Container this acts as an API and will help with debugging.

  ```js
  class IamComponent extends Component {
    static propTypes = {
      action: PropTypes.func.isRequired,
      anotherAction: PropTypes.func.isRequired,
      state: PropTypes.object.isRequired
    };

    render() {

    }
  }
  ```
