function divisibleByThree(arr){
    return arr.filter(function(n){return n % 3 === 0})
}

//testar
let numbers = [4, 7, 9, 3, 8]
console.log(numbers)
console.log(divisibleByThree(numbers))