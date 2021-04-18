import { User } from "../interface/user";

let users: User[] = [
    {
        userId: 'uId161867838088194',
        name: 'Chinmoy',
        email: 'cm@gmail.com'
    },
    {
        userId: 'uId161867841489156',
        name: 'Kamal',
        email: 'kr@gmail.com'
    },
    {
        userId: 'uId161867842560315',
        name: 'Subho',
        email: 'sc@gmail.com'
    }
];

const findUser = async (userId: string): Promise<User | undefined> => {
    await setTimeout(() => {}, 3000);
    return users.find(user => user.userId === userId);
}

const generateId = (): string => {
    return 'uId' + new Date().getTime() + Math.floor(Math.random() * 101);
}

const addUser = async (user): Promise<string> => {
    await setTimeout(() => {}, 3000);
    const newUserId = generateId();

    user['userId'] = newUserId;
    users.push(user)

    return newUserId;
}

export {
    addUser,
    findUser
}
