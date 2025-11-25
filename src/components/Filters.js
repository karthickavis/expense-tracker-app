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
        className="form-control w-auto"
       style={{
    color: "#000",
    background: "#fff",
    opacity: 1,
    display: "block"
  }}
  onFocus={(e) => (e.target.type = "date")}
  onBlur={(e) => {
    if (!e.target.value) e.target.type = "text";
  }}
 
  placeholder="Select Date"
        onChange={handleDateChange}
        value={state.filter.date}
      />
    </div>
  );
};

export default Filters;
