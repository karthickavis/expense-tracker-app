import {useContext} from 'react'
import ExpenseContext from '../context/ExpenseContext'
const Summary = () => {
  const { state } = useContext(ExpenseContext);

  const income = state.transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0)
    .toFixed(2);

  const expense = state.transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0)
    .toFixed(2);

  const balance = state.transactions
    .reduce((acc, t) => (t.type === "income" ? acc + t.amount : acc - t.amount), 0)
    .toFixed(2);

  return (
    <div className="text-center my-3">
      <h4 className="text-dark">Balance: ₹{balance}</h4>
      <div className="d-flex justify-content-around mt-2">
        <div className="text-success">Income: ₹{income}</div>
        <div className="text-danger">Expense: ₹{expense}</div>
      </div>
    </div>
  );
};

export default Summary;