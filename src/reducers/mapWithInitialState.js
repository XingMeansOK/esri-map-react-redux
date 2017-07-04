/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { MAP_WITH_INITIAL_STATE } from '../actions/const';

// 每个reducer中都有一个initialState，reducer最后会合并成一个，initialState最后也会合并成一个State
const initialState = {
  mapWithInitialState: true
}; // 另外要注意这个属性名，必须和这个reducer同名，（可以看看containers中对state的使用）

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);

  switch (action.type) {
    /*
    case YOUR_ACTION: {
      // Modify next state depending on the action and return it
      return nextState;
    }
    */
    case MAP_WITH_INITIAL_STATE: {
      // Modify next state depending on the action and return it
      // 当api加载成功了就返回新的state
      return Object.assign({}, state, { mapWithInitialState: action.parameter });
    }
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
