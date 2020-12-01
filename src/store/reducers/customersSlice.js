import { createSlice } from '@reduxjs/toolkit'
import customers from '../../data/customers.json'
import { filterOptions } from '../../utilities/filterOptions'

export const customersSlice = createSlice({
  name: 'customers',
  initialState: {
    search: '',
    filters: Object.keys(filterOptions).map(key => filterOptions[key]),
    activeFilter: filterOptions.customerName,
    customers: customers
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload
    },
    setActiveFilter: (state, action) => {
      if (state.activeFilter === action.payload) {
        state.activeFilter = null
      } else {
        state.activeFilter = action.payload
      }
    },
  },
})

export default customersSlice.reducer

export const { setSearch, setActiveFilter } = customersSlice.actions

export const selectSearch = state => state.search
export const selectFilters = state => state.filters
export const selectActiveFilter = state => state.activeFilter

export const selectCustomer = id => state => state.customers.find(customer => {
  return customer.customerDetails.created === id
})

const selectCustomersByName = state => state.customers.filter(customer => {
  const fullName = `${customer.customerDetails.name} ${customer.customerDetails.surname}`
  return fullName.toLowerCase().includes(state.search.toLowerCase())
})

const selectCustomersByStreet = state => state.customers.filter(customer =>
  customer.customerDetails.address.toLowerCase().includes(state.search.toLowerCase())
)

const selectCustomersBySalesPerson = state => state.customers.filter(customer =>
  customer.salesPerson.name.toLowerCase().includes(state.search.toLowerCase())
)

const selectCustomersByCarMake = state => state.customers.filter(customer =>
  customer.purchases.some((purchase) => purchase.make.toLowerCase().includes(state.search.toLowerCase()))
)

const selectCustomersByCarModel = state => state.customers.filter(customer =>
  customer.purchases.some((purchase) => purchase.model.toLowerCase().includes(state.search.toLowerCase()))
)

export const selectCustomers = state => {

  switch (state.activeFilter) {
    case filterOptions.customerName:
      return selectCustomersByName(state)

    case filterOptions.customerStreet:
      return selectCustomersByStreet(state)

    case filterOptions.salesPersonName:
      return selectCustomersBySalesPerson(state)

    case filterOptions.carMake:
      return selectCustomersByCarMake(state)

    case filterOptions.carModel:
      return selectCustomersByCarModel(state)

    default:
      return state.customers
  }
}