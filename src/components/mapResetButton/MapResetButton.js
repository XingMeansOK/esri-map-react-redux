import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './mapresetbutton.cssmodule.sass';

class MapResetButton extends React.PureComponent {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    /*
    点击该组件，会dispatch出mapWithInitialState(true)这一action，
    对应的reducer处理后，会修改state，因为state改变，EsriMapView组件的render方法就会被
    被调用，进而复位地图
    */
    this.props.actions.mapWithInitialState(true);
  }

  render() {
    // 传进来的是个对象{mapWithInitialState: bool}
    const mapWithInitialState = this.props.mapWithInitialState.mapWithInitialState;
    return (
      <div
        styleName={
          mapWithInitialState
          ? "mapresetbutton-component2"
          : "mapresetbutton-component"}
        onClick={this.handleClick}>
      </div>
    );
  }
}
// styleName中貌似不可以有两个类名
MapResetButton.displayName = 'MapResetButtonMapResetButton';
MapResetButton.propTypes = {};
MapResetButton.defaultProps = {};

export default cssmodules(MapResetButton, styles);
