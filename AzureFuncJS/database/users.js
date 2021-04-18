let users = [
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

const findUser = async (userId) => {
    await setTimeout(() => {}, 3000);
    return users.find(user => user.userId === userId);
}

const generateId = () => {
    return 'uId' + new Date().getTime() + Math.floor(Math.random() * 101);
}

const addUser = async (user) => {
    await setTimeout(() => {}, 3000);
    const newUserId = generateId();

    user['userId'] = newUserId;
    users.push(user)

    return newUserId;
}

module.exports = {
    findUser,
    addUser
}