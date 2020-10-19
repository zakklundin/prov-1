function newArray(arr){
    return arr.map(function(x){return x.toUpperCase()})
}

//testar
let namn = ["Zakk", "Cesar", "Zigge"]
console.log(namn)
console.log(newArray(namn))