import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './esrimapview.cssmodule.sass';
import { dojoRequire } from "esri-loader";
import ReactDOM from "react-dom";

class EsriMapView extends React.PureComponent {
  constructor() {
    super();
    this.view = null;
    this.viewInitialPara = { zoom: 3, center: [123, 41] }; // 地图的初始参数
    this.createMap = this.createMap.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.actions.mapWithInitialState(false);
  }

  createMap( webMapId = "topo" ) {
    dojoRequire(
      ["esri/Map", "esri/views/MapView"],
      (Map, View) => {

        const view = new View({
          container: ReactDOM.findDOMNode(this.mapContainer),
          map: new Map({
            basemap: webMapId
          }),
          zoom: this.viewInitialPara.zoom, // 初始时显示的级数
          center: this.viewInitialPara.center // 地图中心位置
        }).then( (para) => {
          /*
          View继承了Promise，当Promise对象resolve的时候会传入resolve方法一个参数，
          这个参数最终会传入到then中，
          这里当View对象成功创建之后，View就会resolve。
          然后发现传入的Para参数其实就是一个View实例（就是刚刚then之前创建的这个）
          */
            console.log(para instanceof View);
            para.constraints = { // 这个成员用于添加对地图的约束
              minZoom: 3, //允许的最小级数
            };
            // 这里的这些this不需要担心，箭头函数中的this都是绑定于当前这个EsriMapView实例
            para.on("drag", this.handleChange);
            para.on("mouse-wheel", this.handleChange);
            para.on("resize", this.handleChange);

            this.view = para;

          });

      }
    );
  }

  componentDidMount() {
    this.createMap();
  }
/*
react-css-modules增强了原本的css modules
react-css-modules 将根据 styleName 的值在关联的 styles 对象中查找对应的 CSS Modules，
并为 ReactElement className 属性值添加相匹配的独一无二的 CSS 类名

区别全局 CSS 和 CSS Modules 非常容易，示例如下：
<div className='global-css' styleName='local-module'></div>
*/
  render() {
    // 传进来的是个对象{mapWithInitialState: bool}
    const mapWithInitialState = this.props.mapWithInitialState.mapWithInitialState;
    if( this.view != null && mapWithInitialState) { // 地图已经创建好了，复位地图
      this.view.goTo(this.viewInitialPara, {animate: true});
    }
    return (
      <div
        styleName='map-container'
        ref={node => this.mapContainer = node}
        >
      </div>
    );
  }
}

EsriMapView.displayName = 'EsriMapViewEsriMapView';
// EsriMapView.propTypes = {};
// EsriMapView.defaultProps = {};

export default cssmodules(EsriMapView, styles);
