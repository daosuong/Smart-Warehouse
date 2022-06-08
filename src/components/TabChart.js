import Graph from './Graph';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGetSensorDataLogQuery } from '../services/sensorApi'
import { saveSensorDataLog } from '../redux/slices/warehouseSlice';
import { DAILY, MONTHLY, HOURLY } from '../constants'

const hourlyData = [
  '4:00',
  '5:00',
  '6:00',
  '7:00',
  '8:00',
  '9:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
].map((i) => {
  const temper = -10 + Math.random() * 40;
  const humid = 10 + Math.random() * 70;
  return {
    name: i,
    temper,
    humid,
    amt: Math.floor(Math.random() * 10),
  };
});

const dailyData = [
  '1st',
  '2nd',
  '3rd',
  '4th',
  '5th',
  '6th',
  '7th',
  '6th',
  '9th',
].map((i) => {
  const temper = -10 + Math.random() * 40;
  const humid = 10 + Math.random() * 70;
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
  const temper = -10 + Math.random() * 40;
  const humid = 10 + Math.random() * 70;
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
      console.log(sensorDataLog.sensorDataLog);
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
          <Graph name="Hourly" graphData={hourlyData}/>
        </div>

        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <Graph name="Daily" graphData={dailyData}/>
        </div>

        <div
          className={toggleState === 3 ? "content active-content" : "content"}
        >
          <Graph name="Monthly" graphData={monthlyData}/>
        </div>
      </div>
    </div>
  );
}
