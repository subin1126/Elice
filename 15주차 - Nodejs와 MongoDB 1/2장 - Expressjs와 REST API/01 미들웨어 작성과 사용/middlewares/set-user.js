const users = require('../data/users');
const admins = require('../data/admins');

const setUser = (type) => {
    return (req, res, next) => {
        const { userName } = req.query;

        if(type === 'admin') {
            req.user = admins[userName];
        } else {
            req.user = users[userName];
        }
        next();
    }
}

module.exports = setUser;