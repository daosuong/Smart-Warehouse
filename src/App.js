import './App.css';
import React, { useEffect } from "react";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Signup from './components/SignUp';
import Detail from './components/Detail';
import Control from './components/Control';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useGetWarehousesQuery } from "./services/warehouseApi";
import { saveLocation } from "./redux/slices/warehouseSlice";
import { useDispatch } from 'react-redux';
// import { Connector } from 'mqtt-react-hooks';
// import { client } from './configs/configMqtt';
// import { subscribeFeed } from './services/subMqtt';

import { connect } from 'mqtt'

console.log('imported mqtt')

const host = 'io.adafruit.com'
const port = '1883'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`
const connectUrl = `mqtt://${host}:${port}`

export const client = connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: 'truongtruong230401',
  password: 'aio_EWAx30J4vRXxXQmxiYIi8syBq1cI',
  reconnectPeriod: 1000,
})

export const AIO_USERNAME = "truongtruong230401"
export const AIO_KEY = "aio_EWAx30J4vRXxXQmxiYIi8syBq1cI"

export const FEED_TEMP = AIO_USERNAME + "/feed/smart-warehouse.bbc-temp"
export const FEED_HUMIDITY = AIO_USERNAME + "/feed/smart-warehouse.bbc-humi"
export const FEED_LIGHT = AIO_USERNAME + "/feed/smart-warehouse.bbc-light"
export const FEED_GAS = AIO_USERNAME + "/feed/smart-warehouse.bbc-gas"
export const FEED_CONDITION = AIO_USERNAME + "/feed/smart-warehouse.bbc-condition"
export const FEED_LED = AIO_USERNAME + "/feed/smart-warehouse.bbc-led"
export const FEED_DOOR = AIO_USERNAME + "/feed/smart-warehouse.bbc-door"

export const topics = [
  FEED_TEMP,
  FEED_HUMIDITY,
  FEED_LIGHT,
  FEED_GAS,
  FEED_CONDITION,
  FEED_LED,
  FEED_DOOR,
]


// subscribeFeed(client);

export default function App() {
	const dispatch = useDispatch();
	const { data } = useGetWarehousesQuery();

	useEffect(() => {
		if(data) {
			dispatch(saveLocation(data.warehouseList));
		}
	}, [data]);

  useEffect(() => {
  }, [])


  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/detail" element={<Detail/>} /> 
        <Route path="/control" element={<Control/>} /> 
      </Routes>
    </Router>
  );
}