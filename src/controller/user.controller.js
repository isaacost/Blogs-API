const { userService } = require('../services/index');

const userLogin = async (req, res) => {
    const { type, message } = await userService.userLogin(req.body);
    if (type !== 200) return res.status(type).json({ message });

    res.status(type).json(message);
};

const create = async (req, res) => {
    const { type, message } = await userService.create(req.body);
    if (type !== 201) return res.status(type).json({ message });

    res.status(type).json(message);
};

module.exports = {
    userLogin,
    create,
};
