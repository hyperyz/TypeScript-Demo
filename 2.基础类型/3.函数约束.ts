// 1.函数重载
function combine(x: number, y: number): number
function combine(x: string, y: string): string

function combine(x: number | string, y: number | string): string | number {
    if (typeof x === 'number' && typeof y === 'number') {
        return x * y;
    } else if (typeof x === 'string' && typeof y === 'string') {
        return x + y;
    }
    throw new Error('x和y必须是相同的类型');
}
const result = combine(3, 3)


// 2.可选参数加?，默认参数同js。可选参数一定放在必选参数后面。
function sum(a: number, b: number, c?: number) {
    if (c) {
        return a + b + c;
    } else {
        return a + b;
    }
}
sum(3, 4)
sum(3, 4, 5)