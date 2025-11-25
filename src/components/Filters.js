import { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";

const Filters = () => {
  const { state, dispatch } = useContext(ExpenseContext);

  const handleTypeChange = (e) => {
    dispatch({ type: "SET_FILTER", payload: { type: e.target.value } });
  };

  const handleDateChange = (e) => {
    dispatch({ type: "SET_FILTER", payload: { date: e.target.value } });
  };

  return (
    <div className="d-flex gap-3 justify-content-center my-3">
      <select className="form-select w-auto" onChange={handleTypeChange}>
        <option value="All">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input
        type="date"
        className="form-control w-auto bg-white text-dark"
        onChange={handleDateChange}
        value={state.filter.date}
      />
    </div>
  );
};

export default Filters;
