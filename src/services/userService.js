export const userService = {
    getUser,
}
const gUser = {
    name: "Tzvia Izhakov",
    balance: 200,
    transactions: []
}

function getUser(){
    return gUser
}
