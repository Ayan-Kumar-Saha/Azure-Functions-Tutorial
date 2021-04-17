const raiseError = (context, message, status = 500) => {
    context.res = {
        status,
        body: {
            success: false,
            message
        }
    }
    context.done();
}

const successResponse = (context, message, data) => {
    context.res = {
        status: 200,
        body: {
            success: true,
            message,
            data
        }
    }
    context.done();
}

module.exports = {
    raiseError,
    successResponse
}