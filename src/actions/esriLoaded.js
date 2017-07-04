import { ESRI_LOADED } from './const';

function action(parameter) {
  return { type: ESRI_LOADED, parameter };
}

module.exports = action;
