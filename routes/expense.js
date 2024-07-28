const express = require('express');
const router = express.Router();
const ExpenseController = require('../controllers/expense')

router.post('/', ExpenseController.addExpense);

router.get('/user/:userId', ExpenseController.userExpense);

router.get('/', ExpenseController.getAllExpense);

router.get('/balance-sheet', ExpenseController.Balancesheet);


module.exports = router;