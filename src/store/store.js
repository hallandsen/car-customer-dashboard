import { configureStore } from '@reduxjs/toolkit'
import customersReducer from './reducers/customersSlice'

export default configureStore({
  reducer: customersReducer,
})
