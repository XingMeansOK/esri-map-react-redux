/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import mapWithInitialState from '../actions/mapWithInitialState.js';
import esriLoaded from '../actions/esriLoaded.js';
const actions = {
  esriLoaded,
  mapWithInitialState
};
module.exports = actions;
