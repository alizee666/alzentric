import { fork } from 'redux-saga/effects';

/** ******************
 * Main
 ********************/
import {
  mainSaga,
} from 'containers/Main/module';

/** ******************
 * Tool
 ********************/
import {
  toolSagas,
} from 'containers/Tool/module';

export default function* root() {
  yield [
    // main
    fork(mainSaga),

    // tool
    fork(toolSagas),
  ];
}
