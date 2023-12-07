import { dbService } from "./db.service"
import { storageService } from '../services/storage.service.js'

export const userService = {
    getUser,
    getEmptyUser,
    saveUser,
    addMove,
    loadMoves
}

const STORAGE_KEY = 'user'
const LOGGEDINUSER = 'loggedUser'
const gUser = {
    name: "Tzvia Izhakov",
    balance: 200,
    transactions: []
}

function getUser(){
  return storageService.load(LOGGEDINUSER)
}

function getEmptyUser(){
    return {name:'', balance:100, transactions: []}
}

async function saveUser(user) {
    if (await isUsernameExists(user.name)) {
        const existedUser  =await getUserByName(user.name);
        storageService.save(LOGGEDINUSER,existedUser)
        return existedUser
    } 
    else{
        const savedUser = await dbService.post(STORAGE_KEY, user)
        storageService.save(LOGGEDINUSER, savedUser)
        return savedUser
    }
}

async function isUsernameExists(name) {
    let users = await dbService.query(STORAGE_KEY)
    let user 
    if(users && users.length){
        user = users.find(user=> user.name===name)
    }
    return user
}

async function getUserByName(name) {
    let users = await dbService.query(STORAGE_KEY)
    return users.find(user=>user.name===name)
} 

async function addMove(user) {
    console.log("service", user);
    storageService.save(LOGGEDINUSER,user)
    await dbService.put(STORAGE_KEY,user)
}

function loadMoves(contact) {
    const user = getUser()
    return user.transactions.filter(move=> move.toId===contact._id)
}