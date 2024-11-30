
const User = require('../models/user');
// Create a new user
exports.createUser = async (req, res) => {
 const { username, password } = req.body;
 try {
   const user = new User({ username, password });
   const saveduser = await user.save();
   res.status(201).json(saveduser);
 } catch (error) {
   res.status(500).json({ error: 'An error occurred while creating the user' });
 }
};

// Get all users
exports.getAllUser = async (req, res) => {
 try {
   const user = await User.find();
   res.json(user);
 } catch (error) {
   res.status(500).json({ error: 'An error occurred while fetching user' });
 }
};

// Get a specific user by ID
exports.getUser = async (req, res) => {
 const userId = req.params.id;
 try {
   const user= await User.findById(userId);
     if (!user) {
       return res.status(404).json({ error: 'User not found' });
       }
       res.json(user);
 } catch (error) {
   res.status(500).json({ error: 'An error occurred while fetching the user' });
 }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
 const userId = req.params.id;
 const { title, description } = req.body;
 try {
   const updatedUser = await user.findByIdAndUpdate(
   userId,{ title, description },{ new: true });
   if (!updatedUser) {
       return res.status(404).json({ error: 'User not found' });
   }
   res.json(updatedUser);
 } catch (error) {
   res.status(500).json({ error: 'An error occurred while updating the user' });
 }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
 const userId = req.params.id;
 try {
   const deletedUser = await user.findByIdAndRemove(userId);
   if (!deletedUser) {
 return res.status(404).json({ error: 'user not found' });
 }
   res.json(deletedUser);
 } catch (error) {
   res.status(500).json({ error: 'An error occurred while deleting the user' });
 }
};