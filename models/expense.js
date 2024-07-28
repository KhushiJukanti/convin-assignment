const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  splitMethod: { type: String, enum: ['equal', 'exact', 'percentage'], required: true },
  splits: { type: Map, of: Number, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'UserList', required: true },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserList' }],
});

const Expense = mongoose.model('Expense', expenseSchema);
module.exports = Expense;
