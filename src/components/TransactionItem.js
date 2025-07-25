import {useContext} from 'react'
import { FaTrash, FaEdit } from "react-icons/fa";
import ExpenseContext from '../context/ExpenseContext';

const TransactionItem = ({ transaction }) => {
  const { dispatch } = useContext(ExpenseContext);

  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${
        transaction.type === "income"
          ? "list-group-item-success"
          : "list-group-item-danger"
      }`}
    >
      {transaction.text} ({transaction.date})
      <div>
        ₹{transaction.amount}
        <FaEdit
          className="mx-2 text-primary cursor-pointer"
          onClick={() => {
            dispatch({
              type: "EDIT",
              payload: { ...transaction, isEditing: true },
            });
          }}
        />
        <FaTrash
          className="text-danger cursor-pointer"
          onClick={() => dispatch({ type: "DELETE", payload: transaction.id })}
        />
      </div>
    </li>
  );
};

export default TransactionItem;
