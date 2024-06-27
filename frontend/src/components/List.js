import React, { useState, useEffect } from 'react';
import 'boxicons';

const initialTransactions = [
  // Add some initial dummy transactions here if needed
  { _id: '1', name: 'Salary', type: 'Income', amount: 5000, color: '#f6ad55' },
  { _id: '2', name: 'Rent', type: 'Expense', amount: 1000, color: '#fc8181' },
  { _id: '3', name: 'Groceries', type: 'Expense', amount: 300, color: '#f6e05e' },
];

export default function List() {
  const [transactions, setTransactions] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      setTransactions(initialTransactions);
      setIsFetching(false);
    }, 1000); // Simulate a delay for fetching data
  }, []);

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction._id !== id));
  };

  const handlerClick = (e) => {
    if (!e.target.dataset.id) return;
    deleteTransaction(e.target.dataset.id);
  };

  let Transactions;
  if (isFetching) {
    Transactions = <div>Fetching</div>;
  } else if (isError) {
    Transactions = <div>Error</div>;
  } else {
    Transactions = transactions.map((v, i) => (
      <Transaction key={i} category={v} handler={handlerClick} />
    ));
  }

  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className='py-4 font-bold text-xl'>History</h1>
      {Transactions}
    </div>
  );
}

function Transaction({ category, handler }) {
  if (!category) return null;
  return (
    <div className="item flex justify-center bg-gray-50 py-2 rounded-r" style={{ borderRight: `8px solid ${category.color ?? "#e5e5e5"}` }}>
      <button className='px-3' onClick={handler}>
        <box-icon data-id={category._id ?? ''} color={category.color ?? "#e5e5e5"} size="15px" name="trash"></box-icon>
      </button>
      <span className='block w-full'>{category.name ?? ''}</span>
    </div>
  );
}
