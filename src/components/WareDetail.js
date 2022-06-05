import { useDispatch, useSelector } from 'react-redux';
import Gas from './Gas';
import CurrentTemp from './CurrentTemp';
import Humidity from './Humidity';
import Light from './Light';
import NameCard from './NameCard';
import TabChart from './TabChart';
import AddComponent from './AddComponent';
import { useGetPresentDataQuery } from "../services/sensorApi";
import { useGetEquimentDataQuery } from "../services/equipmentApi";
import { useEffect, useState } from 'react';
import { saveEquipmentData } from '../redux/slices/warehouseSlice';


export default function WareDetail({ warehouseId }) {
  const dispatch = useDispatch();
  const { equipmentData } = useSelector(state => state.warehouse);
  const { data: presentSensorData } = useGetPresentDataQuery({warehouseId: warehouseId});
  const { data: equipmentDataList } = useGetEquimentDataQuery({warehouseId: warehouseId});

  const [sensorOffset, setSensorOffset] = useState({
    lightOffset: 0,
    humidityOffset: 0,
    tempOffset: 0,
    emit: false
  })
  const {
    lightOffset,
    humidityOffset,
    tempOffset,
    emit
  } = sensorOffset;

  useEffect(() => {
    if(equipmentDataList) {
      dispatch(saveEquipmentData(equipmentDataList.equipmentData));
    }
  }, [equipmentDataList])
  useEffect(() => {
    if(presentSensorData) {
      setSensorOffset(prev => ({
        ...prev,
        lightOffset: presentSensorData.presentSensorData.intensityLight,
        humidityOffset: presentSensorData.presentSensorData.humidity,
        tempOffset: presentSensorData.presentSensorData.temperature,
        emit: presentSensorData.presentSensorData.emitGas,
      }))
    }
  }, [presentSensorData])

  return (
    <div className="h-full flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
      <div className="w-full p-2 lg:w-1/4">
        <div className="rounded-lg bg-card h-80">
          <CurrentTemp offset={(tempOffset+15)*100/50}/>
        </div>
      </div>
      <div className="w-full p-2 lg:w-1/4">
        <div className="rounded-lg bg-card h-80">
          <Humidity offset = {humidityOffset}/>
        </div>
      </div>
      <div className="w-full p-2 lg:w-1/4">
        <div className="rounded-lg bg-card h-80">
          <Light offset = {lightOffset}/>
        </div>
      </div>
      <div className="w-full p-2 lg:w-1/4">
        <div className="rounded-lg bg-card h-80">
          <Gas emit={emit}/>
        </div>
      </div>
      {equipmentData.map(
        ({
          id,
          name,
          position,
          ages,
          rise,
          mode,
          imgId,
        }) => (
          <NameCard
            key={id}
            id={id}
            name={name}
            position={position}
            age={ages}
            rise={rise}
            mode={mode}
            imgId={imgId}
          />
        ),
      )}
      
      <div className="w-full p-2 lg:w-2/3">
        <div className="rounded-lg bg-card sm:h-100 h-100">
          <TabChart/>
        </div>
      </div>
      <div className="w-full p-2 lg:w-1/3">
        <div className="rounded-lg bg-card overflow-hidden">
          <AddComponent />
        </div>
      </div>
    </div>
  );
}
