import axios from 'axios';
import { action, decorate, observable } from 'mobx';

import { BusInfo, Viewport } from './types';

const initialViewport: Viewport = {
  height: window.innerHeight,
  latitude: 49.24,
  longitude: -123.121,
  width: window.innerWidth,
  zoom: 12
};

class Store {
  public buses: BusInfo[] = [];
  public viewport: Viewport;
  public error: boolean;

  constructor() {
    this.updateBusLocations();
    this.viewport = initialViewport;
    this.error = false;
  }

  public updateBusLocations = async () => {
    try {
      this.buses = await axios.get("api/buses").then(res => res.data);
      this.error = false;
    } catch (err) {
      this.error = true;
    }
  };

  public setViewport = (newViewport: Viewport) => {
    this.viewport = {
      ...this.viewport,
      ...newViewport
    };
  };
}

decorate(Store, {
  buses: observable,
  error: observable,
  setViewport: action,
  updateBusLocations: action,
  viewport: observable
});

const store = new Store();

export default store;
