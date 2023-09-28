const users = require('../users.json');

const getUsers = (request, response) => {
    response.status(200);
    response.setHeader('Content-Type', 'application/json');
    response.send(users);
};

const createUser = (request, response) => {
    response.status(201);
    response.send(request.body);
};

const getUser = (request, response) => {
    const { user_id } = request.params;
    response.status(200);
    response.setHeader('Content-Type', 'application/json');
    response.send({ user_id: user_id });
};

const updateUser = (request, response) => {
    const { user_id } = request.params;
    response.status(200);
    response.setHeader('Content-Type', 'application/json');
    response.send(user_id);
};

const deleteUser = (request, response) => {
    const { user_id } = request.params;
    response.status(204);
    response.setHeader('Content-Type', 'application/json');
    response.send({ user_id: user_id });
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};
