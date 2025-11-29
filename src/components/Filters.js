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
 <div className="d-flex  gap-3 justify-content-center my-3">
  <select className="form-select w-50 w-sm-auto" style={{maxWidth:'200px'}} onChange={handleTypeChange}>
    <option value="All">All</option>
    <option value="income">Income</option>
    <option value="expense">Expense</option>
  </select>

  <input
    type="text"
    className="form-control w-50 w-sm-auto"
    style={{ border: "none", outline: "none",maxWidth:'200px' }}
    onFocus={(e) => (e.target.type = "date")}
    onBlur={(e) => !e.target.value && (e.target.type = "text")}
    placeholder="Select Date"
    onChange={handleDateChange}
    value={state.filter.date}
  />
</div>

  );
};

export default Filters;
