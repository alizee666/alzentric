import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import React from 'react';

import { getCurrentLocale, getLocaleData } from 'grommet/utils/Locale';
import { IntlProvider } from 'react-intl';

import routes from 'routes';
import store from 'store';
import ReduxDevTools from 'ReduxDevTools';
import { syncHistoryWithStore } from 'react-router-redux';

import 'assets/styles/styles.scss';

const history = syncHistoryWithStore(browserHistory, store);

const App = () => {
  const mergeLocaleData = (locale) => {
    /* eslint-disable import/no-dynamic-require */
    let messages = require(`messages/${locale}.json`);
    const grommetIndexMessages = require(`grommet-index/messages/${locale}.js`);
    /* eslint-enable import/no-dynamic-require */
    messages = Object.assign(messages, grommetIndexMessages);
    return getLocaleData(messages, locale);
  };

  let locale = getCurrentLocale();
  let localeData;
  try {
    localeData = mergeLocaleData(locale);
  } catch (e) {
    locale = 'en-US';
    localeData = mergeLocaleData(locale);
  }

  return (
    <div>
      <Provider store={store}>
        <IntlProvider locale={localeData.locale} messages={localeData.messages}>
          <Router history={history}>{routes}</Router>
        </IntlProvider>
      </Provider>
      {process.env.DEBUG && <ReduxDevTools store={store} />}
    </div>
  );
};

export default App;
