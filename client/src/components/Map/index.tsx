import './Map.css';

import { observer } from 'mobx-react';
import * as React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import { BusInfo, Viewport } from '../../types';
import Error from '../Error';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || "";

@observer
class Map extends React.Component<any, any> {
  public interval: number;

  public componentDidMount() {
    window.addEventListener("resize", this.resize);
    this.props.store.updateBusLocations();
    this.interval = window.setInterval(() => {
      this.props.store.updateBusLocations();
    }, 15 * 1000);
  }

  public componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
    clearInterval(this.interval);
  }

  public updateViewport = (viewport: Viewport) => {
    this.props.store.setViewport(viewport);
  };

  public resize = () => {
    const viewport = {
      height: window.innerHeight,
      width: window.innerWidth
    };
    this.props.store.setViewport(viewport);
  };

  public render() {
    const { buses, error, viewport } = this.props.store;
    return (
      <div>
        {error && <Error />}
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onViewportChange={this.updateViewport}
        >
          {buses.map((bus: BusInfo) => (
            <Marker
              key={bus.VehicleNo}
              className="bus-marker"
              latitude={bus.Latitude}
              longitude={bus.Longitude}
              offsetLeft={-4}
              offsetTop={-4}
            />
          ))}
        </ReactMapGL>
      </div>
    );
  }
}

export default Map;
