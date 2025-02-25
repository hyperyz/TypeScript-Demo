// 接口interface约束类、对象、函数

interface User {
    name: string
    age: number
    // sayHello: () => void
    sayHello(): void
}

let u: User = {
    name: 'test',
    age: 18,
    sayHello: function () {
        console.log('hello');

    }
}


// type Condition = (n: number) => boolean
interface Condition {
    (n: number): boolean
}

function sum(numbers: number[], callBack: Condition) {
    let s = 0;
    numbers.forEach(n => {
        if (callBack(n)) {
            s += n
        }
    })
}

sum([1, 2, 3, 4, 5], n => n % 2 !== 0)


// 接口可以继承
// interface A {
//     t1: string
// }

// interface B extends A {
//     t2: number
// }

// let u3: B = {
//     t1: 'test',
//     t2: 18
// }

// interface C extends A, B {
//     t3: boolean
// }

// let u4: C = {
//     t1: 'test',
//     t2: 18,
//     t3: true
// }

// 类型别名实现类似的效果，要用&进行组合
// type A = {
//     t1: string
// }

// type B = {
//     t2: number
// }

// type C = {
//     t1: number,  // 接口这里会直接报错，无法覆盖
//     t3: boolean
// } & A & B 

// let u5: C = {
//     t1: "123",
//     t2: 18,
//     t3: true
// }


// readonly只读修饰符，不在编译结果中
interface Person {
    readonly id: string
    name: string
    age: number
    readonly arr: readonly number[]  // 两个readonly表示不一样
}

let p: Person = {
    id: '123',
    name: 'test',
    age: 18
}
p.id = '不能改'


// 数组内容也完全不能改
// const arr: readonly number[] = [1, 2, 3]
const arr: ReadonlyArray<number> = [1, 2, 3]
arr.push(4)
arr[0] = 3








