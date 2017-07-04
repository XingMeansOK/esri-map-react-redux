/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  esriLoaded,
  mapWithInitialState
} from '../actions/';
import Main from '../components/App';
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    const {actions, esriLoaded, mapWithInitialState} = this.props;
    return <Main actions={actions} esriLoaded={esriLoaded} mapWithInitialState={mapWithInitialState}/>;
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 *
 *  actions（action对象生成器 们）先经过mapDispatchToProps加工一下，(加工前后方法名不变)
 *  加工之后的actions，在生成action对象的之后，就会将action dispatch给reducer
 *  容器组件的mapDispatchToProps方法会将加工之后的actions作为props传给class App（UI组件）
 *  这样UI组件就可以发出action并且交由reducer处理这个action
 *  reducer结合原来的state和收到的action来产生新的state
 *  容器组件的mapStateToProps方法会将store的state作为props传给class App（UI组件）
 *  这样当state改变的时候UI组件就会察觉，并重新渲染
 *  容器组件之所以能过获取到store，是因为其外层用Provider包装起来了（见client.js）
 *  可见，本文件创建的容器组件相当于包装在UI组件class App之外，负责UI组件和store之间的通信
 */
App.propTypes = {
  actions: PropTypes.shape({
    esriLoaded: PropTypes.func.isRequired,
    mapWithInitialState: PropTypes.func.isRequired
  }),
  esriLoaded: PropTypes.shape({}),
  mapWithInitialState: PropTypes.shape({})
};
function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  const props = {
    esriLoaded: state.esriLoaded,
    mapWithInitialState: state.mapWithInitialState
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    esriLoaded,
    mapWithInitialState
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
