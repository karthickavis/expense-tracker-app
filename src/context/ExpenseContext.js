import  { createContext, useReducer,useEffect } from "react";

const ExpenseContext = createContext();

const initialState = {
  transactions: JSON.parse(localStorage.getItem("transactions")) || [],
  filter: {
    type: "All",
    date: "",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, transactions: [action.payload, ...state.transactions] };
    case "DELETE":
      return {
        ...state,
        transactions: state.transactions.filter((t) => t.id !== action.payload),
      };
    case "EDIT":
      return {
        ...state,
        transactions: state.transactions.map((t) =>
          t.id === action.payload.id ? action.payload : t
        ),
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: {
          ...state.filter,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  }, [state.transactions]);

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;