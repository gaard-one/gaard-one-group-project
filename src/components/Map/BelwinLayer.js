import * as React from 'react';
import { loadModules } from '@esri/react-arcgis';
 
export default class BelwinLayer extends React.Component {
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
        loadModules(['esri/Graphic']).then(([ Graphic ]) => {
            // Create a polygon geometry
            const polygon = {
                type: "polygon", // autocasts as new Polygon()
                rings: [//points of polygon, order matters!!
                [-92.82123, 44.93727],
                [-92.81737, 44.93723],
                [-92.81737, 44.93633],
                [-92.82062, 44.93637]
                ]
            };
 
            // Create a symbol for rendering the graphic
            const fillSymbol = {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: [227, 139, 79, 0.2],
                outline: { // autocasts as new SimpleLineSymbol()
                color: [255, 0, 0],
                width: 1
                }
            };
 
            // Add the geometry and symbol to a new graphic
            const graphic = new Graphic({
                geometry: polygon,
                symbol: fillSymbol
            });
 
            this.setState({ graphic });
            this.props.view.graphics.add(graphic);
        }).catch((err) => console.error(err));
    }
 
    componentWillUnmount() {
        this.props.view.graphics.remove(this.state.graphic);
    }
}