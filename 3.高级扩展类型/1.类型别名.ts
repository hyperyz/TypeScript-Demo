let u: {
    name: string;
    age: number;
    gender: '男' | '女';
}

function getUsers(): {
    name: string;
    age: number;
    gender: '男' | '女';
}[] {
    return []
}

// 类型别名：对已知的类型定义名称
type User = {
    name: string;
    age: number;
    gender: '男' | '女';
}

let uu: User;
uu = {
    name: '张三',
    age: 25,
    gender: '男'
}

function getUsers1(): User[] {
    return []
}

// 再次细分
type Gender = '男' | '女';
type User1 = {
    name: string;
    age: number;
    gender: Gender;
}
