import { MAP_WITH_INITIAL_STATE } from './const';

function action(parameter) {
  return { type: MAP_WITH_INITIAL_STATE, parameter };
}

module.exports = action;
