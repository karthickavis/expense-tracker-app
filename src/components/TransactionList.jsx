import { useContext } from "react";
import TransactionItem from "./TransactionItem";
import ExpenseContext from "../context/ExpenseContext";

const TransactionList = () => {
  const { state } = useContext(ExpenseContext);
  const { transactions, filter } = state;

  const filtered = transactions.filter((t) => {
    const isTypeMatch =
      filter.type === "All" || t.type === filter.type;
    const isDateMatch = filter.date === "" || t.date === filter.date;
    return isTypeMatch && isDateMatch;
  });

  return (
    <ul className="list-group">
      {filtered.length === 0 && (
        <li className="list-group-item text-center">
          No matching transactions
        </li>
      )}
      {filtered.map((t) => (
        <TransactionItem key={t.id} transaction={t} />
      ))}
    </ul>
  );
};

export default TransactionList;
