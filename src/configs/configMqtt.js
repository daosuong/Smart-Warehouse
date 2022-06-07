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
