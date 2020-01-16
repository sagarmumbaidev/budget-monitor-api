const Expense = require('../models/expense.model');

// Create and Save a new Expense
exports.create = (req, res) => {
    // Validate request

    // if(!req.body.title) {
    //     return res.status(400).send({
    //         message: "Expense can not be empty"
    //     });
    // }

    // Create a Expense
    const expense = new Expense({
        note: req.body.note,
        amount :req.body.amount,
        date : req.body.date || new Date()
    });

    // Save Expense in the database
    expense.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while adding new expense."
        });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Expense.find()
    .then(expenses => {
        res.send(expenses);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving expenses."
        });
    });
};

 // Find a single note with a noteId
exports.findOne = (req, res) => {
    Expense.findById(req.params.expenseId)
    .then(expense => {
        if(!expense) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.expenseId
            });            
        }
        res.send(expense);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Expense not found with id " + req.params.expenseId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving expense with id " + req.params.expenseId
        });
    });
};
/**
 * 
 *
// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Find note and update it with the request body
    Note.findByIdAndUpdate(req.params.noteId, {
        title: req.body.title || "Untitled Note",
        content: req.body.content
    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.noteId
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Note.findByIdAndRemove(req.params.noteId)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.noteId
        });
    });
};
 */
