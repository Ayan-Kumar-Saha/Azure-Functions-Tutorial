import { Context } from "@azure/functions";

const raiseError = (context: Context, message: string, status: number = 500): void => {
    context.res = {
        status,
        body: {
            success: false,
            message
        }
    }
    context.done();
}

const successResponse = (context: Context, message: string, data: any): void => {
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

export {
    raiseError,
    successResponse
}