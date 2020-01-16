const expensesController = require('../controllers/expense.controller');
const categoryController = require('../controllers/category.controller');

const express = require('express');
const router = express.Router();

// Expense routes
router.get('/expenses', expensesController.findAll);
router.post('/expense', expensesController.create);
router.get('/expense/:expenseId', expensesController.findOne);
//router.put('/expenses/:expensesId', expenses.update);
//router.delete('/expenses/:expensesId', expenses.delete);

// Category routes
router.post('/category', categoryController.create);
router.get('/categories', categoryController.findAll);
router.get('/category/:expenseId', categoryController.findOne);

module.exports = router;