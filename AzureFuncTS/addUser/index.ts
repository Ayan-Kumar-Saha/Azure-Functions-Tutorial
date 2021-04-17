import { AzureFunction, Context, HttpRequest, HttpRequestParams } from "@azure/functions";
import { addUser } from "../database/users";
import { successResponse, raiseError } from "../lib/utility";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    const payload: HttpRequestParams = req.body;

    try {
        const insertedId: string | undefined = await addUser(payload);

        successResponse(context, 'User added successfully!', { insertedId });
        return;

    } catch (err) {
        raiseError(context, err.toString());
    }

};

export default httpTrigger;