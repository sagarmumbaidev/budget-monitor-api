const Category = require('../models/category.model');

// Create and Save a new Expense
exports.create = (req, res) => {
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Category can not be empty"
        });
    }

    // Create a Expense
    const category = new Category({
        name: req.body.name 
    });

    // Save Expense in the database
    category.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while adding new category."
        });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Category.find()
    .then(category => {
        res.send(category);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving category."
        });
    });
};

 // Find a single note with a noteId
exports.findOne = (req, res) => {
    Category.findById(req.params.expenseId)
    .then(category => {
        if(!category) {
            return res.status(404).send({
                message: "Category not found with id " + req.params.categoryId
            });            
        }
        res.send(category);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Category not found with id " + req.params.categoryId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving category with id " + req.params.categoryId
        });
    });
};