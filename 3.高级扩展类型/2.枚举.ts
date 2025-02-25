// 枚举用于约束变量的取值范围

// 字面量+联合类型也能达到类似的效果

type Gender1 = '男' | '女'

let g: Gender1

g = '男'
g = '女'


// 但是如果Gender类型的字面量发生变化，则需要修改所有引用它的地方，而枚举则不需要

enum Gender2 {
    male = '男',
    female = '女'
}

let g2: Gender2

g2 = Gender2.male
g2 = Gender2.female

// 枚举会出现在编译结果中，编译结果是个对象

enum Level {
    level1 = 1,
    level2 = 2,
    level3 = 3
}


