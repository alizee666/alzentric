import { createAction } from 'utils';

import { fromJS } from 'immutable';

export const TOGGLE_SIDEBAR = 'main/TOGGLE_SIDEBAR';

export const ROUTE_TO = 'main/ROUTE_TO';

export const getRouteFromData = data => data.route;

export const main = {
  routeTo: createAction(ROUTE_TO, getRouteFromData),

  toggleSidebar: createAction(TOGGLE_SIDEBAR),
};

export const initialState = fromJS({
  isVisible: true,
});
