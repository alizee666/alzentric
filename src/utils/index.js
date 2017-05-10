import camelCase from 'lodash/camelCase';
import replace from 'lodash/replace';
import compact from 'lodash/compact';

import map from 'lodash/map';
import reduce from 'lodash/reduce';
import sortBy from 'lodash/sortBy';
import zipObject from 'lodash/zipObject';

const {
  APP_NAME,
  APP_VERSION,
} = process.env;

export {
  APP_NAME,
  APP_VERSION,
};

/**
 * intlUtil
 * ({ intl, messages })(key)
 * @return {object} Returns intl.formatMessage().
 */
export const intlUtil = ({ intl, messages, values = { APP_NAME } }) =>
  key => intl.formatMessage(messages[key], values);

/**
 * buildInfo
 * @return {string} Returns name and version set in `process.env`.
 */
export const buildInfo = () => `${APP_NAME}-UI v${APP_VERSION}`;

/**
 * createConst
 * @return {string} Returns path and const.
 */
export const createConst = ({ path, name }) => `${path}/${name}`;

/**
 * buildVersion
 * @returns {string} Returns the version set in `process.env`.
 */
export const buildVersion = () => `v${APP_VERSION}`;

/**
 * portToNumber
 * @param   {target} target to get the port
 * @return  {Object} Object to find port key and convert to number
 */
export const portToNumber = target => reduce(target, (_obj, val, key) => {
  const obj = _obj;
  if (key === 'port' && typeof val === 'string') {
    obj[key] = +val;
  } else {
    obj[key] = val;
  }
  return obj;
}, {});

/**
 * sortKeysBy
 * @param   {Object}    obj         Object to sort by keys
 * @param   {Function}  comparator  Function to compare/sort the elements
 * @return  {Object}
 */
export const sortKeysBy = (obj, comparator) => {
  const keys = sortBy(Object.keys(obj), key =>
    comparator && comparator(obj[key], key) || key,
  );
  return zipObject(keys, map(keys, key => obj[key]));
};

/**
 * action
 * @param  {string} type The action type.
 * @param  {object} data The action payload to send as data.
 * @param  {string} (path) The path to forward location to after action.
 * @return {object}      The action object to be dispatched.
 */
export const action = (type, data, path = null) => {
  const act = { type, data };
  if (path) act.meta = { transition: { pathname: path } };
  return act;
};

/**
 * createAction
 * @param  {string} type            The action type.
 * @param  {string|function} path   Path to forward location to after action.
 * @param  {object} defaultData     Default object to use for data.
 * @return {function}               Action creator function.
 */
export const createAction = (type, path = null, defaultData = {}) => (data = defaultData) => {
  const act = { type, data };
  let valPath;
  if (typeof path === 'function') valPath = path(data);
  if (path) act.meta = { transition: { pathname: valPath || path } };
  return act;
};

/**
 * formatRoutes
 * Creates a formatted collection for sidebarNav to consume
 * @param  {string}  base
 * @param  {array}  routes
 * @param  {object}  messages
 * @param  {boolean} hasIsDisabled
 * @return {link}
 */
export const formatRoutes = (base, routes, messages, hasIsDisabled) =>
  compact(routes.map(({ path }) => {
    const label = messages[camelCase(path)];
    const route = base ? `/${base}/${path}` : `/${path}`;
    const link = { label, route };

    if (!label) return false;
    if (hasIsDisabled) return { ...link, isDisabled: true };
    return link;
  }));

/**
 * toUpperFirst
 * @param str the source string
 * @returns {string} source string to upper case
 */
export const toUpperFirst = (str) => {
  const first = str.charAt(0).toUpperCase();
  return first + str.slice(1);
};

/**
 * $name
 * Get an element by its name.
 * @param  {string} name
 * @return {object}
 */
export const $name = name => document.getElementsByName(name)[0];

/**
 * $getElemIdByName
 * string of input attr id
 * @param  {string} name
 * @return {string}
 */
export const $getElemIdByName = name => $name(name).id;

/**
 * getKey
 * Returns key by position in object
 * @param  {object} obj
 * @param  {number} pos
 * @return {string} key
 */
export const getKey = (obj, pos) => Object.keys(obj)[pos];

/**
 * $getValById
 * Get the value of an element by its id.
 * @param  {string} id
 * @return {string}
 */
export const $getValById = (id) => {
  const input = document.getElementById(id);
  if (input !== null) {
    return input.value;
  }

  return input;
};

/**
 * $val
 * string value of elem or null
 * @param  {string} name
 * @return {null}
 */
export const $val = (name) => {
  let value;

  try {
    const elem = $name(name);

    switch (elem.type) {
      case 'checkbox':
        value = elem.checked;
        break;
      default:
        value = elem.value;
    }
  } catch (e) {
    // console.warn(`$val(${name}) was empty`);
  }

  return typeof value === 'undefined' ? null : value;
};

/**
 * $obj
 * @param  {string} name
 * @return {object}
 */
export const $obj = name => ({ [name]: $val(name) });

/**
 * isMobile
 * checks for mobile screens
 * @return {boolean}
 */
export const isMobile = (() => !!(window && window.orientation))();

/**
 * isTestEnv
 * checks the process's NODE_ENV
 * @return {boolean}
 */
export const isTestEnv = () => process.env.NODE_ENV === 'test';

/**
 * replaceWithCamelize
 * replaces a string val with designated replacement
 * i.e. replaceWithCamelize('Input Server', 'Input', 'test'); // testServer
 * @return {string}
 */
export const replaceAndCamelize = (word, replacing, replaced = '') =>
  camelCase(replace(word, replacing, replaced));

/**
 * isDevEnv
 * checks if the env is development
 * @return {boolean}
 */
export const isDevEnv = () => process.env.NODE_ENV === 'development';
