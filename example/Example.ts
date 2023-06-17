function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomString(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        const randomIndex = getRandomNumber(0, characters.length - 1);
        result += characters.charAt(randomIndex);
    }
    return result;
}

function generateRandomData(): void {
    const numbers: number[] = [];
    const strings: string[] = [];

    for (let i = 0; i < 10; i++) {
        const randomNum = getRandomNumber(1, 100);
        const randomStr = getRandomString(5);
        numbers.push(randomNum);
        strings.push(randomStr);
    }

    console.log('Random numbers:');
    numbers.forEach(num => console.log(num));

    console.log('Random strings:');
    strings.forEach(str => console.log(str));
}

generateRandomData();


/**
 * 以下オブジェクト指向の例
 */
// ユーザークラスの定義
class User {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // 名前の取得
    public getName(): string {
        return this.name;
    }

    // 年齢の取得
    public getAge(): number {
        return this.age;
    }

    // 年齢の更新
    public updateAge(newAge: number): void {
        this.age = newAge;
    }
}

  // ユーザーリストの初期化
const userList: User[] = [];

  // ユーザーを作成してリストに追加
const user1 = new User("Alice", 25);
userList.push(user1);

const user2 = new User("Bob", 30);
userList.push(user2);

// ユーザーリストを表示
console.log("ユーザーリスト:");
userList.forEach(user => {
    console.log(`名前: ${user.getName()}, 年齢: ${user.getAge()}`);
});

// ユーザーの年齢を更新
userList[0].updateAge(26);

// 更新後のユーザーリストを表示
console.log("年齢更新後のユーザーリスト:");
userList.forEach(user => {
    console.log(`名前: ${user.getName()}, 年齢: ${user.getAge()}`);
});
