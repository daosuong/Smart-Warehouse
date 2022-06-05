import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  equipmentData: [],
  hourlyData: [],
  dailyData: [],
  monthlyData: [],
  location: [],
  data: [],
  detailData: [],
};

const warehousesSlice = createSlice({
  name: 'warehouse',
  initialState,
  reducers: {
    saveEquipmentData(state, action) {
      state.equipmentData = action.payload;
    },
    saveSensorDataLog(state, action) {
      state.hourlyData = action.payload.hourlyData;
      state.dailyData = action.payload.dailyData;
      state.monthlyData = action.payload.monthlyData;
    },
    saveHourlyData(state, action) {
      state.hourlyData = action.payload;
    },
    saveDailyData(state, action) {
      state.dailyData = action.payload;
    },
    saveMonthlyData(state, action) {
      state.monthlyData = action.payload;
    },
    saveLocation(state, action) {
      state.location = action.payload;
    },
    saveData(state, action) {
      state.data = action.payload;
    },
    saveDetailData(state, action) {
      state.detailData = action.payload;
    },
  },
});

const { actions, reducer } = warehousesSlice;

export const {
  saveDailyData,
  saveData,
  saveLocation,
  saveDetailData,
  saveEquipmentData,
  saveHourlyData,
  saveMonthlyData,
  saveSensorDataLog,
} = actions;

export default reducer;
