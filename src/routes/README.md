# routes- route handling

> These handlers are bound to a `Route` in `./index.js`.

A route handler should do nothing, but only bind the handler to `react-router` through the `Route` component.

A `Route` component is allowed to import the following stuff:
* `import {createAction} from 'utils';`
* `import React from 'react';`
* `import { Route, Redirect, IndexRoute } from 'react-router';`
* `containers/*`

> DO NOT IMPORT ANYTHING ELSE!!!

Don't import:
* `assets/*`
* `element/*`
* `components/*`
* `routes/*`
* `reducks/*`
* `store/*`
* `services/*`

Currently all route handling is implemented by the `react-router` through the `store` on `src/index.js`.
