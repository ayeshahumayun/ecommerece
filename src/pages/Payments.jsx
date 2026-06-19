import React, { useState } from 'react';
import { DollarSign, ArrowUpRight, ArrowDownRight, RefreshCcw, CreditCard, Send } from 'lucide-react';
import './Payments.css';

export default function Payments() {
  const [balance, setBalance] = useState(1250000.00);
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'Deposit', amount: 500000, date: 'Oct 15, 2023', status: 'Completed', sender: 'Bank Transfer' },
    { id: 2, type: 'Transfer', amount: -250000, date: 'Oct 14, 2023', status: 'Completed', receiver: 'Tech Startup Inc' },
    { id: 3, type: 'Withdrawal', amount: -10000, date: 'Oct 12, 2023', status: 'Pending', receiver: 'Personal Account' }
  ]);
  const [transferAmount, setTransferAmount] = useState('');

  const handleTransfer = (e) => {
    e.preventDefault();
    if (!transferAmount || isNaN(transferAmount) || transferAmount <= 0) return;
    
    const amount = parseFloat(transferAmount);
    if (amount > balance) {
      alert("Insufficient funds");
      return;
    }

    setBalance(prev => prev - amount);
    setTransactions([
      {
        id: Date.now(),
        type: 'Transfer',
        amount: -amount,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        status: 'Completed',
        receiver: 'New Deal Escrow'
      },
      ...transactions
    ]);
    setTransferAmount('');
  };

  return (
    <div className="payments-page container">
      <div className="page-header">
        <h1><DollarSign className="header-icon" /> Payments & Wallet</h1>
        <p>Manage your deal funding, deposits, and transfers.</p>
      </div>

      <div className="payments-grid">
        <div className="wallet-section">
          <div className="balance-card card">
            <div className="balance-header">
              <span className="text-white-50">Total Balance</span>
              <CreditCard className="text-white-50" />
            </div>
            <h2 className="balance-amount">${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</h2>
            
            <div className="balance-actions mt-4">
              <button className="btn-light d-flex align-center gap-1"><ArrowDownRight size={18}/> Deposit</button>
              <button className="btn-outline-light d-flex align-center gap-1"><ArrowUpRight size={18}/> Withdraw</button>
            </div>
          </div>

          <div className="transfer-card card glass-panel mt-4">
            <h3 className="mb-3">Fund a Deal</h3>
            <form onSubmit={handleTransfer}>
              <div className="form-group mb-3">
                <label>Recipient / Deal</label>
                <select className="form-input w-100">
                  <option>Tech Startup Inc - Series A</option>
                  <option>Green Energy Corp - Seed</option>
                </select>
              </div>
              <div className="form-group mb-3">
                <label>Amount ($)</label>
                <input 
                  type="number" 
                  className="form-input w-100" 
                  placeholder="0.00"
                  value={transferAmount}
                  onChange={(e) => setTransferAmount(e.target.value)}
                />
              </div>
              <button type="submit" className="btn-primary w-100 d-flex justify-center align-center gap-2">
                <Send size={18} /> Transfer Funds
              </button>
            </form>
          </div>
        </div>

        <div className="history-section card glass-panel">
          <div className="d-flex justify-between align-center mb-4">
            <h2>Transaction History</h2>
            <button className="btn-icon"><RefreshCcw size={18} /></button>
          </div>
          
          <div className="transactions-table-wrapper">
            <table className="transactions-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Details</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th className="text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map(tx => (
                  <tr key={tx.id}>
                    <td>
                      <div className="tx-type-icon">
                        {tx.type === 'Deposit' ? <ArrowDownRight className="text-success" /> : <ArrowUpRight className="text-danger" />}
                        <span className="ml-2">{tx.type}</span>
                      </div>
                    </td>
                    <td>{tx.receiver || tx.sender}</td>
                    <td className="text-muted">{tx.date}</td>
                    <td>
                      <span className={`status-pill ${tx.status.toLowerCase()}`}>{tx.status}</span>
                    </td>
                    <td className={`text-right font-weight-bold ${tx.amount > 0 ? 'text-success' : ''}`}>
                      {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
