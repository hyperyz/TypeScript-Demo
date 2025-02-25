// 泛型是附属于函数、类、接口、类型别名的类型

// 1. 泛型函数
function add<T>(a: T[], b: T[]): T[] {
    return a.concat(b);
}

// 不写<>也能推导出来
console.log(add<number>([1, 2, 3], [4, 5, 6]));
console.log(add<string>(['a', 'b', 'c'], ['d', 'e', 'f']));

// 2.类、接口、类型别名，都是在名称后面加上<T>，表示泛型
type callback<T> = (n: T, i: number) => boolean;
class MyArray<T> {
    constructor(private arr: T[]){}
}


