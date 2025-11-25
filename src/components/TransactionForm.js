
import { useState, useContext, useEffect } from "react";
import ExpenseContext from '../context/ExpenseContext';
const TransactionForm = () => {
  const { state, dispatch } = useContext(ExpenseContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("income");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const editItem = state.transactions.find((t) => t.isEditing);
    if (editItem) {
      setText(editItem.text);
      setAmount(editItem.amount);
      setDate(editItem.date);
      setType(editItem.type);
      setIsEdit(true);
      setEditId(editItem.id);
    }
  }, [state.transactions]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: isEdit ? editId : Date.now(),
      text,
      amount: +amount,
      date,
      type,
    };

    dispatch({ type: isEdit ? "EDIT" : "ADD", payload: newTransaction });

    setText("");
    setAmount("");
    setDate("");
    setType("income");
    setIsEdit(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Description"
        className="form-control mb-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        className="form-control mb-2"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="date"
        className="form-control mb-2 bg-white text-dark"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <select
        className="form-select mb-2"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button className="btn btn-success w-100">
        {isEdit ? "Update" : "Add"} Transaction
      </button>
    </form>
  );
};

export default TransactionForm;