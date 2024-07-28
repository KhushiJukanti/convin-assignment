const User = require('../models/user');

const createUser = async (req, res) => {
    const { email, name, mobile } = req.body;
    try {
        const user = new User({ email, name, mobile });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


const getAllUser = async (req, res) => {
    try {
        const user = await User.find()
        res.status(200).json(user)
    } catch (error) {
        console.log('There is an error:', error)
        res.status(500).json({ message: "server error" })
    }
}

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



module.exports = { createUser, getUser, getAllUser }