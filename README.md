# Buses live

Displays a map of Vancouver, BC with buses location. Data is fetched from Translink Open API.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Application requires node to be installed on local machine. Follow the instruction on  [node.js](https://nodejs.org) to install. To make sure node is installed run in terminal:

```
node --version
```

### Installing

Follow this steps to get it running. Clone the source repository from Github.
```
git clone https://github.com/arur/buses-live.git
cd buses-live
```

To install dependencies

```
npm i && cd client && npm i && cd ..

touch .env && touch client/.env
```
In .env file add:
```
REACT_APP_MAPBOX_ACCESS_TOKEN=your.mapbox.key.here
TRANSLINK_KEY=your.translink.key.here
```
In client/.env file add:
```
REACT_APP_MAPBOX_ACCESS_TOKEN=your.mapbox.key.here
```

To run develoment server
```
npm run dev
```
To run production version on local machine.
```
cd client && npm run build
cd ..
NODE_ENV=production node server.js
```

## Deployment

Application is configured for easy deployment to Heroku.

## Built With

* [create-react-app-typescript](https://github.com/wmonk/create-react-app-typescript)
* [react-map-gl](https://github.com/uber/react-map-gl)
* [mobx](https://mobx.js.org/)
* [axios](https://github.com/axios/axios)

## Authors

* **Artur Hayrapetyan**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thank to Alexey Indeev and Spare for idea