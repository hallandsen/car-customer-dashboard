import { createSlice } from '@reduxjs/toolkit'
import rows from '../../data/scheme-sketch.json'
import { filterOptions } from '../../utilities/filterOptions'

export const customersSlice = createSlice({
  name: 'customers',
  initialState: {
    search: '',
    filters: Object.keys(filterOptions).map(key => filterOptions[key]),
    activeFilter: null,
    rows: rows
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload
    },
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload
    },
  },
})

export default customersSlice.reducer

export const { setSearch, setActiveFilter } = customersSlice.actions

export const selectSearch = state => state.search
export const selectFilters = state => state.filters
export const selectActiveFilter = state => state.activeFilter

const selectRowsByName = state => state.rows.filter(row => {
  const fullName = `${row.customerDetails.name} ${row.customerDetails.surname}`
  return fullName.toLowerCase().includes(state.search.toLowerCase())
})

const selectRowsByStreet = state => state.rows.filter(row =>
  row.customerDetails.address.toLowerCase().includes(state.search.toLowerCase())
)

const selectRowsBySalesPerson = state => state.rows.filter(row =>
  row.salesPerson.name.toLowerCase().includes(state.search.toLowerCase())
)

const selectRowsByCarMake = state => state.rows.filter(row =>
  row.purchases.some((purchase) => purchase.make.toLowerCase().includes(state.search.toLowerCase()))
)

const selectRowsByCarModel = state => state.rows.filter(row =>
  row.purchases.some((purchase) => purchase.model.toLowerCase().includes(state.search.toLowerCase()))
)

export const selectRows = state => {
  switch (state.activeFilter) {
    case filterOptions.customerName:
      return selectRowsByName(state)
    case filterOptions.customerStreet:
      return selectRowsByStreet(state)
    case filterOptions.salesPersonName:
      return selectRowsBySalesPerson(state)
    case filterOptions.carMake:
      return selectRowsByCarMake(state)
    case filterOptions.carModel:
      return selectRowsByCarModel(state)
    default:
      return state.rows
  }
}