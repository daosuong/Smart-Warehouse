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
} = actions;

export default reducer;
