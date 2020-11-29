// • All customers with a particular name
// • All customers with a particular street
// • All customers with that have bought a particular car make
// • All customers with that have bought a particular car model
// • All customers that have made a purchase from a particular sales person (by sales person name)

export const filterOptions = {
  customerName: {
    name: 'Customer name',
    method: (search, row) => {
      const fullName = `${row.customer.name} ${row.customer.surname}`
      return fullName.toLowerCase().includes(search.toLowerCase())
    }
  },
  customerStreet: {
    name: 'Customer street',
    method: (search, row) => {
      return row.customer.address.toLowerCase().includes(search.toLowerCase())
    }
  },
  salesPersonName: {
    name: 'Sales person name',
    method: (search, row) => {
      return row.salesPerson.name.toLowerCase().includes(search.toLowerCase())
    }
  },
  carMake: {
    name: 'Car make',
    method: (search, row) => {
      return row.purchases.some((purchase) => purchase.make.toLowerCase().includes(search.toLowerCase()))
    }
  },
  carModel: {
    name: 'Car model',
    method: (search, row) => {
      return row.purchases.some((purchase) => purchase.model.toLowerCase().includes(search.toLowerCase()))
    }
  }
}