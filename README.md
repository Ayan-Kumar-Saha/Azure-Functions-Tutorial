# Azure Functions Tutorial 🔥

### Azure Functions Requirements Setup 💻
* Install Azure Functions Core Tools (v3.0 recommended) from [here](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=linux%2Ccsharp%2Cbash#v2) in your system.
* After installation, type `func -v` or `func --version` for confirmation. 
  ```shell
    blacklist96@blacklist96:~/Desktop/AzureFuncTuts$ func -v
    3.0.3442
    blacklist96@blacklist96:~/Desktop/AzureFuncTuts$ func --version
    3.0.3442
  ```
  If it shows a version, then installation is completed successfully.

### Azure Function Project Setup 🚀
* Create a directory for the project, go inside that directory and type `func init`.
* Then choose the respective worker runtime, in our case we will choose `node`.
* Choose languges of your choice. However, this repo contains same code for both `JavaScript` and `TypeScript` for your convenience.
* N.B. If you have chosen `TypeScript`, then run `npm install` as it will install some necessary typescript dependencies for your project.
* Your project setup is now completed.

### Create New Azure Function 📝
* To create a new API or Azure Function, type `func new`
* From the list, choose your preferred type of triggering. In our case we will choose `HttpTrigger` as our API will be invoked on *Http Requests*.
* Give a name for your function. Whatever name you will give, it will be the name of the **API endpoint**. For example, if your function name is `getUser` so the respective API url will be,
  ```shell
    http://{domain-name}:{port}/api/getUser
  ```
  where `getUser` is your API endpoint. So, try to use descriptive names for your API's **always**.
* A folder should be created with two files, `function.json` and `index.js` (if you have chosen *javascript*) or `index.ts` (if you have chosen *typescript*)
* `function.json` will contain your API configuration. Make sure to set `methods` according to your API requirement.
* `index.js` or `index.ts` is where your API code will reside.

### Run Azure Functions 🤩
* For `JavaScript`, type `func start` or `npm start` (if you have setup scripts), and it should start your functions.
* For `TypeScript`, type `npm start` only. 
  
  N.B. - Don't try to touch scripts until you are 100% sure, as they are already configured for the *typescript* project.

* If API urls for all the functions are showing up in the terminal, then you are done. 🥳


## <center> 🎉 Congrats, Test your APIs 🎉 </center>

### Some Tips 🤔
* Try to use the power of TypeScript if you have chosen typescript based runtime. Always use types as much as possible and avoid `any` as much as possible.
* Use descriptive names for APIs as well as variables.
* Figure out all possible edge cases for your API. Your API should not break at any cost.


### Useful Docs
* [Azure Functions Documentation](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=linux%2Ccsharp%2Cbash)
