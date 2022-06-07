import Graph from './Graph';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetDataDailyQuery, useGetDataHourlyQuery, useGetDataMonthlyQuery, useGetSensorDataLogQuery } from '../services/sensorApi'
import { saveSensorDataLog } from '../redux/slices/warehouseSlice';
import { DAILY, MONTHLY, HOURLY } from '../constants'

const hourlyData = [
  'Nov',
  'Dec',
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
].map((i) => {
  const temper = 10 + Math.random() * 20;
  const humid = 30 + Math.random() * 70;
  return {
    name: i,
    temper,
    humid,
    amt: Math.floor(Math.random() * 10),
  };
});

const dailyData = [
  'Nov',
  'Dec',
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
].map((i) => {
  const temper = 10 + Math.random() * 20;
  const humid = 30 + Math.random() * 70;
  return {
    name: i,
    temper,
    humid,
    amt: Math.floor(Math.random() * 10),
  };
});

const monthlyData = [
  'Nov',
  'Dec',
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
].map((i) => {
  const temper = 10 + Math.random() * 20;
  const humid = 30 + Math.random() * 70;
  return {
    name: i,
    temper,
    humid,
    amt: Math.floor(Math.random() * 10),
  };
});

export default function TabChart({ warehouseId }) {
  const dispatch = useDispatch();
  const { data: sensorDataLog } = useGetSensorDataLogQuery({warehouseId: warehouseId});
  const [toggleState, setToggleState] = useState('');
  const [dataLog, setDataLog] = useState({
    hourlyData: [],
    dailyData: [],
    monthlyData: [],
  })

  useEffect(() => {
    if(sensorDataLog) {
      dispatch(saveSensorDataLog(sensorDataLog.sensorDataLog))
    }
  }, [sensorDataLog])

  return (
    <div className="containe">
      <div className="bloc-tabs">
        <button
          className={toggleState === HOURLY ? "tabs active-tabs" : "tabs"}
          onClick={() => setToggleState(1)}
        >
          Hourly
        </button>
        <button
          className={toggleState === DAILY ? "tabs active-tabs" : "tabs"}
          onClick={() => setToggleState(2)}
        >
          Daily
        </button>
        <button
          className={toggleState === MONTHLY ? "tabs active-tabs" : "tabs"}
          onClick={() => setToggleState(3)}
        >
          Monthly
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <Graph graphData={hourlyData}/>
        </div>

        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <Graph graphData={dailyData}/>
        </div>

        <div
          className={toggleState === 3 ? "content active-content" : "content"}
        >
          <Graph graphData={monthlyData}/>
        </div>
      </div>
    </div>
  );
}