const foodModel = require('../models/food.model');
const categoryModel = require('../models/category.model');

module.exports = {
    // Create a new food item
    createFood: async (req, res) => {
        try {
            const body = req.body;
            const newFood = await foodModel.create(body);
            // Redirect back to the food list page after creation
            res.redirect('/foods');
        } catch (error) {
            console.error('Error creating food:', error);
            res.status(500).send('Failed to create food.');
        }
    },

    // Get all food items and categories
    getFoods: async (req, res) => {
        try {
            const foods = await foodModel.find().populate("category_id");
            const categories = await categoryModel.find(); 
            res.render("food", { foods, categories });
        } catch (error) {
            console.error('Error fetching foods:', error);
            res.status(500).send('Failed to fetch foods.');
        }
    },

    // Update an existing food item
    updateFood: async (req, res) => {
        try {
            const id = req.params.id;
            const body = req.body;
            const updatedFood = await foodModel.findByIdAndUpdate(id, body, { new: true });
            if (!updatedFood) {
                return res.status(404).send('Food item not found.');
            }
            // Redirect back to the food list page after update
            res.redirect('/foods');
        } catch (error) {
            console.error('Error updating food:', error);
            res.status(500).send('Failed to update food.');
        }
    },

    // Delete a food item
    deleteFood: async (req, res) => {
        try {
            const id = req.params.id;
            const deletedFood = await foodModel.findByIdAndDelete(id);
            if (!deletedFood) {
                return res.status(404).send('Food item not found.');
            }
            // Redirect back to the food list page after deletion
            res.redirect(`/foods`);
        } catch (error) {
            console.error('Error deleting food:', error);
            res.status(500).send('Failed to delete food.');
        }
    }
};
