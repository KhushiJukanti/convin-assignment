const Expense = require('../models/expense')
const { Parser } = require('json2csv');

const addExpense = async (req, res) => {
    const { description, amount, splitMethod, splits, createdBy, participants } = req.body;
    try {
        const expense = new Expense({ description, amount, splitMethod, splits, createdBy, participants });
        await expense.save();
        res.status(201).json(expense);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const userExpense = async (req, res) => {
    try {
        const expenses = await Expense.find({ participants: req.params.userId });
        res.status(201).json(expenses);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getAllExpense = async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.status(201).json(expenses);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const Balancesheet = async (req, res)=>{
    try {
        const expenses = await Expense.find().populate('createdBy participants');
        const balanceSheet = [];
    
        expenses.forEach(expense => {
          const { description, amount, splitMethod, splits, createdBy, participants } = expense;
          participants.forEach(participant => {
            const balanceEntry = {
              description,
              amount,
              splitMethod,
              createdBy: createdBy.name,
              participant: participant.name,
              participantEmail: participant.email,
              participantMobile: participant.mobile,
              owedAmount: splits.get(participant._id.toString())
            };
            balanceSheet.push(balanceEntry);
          });
        });
    
        const fields = ['description', 'amount', 'splitMethod', 'createdBy', 'participant', 'participantEmail', 'participantMobile', 'owedAmount'];
        const json2csvParser = new Parser({ fields });
        const csv = json2csvParser.parse(balanceSheet);
    
        res.setHeader('Content-Disposition', 'attachment; filename=balance-sheet.csv');
        res.setHeader('Content-Type', 'text/csv');
        res.status(200).send(csv);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}


module.exports = {addExpense, userExpense, getAllExpense, Balancesheet}


// "description":"Dinner at Italian Restaurant",
//    "amount": 150.00,
//    "splitMethod": "equal",
//    "splits":