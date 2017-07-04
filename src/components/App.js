import React from 'react';
import YeomanImage from './YeomanImage';
import EsriMapView from './esriMapView/EsriMapView';
import MapResetButton from './mapResetButton/MapResetButton';
import EsriLoader from 'esri-loader-react';
import './app.css';
/*
esri-loader-react是包装esri-loader的react组件
用于预先加载esri的api，并判断是否加载成功。
这里是参照官方给的示例写的
稍作修改：当esri api加载成功之后发出action，用store的state.esriLoaded来表示是否加载成功
state.esriLoaded会作为props传进来
*/

class AppComponent extends React.Component {
  constructor() {
    super();
    this.onEsriApiLoaded = (error) => {
      if (!error) {
        this.props.actions.esriLoaded();
      }
    };
  }

  render() {
    const options = {
      url: 'https://js.arcgis.com/4.3/'
    };
    const actions = this.props.actions;
    const mapWithInitialState = this.props.mapWithInitialState;
    return (
      <div>
        <EsriLoader options={options} ready={this.onEsriApiLoaded} />
        {this.props.esriLoaded ?
          <EsriMapView actions={actions} mapWithInitialState={mapWithInitialState}/>
          : null
        }
        <MapResetButton actions={actions} mapWithInitialState={mapWithInitialState}/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
