function isSameUser(obj1, obj2){
    return obj1.email === obj2.email
}

//testar om den funkar
const user1 = {
    name: "Sven",
    email: "Sven.hotmail.com"
}
const user2 = {
    name: "Svensson",
    email: "Sven.hotmail.com"
}
const user3 = {
    name: "Jeff",
    email: "Jeff.hotmail.com"
}
console.log(isSameUser(user1, user2))
console.log(isSameUser(user1, user3))