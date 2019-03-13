import * as React from 'react';
import { loadModules } from '@esri/react-arcgis';

export default class QrScan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graphic: null
    };
  }

  render() {
    return null;
  }

  componentWillMount() {
    loadModules(['esri/Graphic',
                 "esri/geometry/Point",
                 "esri/symbols/SimpleMarkerSymbol"]).then(([Graphic,
                                                            Point, 
                                                            SimpleMarkerSymbol]) => {
      // Create a point
      const point = new Point({
        longitude: this.props.point.bl_corner_lon,
        latitude: this.props.point.bl_corner_lat
      });

      // Create a symbol for drawing the point
      let markerSymbol = new SimpleMarkerSymbol({
        size: 10,
        style: 'square',
        color: '#647c36',
        outline: null
      });

      // Create a graphic and add the geometry and symbol to it
      var pointGraphic = new Graphic({
        geometry: point,
        symbol: markerSymbol
      });

      this.setState({ graphic: pointGraphic });
      this.props.view.graphics.add(pointGraphic);
    }).catch((err) => console.error(err));
  }

  componentWillUnmount() {
    this.props.view.graphics.remove(this.state.graphic);
  }
}