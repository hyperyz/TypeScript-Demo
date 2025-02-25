// 枚举用于约束变量的取值范围
var g;
g = '男';
g = '女';
// 但是如果Gender类型的字面量发生变化，则需要修改所有引用它的地方，而枚举则不需要
var Gender2;
(function (Gender2) {
    Gender2["male"] = "\u7537";
    Gender2["female"] = "\u5973";
})(Gender2 || (Gender2 = {}));
var g2;
g2 = Gender2.male;
g2 = Gender2.female;
// 枚举会出现在编译结果中，编译结果是个对象
