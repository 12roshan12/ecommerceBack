const jwt = require('jsonwebtoken');
require('dotenv').config()



module.exports = async function  authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    console.log("token" + token);
    console.log("token" + authHeader);

    if (token == null) return res.sendStatus(401)
    console.log(req);

    await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        console.log(err, user);

        if (err) return res.sendStatus(403)

        req.user = user

        next()
    })
}


