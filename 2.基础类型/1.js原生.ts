
/**
 * 基础类型，js原来就有的：
 * 1. number
 * 2. string
 * 3. boolean
 * 4. array
 * 5. object
 * 6. null
 * 7. undefined
 */


// function isOdd(n: number): boolean {
//     return n % 2 !== 0;
// }

// 可以推断出返回值为boolean
function isOdd(n: number) {
    return n % 2 !== 0;
}
console.log(isOdd(3));
console.log(isOdd(4));


let nums: number[] = [1, 2, 3]
// let nums = [1,2,3]
// let nums: Array<number> = [1,2,3]


// object可以用，但是约束力低
let obj: object

