import { createAction } from 'utils';
import { fromJS } from 'immutable';

export const TOGGLE_SIDEBAR = 'tool/TOGGLE_SIDEBAR';
export const OPEN_LAYER = 'tool/OPEN_LAYER';
export const CLOSE_LAYER = 'tool/CLOSE_LAYER';

export const ERRORS = 'tool/ERRORS';
export const FORM_ERRORS = 'tool/FORM_ERRORS';
export const CLEAR_FORM_ERRORS = 'tool/CLEAR_FORM_ERRORS';
export const CLEAR_LAYER_FORM_ERRORS = 'tool/CLEAR_LAYER_FORM_ERRORS';

export const tool = {
  toggleSidebar: createAction(TOGGLE_SIDEBAR),
  openLayer: createAction(OPEN_LAYER),
  closeLayer: createAction(CLOSE_LAYER),

  setErrors: createAction(ERRORS),
  setFormErrors: createAction(FORM_ERRORS),
  clearFormErrors: createAction(CLEAR_FORM_ERRORS),
};


export const getErrorMessageFormat = (data, type) => {
  if (data && data.error && data.error.errorMessage) {
    return data.error.errorMessage;
  }
  return `Unable to ${type}`;
};

function getErrorMessage(data) {
  if (data && data.body && data.body.message) {
    return data.body.message;
  } if (data && data.error && data.error.errorMessage) {
    return data.error.errorMessage;
  } else if (data && data.message) {
    return data.message;
  }

  return data;
}

export const initialState = fromJS({
  isSidebarVisible: true,
  showLayer: false,
  layerData: {},
  errors: {},
  layerErrors: {},
  system: {
    first: '',
    second: '',
  },
});

export default function toolReducer(state = initialState, { type, data }) {
  switch (type) {
    case TOGGLE_SIDEBAR:
      return state.set('isSidebarVisible', !state.get('isSidebarVisible'));

    case OPEN_LAYER:
      return state.merge({
        showLayer: true,
        layerErrors: {},
        layerData: fromJS(data),
      });

    case CLOSE_LAYER:
      return state.merge({
        showLayer: false,
        layerData: {},
      });

    case FORM_ERRORS:
      return state.merge({ errors: data });

    case ERRORS:
      return state.merge({ errors: {
        messages: getErrorMessage(data),
      } });

    case CLEAR_FORM_ERRORS:
      return state.merge({ errors: {} });

    case CLEAR_LAYER_FORM_ERRORS:
      return state.merge({ layerErrors: {} });

    default:
      return state;
  }
}
