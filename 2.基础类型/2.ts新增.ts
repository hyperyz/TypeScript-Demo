/**
 * 基础类型，ts新增的：
 * 1. 联合类型。涉及类型保护：对变量进行类型判断后，在判断语句中能确定变量的具体类型。typeof是一种触发类型保护的方式。
 * 2. void: 约束函数的返回值，表示函数不返回任何值
 * 3. never: 约束函数的返回值，表示函数永远不可能结束
 * 4. 字面量类型：使用值进行约束
 * 5. 元组(Tuple)：一个固定长度的数组，数组中每一项类型确定
 * 6. any 类型：绕过类型检查，any类型的数据可以赋给任意类型
 */

// 1. 联合类型
let name1: string | undefined;

// 2. void
function print(): void {
    console.log('hello world');
}

// 3. never
function throwError(msg: string): never {
    throw new Error(msg);
}

// 4. 字面量类型
let gender: '男' | '女' = '男';
let arr: []
let user: {
    name: string,
    age: number,
}

user = {
    name: 'yz',
    age: 25,
}

// 5. 元组
let tu: [string, number] = ['hello', 123];

// 6. any 类型
let anyVar: any = 'hello';
let test: number = anyVar; // 有隐患的代码