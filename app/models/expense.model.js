const mongoose = require('mongoose');

const ExpenseSchema = mongoose.Schema({
    note: String,
    amount : Number,
    date : Date
}, {
    timestamps: true
});

module.exports = mongoose.model('Expenses', ExpenseSchema);