import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { transactionAPI } from '../services/api';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';

function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    fetchTransactions();
  }, []);

  useEffect(() => {
    calculateBalance();
  }, [transactions]);

  const fetchTransactions = async () => {
    try {
      const { data } = await transactionAPI.getAll();
      setTransactions(data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const calculateBalance = () => {
    const total = transactions.reduce((acc, t) => {
      return acc + (t.type === 'income' ? t.amount : -t.amount);
    }, 0);
    setBalance(total);
  };

  const handleAddTransaction = async (transaction) => {
    try {
      const { data } = await transactionAPI.create(transaction);
      setTransactions([data, ...transactions]);
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  const handleDeleteTransaction = async (id) => {
    try {
      await transactionAPI.delete(id);
      setTransactions(transactions.filter(t => t._id !== id));
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Finance Tracker</h1>
        <div className="user-info">
          <span>Welcome, {user?.name}</span>
          <button onClick={logout}>Logout</button>
        </div>
      </header>

      <div className="balance-card">
        <h2>Current Balance</h2>
        <p className="balance">₦{balance.toFixed(2)}</p>
      </div>

      <TransactionForm onAdd={handleAddTransaction} />
      <TransactionList 
        transactions={transactions} 
        onDelete={handleDeleteTransaction}
      />
    </div>
  );
}

export default Dashboard;
