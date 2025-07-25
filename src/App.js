import React from 'react'
import Header from './components/Header'
import Summary from './components/Summary'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import { ExpenseProvider } from './context/ExpenseContext'

import Filters from './components/Filters'
const App = () => {
  return (
    <>
   <ExpenseProvider>
    <div className="container mt-5 p-4 rounded shadow" style={{ backgroundColor: "#f1f1f1" }}>
<Header/>
<Summary/>
<Filters/>
<TransactionForm/>
<TransactionList/>
    </div>
   </ExpenseProvider>
   </>
  )
}

export default App
