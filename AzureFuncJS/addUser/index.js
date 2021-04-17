
const { addUser } = require('../database/users');
const { raiseError, successResponse } = require('../lib/utility');

module.exports = async function (context, req) {
   
    const payload = req.body;

    try {
        const insertedId = await addUser(payload);
    
        successResponse(context, 'User added successfully!', { insertedId });
        return;

    } catch (err) {
        raiseError(context, err.toString());
    }
}