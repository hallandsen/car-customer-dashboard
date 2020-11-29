import './App.scss'
import rows from './data/scheme-sketch.json'
import DataTable from './components/DataTable'

// • All customers with a particular name
// • All customers with a particular street
// • All customers with that have bought a particular car make
// • All customers with that have bought a particular car model
// • All customers that have made a purchase from a particular sales person (by sales person name)


function App() {
  return (
    <div className='App'>
      <h1 >
        🏎️ 🚙 🚗
      </h1>
      <DataTable rows={rows} />
    </div>
  )
}

export default App
