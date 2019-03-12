import React from 'react';
import { Map } from '@esri/react-arcgis';
import BelwinLayer from './BelwinLayer.js';
import QrScan from './QrScan.js';

class BaseMap extends React.Component {
    constructor(props) { 
        super(props); 
        this.state = {
            viewProperties: {
                //centers map on belwin land
                center: [-92.819, 44.9365], 
                scale: 4000,
                basemap: 'satellite'
            }
        };
    }

    handleMapLoad(map, view) {
        view.ui.remove("compass");
        // view.ui.remove("zoom");
        // view.ui.remove("navigation-toggle");
    }

    render() {
        return ( //Width and height MUST be explicitly stated for this to work
            <div style={{ width: '90vw', height: '90vh' }}>
              <header>Practice Time!!</header>
                <Map
                    dataFlow="oneWay"
                    viewProperties={this.state.viewProperties}
                    // onLoad={this.handleMapLoad}
                    // onDrag={(e) => { e.stopPropagation() }}
                    // onMouseWheel={(e) => { e.stopPropagation() }}
                >
                  <BelwinLayer />
                  <QrScan />
                </Map> 
            </div>
        );
    }
}

export default BaseMap;