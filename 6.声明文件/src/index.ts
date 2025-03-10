// 以d.ts结尾的文件就是声明文件。作用：为js代码提供类型声明。


/**
 * 声明文件的位置：
 * 1.放置到tsconfig.json配置中包含的目录中
 * 2.放置到node_modules/@types目录下
 * 3.手动配置，会覆盖前两条的规则
 * 4.与JS代码所在目录相同，并且文件名也相同的文件。用ts代码写的工程发布之后的格式。
 */
