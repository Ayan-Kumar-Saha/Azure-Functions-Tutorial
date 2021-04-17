import { AzureFunction, Context, HttpRequest, HttpRequestQuery } from "@azure/functions";
import { findUser } from "../database/users";
import { successResponse, raiseError } from "../lib/utility";
import { User } from "../interface/user";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
   
    const queryParams: HttpRequestQuery = req.query;

    try {

        if (!queryParams?.userId) {
            raiseError(context, 'Mandatory parameter: userId not found!', 400);
            return;
        }
    
        const userId: string = queryParams.userId;
        const user: User | undefined = await findUser(userId);
    
        if (user) {
            successResponse(context, 'User found successfully!', user);
            return;
        }
        successResponse(context, 'UserId not found!', {});

    } catch (err) {
        raiseError(context, err.toString());
    }
};

export default httpTrigger;