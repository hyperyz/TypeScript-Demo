class User {
    readonly id: number;  // 不能改变
    name: string;
    age: number;
    gender: '男' | '女' = '男'  // 这里也能进行属性初始化
    pid?: string  // 这里的?表示该属性可选，可以不传相当于是string | undefined

    private privateProperty: string // 不想被外部访问，js中只能使用symbol来实现私有属性

    // 构造函数中进行属性初始化
    constructor(name: string, age: number, gender: '男' | '女' = '男') {
        this.id = Math.random();
        this.name = name;
        this.age = age;
        this.gender = gender;
    }



}

class UserSimple {
    // 无需单独写name和age属性，直接使用public修饰符即可
    constructor(public name: string, public _age: number) {

    }

    // 访问器：读写属性的时候可以经过函数处理
    set age(value:number){
        if(value >= 0 && value <= 120){
            this._age = value;
        }
    }

    get age():number{
        return this._age;
    }
}

const u6 = new User('Alice', 25);

/**
 * 访问修饰符：
 * public: 默认修饰符，在任何地方都可以访问
 * private: 私有属性，只能在当前类中访问
 * protected: 受保护的属性，只能在当前类和子类中访问
 * 
 */
u6.privateProperty