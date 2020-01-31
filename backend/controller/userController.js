// require model
const User = require("../model/user");
// get all user 
const getallUserController = async (req, res) => {
    res.send(await (await User.find()).reverse());
}
// get user
const getSingleUserController = async (req, res) => {
    const { id } = req.params;
    res.send(await User.findById(id));
}
//  create usr
const createUserController = async (req, res) => {
    const { name, age } = req.body;
    const newUser = new User({
        name,
        age
    })
    res.send(await newUser.save());
}
// update user
const updateUserController = async (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    const user = await User.findById(id);
    user.name = name || user.name;
    user.age = age || user.age;
    res.send(await user.save());
}
// delete user
const deleteUserController = async (req, res) => {
    const { id } = req.params;
    const deleteUser = await User.findById(id);
    res.send(await deleteUser.remove());
}
module.exports = {
    getallUserController,
    getSingleUserController,
    createUserController,
    updateUserController,
    deleteUserController
}