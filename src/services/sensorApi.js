import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { baseQuery } from "./baseQuery";

export const sensorApi = createApi({
		reducerPath: 'sensorApi',
		baseQuery,
		endpoints: (builder) => ({
			getDataHourly: builder.query({
				query: (payload) => ({
					url: `/data/hourly/${payload.warehouseId}`,
				})
			}),
			getDataDaily: builder.query({
				query: (payload) => ({
					url: `/data/daily/${payload.warehouseId}`,
				})
			}),
			getDataMonthly: builder.query({
				query: (payload) => ({
					url: `/data/monthly/${payload.warehouseId}`,
				})
			}),
			createNewSensor: builder.mutation({
				query: (payload) => ({
					url: `/sensors/add/${payload.warehouseId}`,
					method: 'POST',
					body: {
						name: payload.name,
						type: payload.type,
						locationId: payload.warehouseId,
					}
				})
			}),
			updateSensor: builder.mutation({
				query: (payload) => ({
					url: `/sensors/update/${payload.warehouseId}/${payload.sensorId}`,
					method: 'POST',
					body: {
						name: payload.name,
						locationId: payload.warehouseId,
					}
				})
			}),
			deleteSensor: builder.mutation({
				query: (payload) => ({
					url: `/sensors/delete/${payload.warehouseId}/${payload.sensorId}`,
					method: 'DELETE',
				})
			})
		})
});

export const {
	useCreateNewSensorMutation,
	useDeleteSensorMutation,
	useGetDataDailyQuery,
	useGetDataHourlyQuery,
	useGetDataMonthlyQuery,
	useLazyGetDataDailyQuery,
	useLazyGetDataHourlyQuery,
	useLazyGetDataMonthlyQuery,
	useUpdateSensorMutation,
} = sensorApi;