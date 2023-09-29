const User = require('../ models/user');

const getUsers = async (request, response) => {
    try {
        const data = await User.find({});
        return response.status(200).send(data);
    } catch (error) {
        console.error('Error getting users:', error);
        return response.status(500).send(error.message);
    }
};

const getUser = async (request, response) => {
    try {
        const { user_id } = request.params;
        const user = await User.findById(user_id);
        return response.status(200).send(user);
    } catch (error) {
        console.error('Error getting user:', error);
        return response.status(500).send(error.message);
    }
};

const createUser = async (request, response) => {
    try {
        const user = await User.create({
            ...request.body,
        });
        return response.status(201).send(user);
    } catch (error) {
        console.error('Error creating user:', error);
        return response.status(500).send(error.message);
    }
};

const updateUser = async (request, response) => {
    try {
        const { user_id } = request.params;
        const user = await User.findByIdAndUpdate(user_id, { ...request.body });
        return response.status(200).send(user);
    } catch (error) {
        console.error('Error updating user:', error);
        return response.status(500).send(error.message);
    }
};

const deleteUser = async (request, response) => {
    try {
        const { user_id } = request.params;
        await User.findByIdAndRemove(user_id);
        return response.status(204).send();
    } catch (error) {
        console.error('Error deleting user:', error);
        return response.status(500).send(error.message);
    }
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};
