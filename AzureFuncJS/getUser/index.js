const { findUser } = require('../database/users');
const { successResponse, raiseError } = require('../lib/utility');

module.exports = async function (context, req) {
   
    const queryParams = req.query;

    try {

        if (
            !queryParams.hasOwnProperty('userId')
        ) {
            raiseError(context, 'Mandatory parameter: userId not found!', 400);
            return;
        }
    
        const userId = queryParams.userId;
        const user = await findUser(userId);
    
        if (user) {
            successResponse(context, 'User found successfully!', user);
            return;
        }
        successResponse(context, 'UserId not found!', {});

    } catch (err) {
        raiseError(context, err.toString());
    }
}