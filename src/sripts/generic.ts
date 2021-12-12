// ---1---
// const cars: string[] = ['ford', 'audi']
// const cars2: Array<string> = ['ford', 'audi']

// ---2---
// const promise: Promise<string> = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('promise done')
//     }, 2000)
// })

// ---3---
// const obj1 = {
//     color: 'red',
//     size: 'small'
// }

// const obj2 = {
//     count: 1,
//     form: 'circle'
// }

// function mergeObjects<T extends object, K extends object>(a: T, b: K): T & K {
//     return Object.assign({}, a, b)
// }

// ---4---
// interface IWithCount {
//     length: number
// }

// function withCount<T extends IWithCount>(value: T): {value: T, count: string} {
//     return {
//         value,
//         count: `This value has ${value.length} symbols`
//     }
// }

// ---5---
// const person = {
//     name: 'vit',
//     age: 30
// }

// function getObjectValue<T extends object, K extends keyof T>(obj: T, key: K) {
//     return obj[key]
// }

// ---6---

export const genericFunc = () => {
    // ---1---
    // console.log(cars)
    // console.log(cars2)

    // ---2---
    // promise.then((message) => {
    //     console.log(message.toUpperCase())
    // })

    // ---3---
    // console.log(mergeObjects(obj1, obj2))
    // console.log(mergeObjects({name: 'vit'}, {age: 20}))

    //---4---
    // console.log(withCount('hello').count)

    //---5---
    // console.log(getObjectValue(person, 'name'))
    // console.log(getObjectValue(person, 'age'))

    // ---6---
}