# modules

> module <- is named so to avoid naming clash during imports. This way webpack doesn't have to check node_modules and then check local scope.

When working with redux it's usually a common practice to abstract the process into: `actions/*`, `constants/*`, and `reducers/*` directories. Starting with declaring and exporting a constant -> then importing constant and creating and exporting an action ->  then importing the action and constant and then exporting the reducer.

This is tiresome, and can get really messy at scale. So a nice alternative is the proposed [reducks](https://github.com/erikras/ducks-modular-redux) convention. Where you group the mechanics encompassing redux for easy organization, testability, and sanity.

Caveats:
* reducers still have to be imported on the `index.js` in the root of `reducks/`.
* Sagas being used inside a reducks file has to be imported in the `index.js` in the root of `sagas/`;


> A sub directory is comprised of a constant, action, reducer and or saga. And usually will be one to one association to the container it is imported upon.

Example of a sub directory:


```javascript
/* index.js */

// Constant
export const NAME_OF_ACTION = 'NAME_OF_ACTION';

// Action
const containerName  = {
  doSomething: _.action(CONSTANT, data, path)
};

// Saga
export function* containerNameSaga() {
  while (true) {
    try {
      yield take(NAME_OF_ACTION);
      yield call(xhr, { uri: 'path', data: {} });
      yield put(newAction);
    } catch(e) {
      yield put(newAction);
    }
  }
}

// Reducer
const initialState = Immuable.fromJS({
    key: 'value'
});

export default function containerNameReducer(state = initialState, action) {
  switch(action.type) {
    case NAME_OF_ACTION:
      return state.set('key', action.data.value);
    default:
      return state;
  }
}
```
* See how easy that is to read? It's better than having 3 to 4 files open at a time to read.
* Everything is being exported to expose for testing, thereby everything can be imported from this single file to test.

* Things to take note of:
  - Actions are encapsulated in an object, for logical context scoping and easy export/import, also allows for tests to iterate.
  - Action names and constant names should be the same except for casing.
  - The saga will always have `Saga` appended to the end of the name.
  - The reducer will always have `Reducer` appended to the end of the name.
  - The state returned from the reducer should always be a deep immutable object.

A module sub directory `index.js` is  allowed to import the following stuff:
* `services/*` -> This will allow for an "action creater"/saga to be executed.
* `{ fork, call, take, put, cps }` -> these are for redux-sagas
* `Immutable` -> We want our state to be immutable
* `utils/` -> These help cut down on boilerplate code i.e. `createAction(CONST, path)`


Don't import:
* `constants`
* `actions`
* `reducers`
* `sagas`

# module/index.js

> This file acts as a catalog for all reducers and then exported to be imported in `store/`.

The only things allowed to be imported is:
`{ combineReducers } from 'redux'` -> standard redux convention.
` ${name of sub directory} from './sub-directory'` -> reducers that are `export default` in each sub directories index.js.


# sagas

> This directory is literally just an index for all existing sagas so that they may be imported for the redux store middleware.

A [redux-saga](https://github.com/yelouafi/redux-saga) is an alternative Side Effect model for Redux applications. Instead of dispatching thunks which get handled by the redux-thunk middleware. You create sagas to gather all your Side Effects logic in a central place. They are created using function generators, and allow for easier testing and predictability.

Sagas work differently from common redux middleware such as `thunk` and `promises`, they are not fired from within Action Creators but are started with your application and choose what user actions to watch. They are like daemon tasks that run in the background and choose their own logic of progression.


In `sagas.js` the only thing allowed to import is:
* `{ ${name}Saga }` -> A saga from a `modules/` file.

Don't import:
* `* ! saga` -> If it's not a saga it does not go here!
