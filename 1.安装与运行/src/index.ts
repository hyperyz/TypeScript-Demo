// 不写类型也能用node命令运行，因为和后缀没有关系
// let str = "hello world"
// console.log(str);


// tsc命令可以编译成js文件
let str:string = "hello ts"
console.log(str);

/**
 * TS运行的问题：
 * 1.假设当前环境在DOM环境中
 * 2.如果代码中没有模块化语句，默认代码是全局执行的，所以变量就是全局变量
 */


/**
 * 配置tsconfig.json后直接用tsc即可。让ts和js文件分开，这样也不会报错。
 */

