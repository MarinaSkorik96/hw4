const getUsers = (request, response) => {
// j
};

const getUser = (request, response) => {
    const {user_id} = request.params;
    response.status(200);
    response.send(`User with id ${user_id}`);
};

const createUser = (request, response) => {
  response.status(201);
  response.send(request.bodynp);
};

const updateUser = (request, response) => {
//pko
};

const deleteUser = (request, response) => {
//oiko
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}