import jwt from 'jsonwebtoken';

// Create a middleware for private routes
module.exports = function(req, res, next){
    try{
        const token = req.headers.authorization.split(" ")[1];
        const verify = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = verify;
        next();
    }catch(err){
        res.status(401).send('Authentication Failed');
    }
  }