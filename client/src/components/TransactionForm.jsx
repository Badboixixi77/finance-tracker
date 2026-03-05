import { useState } from 'react';

const categories = {
  income: ['Salary', 'Freelance', 'Investment', 'Other Income'],
  expense: ['Food', 'Transport', 'Bills', 'Entertainment', 'Shopping', 'Health', 'Other']
};

function TransactionForm({ onAdd }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('Food');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    onAdd({
      description,
      amount: parseFloat(amount),
      type,
      category
    });

    setDescription('');
    setAmount('');
  };

  return (
    <div className="transaction-form">
      <h3>Add Transaction</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          step="0.01"
          required
        />
        <select value={type} onChange={(e) => {
          setType(e.target.value);
          setCategory(categories[e.target.value][0]);
        }}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories[type].map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default TransactionForm;
