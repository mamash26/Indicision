// const add = function (a, b) {
//     console.log(arguments)
//     return a + b
// }

// console.log(add(7, 8))

const user = {
    name: 'Mamash', 
    cities: ['Jerusalem', 'Raanana', 'Deauville'],
    printPlacesLived() {
       return this.cities.map((city) => this.name + ' has lived in ' + city)
    } 
}

console.log(user.printPlacesLived())

const multiplier = { 
    numbers: [1, 2, 3], 
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())