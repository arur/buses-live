import 'mapbox-gl/dist/mapbox-gl.css';
import * as React from 'react';
import Map from "./components/Map";
import store from "./Store";

class App extends React.Component {
  public render() {
    return (
        <Map store={store}/>
    );
  }
}

export default App;
