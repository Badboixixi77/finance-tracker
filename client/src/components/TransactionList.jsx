function TransactionList({ transactions, onDelete }) {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="transaction-list">
      <h3>Transactions</h3>
      {transactions.length === 0 ? (
        <p className="empty">No transactions yet</p>
      ) : (
        <ul>
          {transactions.map((t) => (
            <li key={t._id} className={`transaction-item ${t.type}`}>
              <div className="transaction-info">
                <span className="description">{t.description}</span>
                <span className="category">{t.category}</span>
                <span className="date">{formatDate(t.date)}</span>
              </div>
              <div className="transaction-amount">
                <span className={t.type}>
                  {t.type === 'income' ? '+' : '-'}₦{t.amount.toFixed(2)}
                </span>
                <button onClick={() => onDelete(t._id)} className="delete-btn">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionList;
