type Nickname = string;
type Health = number;
type Friends = Array<string>;

type higher = {
  nickname: Nickname;
  healthBar: Health;
};

const kiminwon: higher = {
  nickname: "inwon",
  healthBar: 10,
};

type Foods = string;

const pizza: Foods = "good";

//

//type키워드로 타입 alias를 만들고, 특정값으로 제한 할수 있고, 오브젝트의 모양설정도 가능하다. 여러가지를 할 수 있음.

type Team = "red" | "blue" | "yellow";
type Healths = 1 | 5 | 10;

//type키워드는 interface에 비해 좀 더 활용할수 있는게 많다.
//inteerface는 오직 오브젝트의 모양을 타입에게 설명해주기 위해서만 사용되는 키워드 이다.
// interface Hellos = string 불가능함.

interface homer {
  nickname: string;
  team: Team;
  health: Healths;
}

const kimnoe: homer = {
  nickname: "inwon",
  team: "blue",
  health: 5,
};

//interface는 클래스와 비슷하다.
//객체지향을 참조해서 만들어졌다.
interface UserBae {
  name: string;
}

interface PlayerBae extends UserBae {}

const inwonBae: PlayerBae = {
  name: "inwon",
};

// type , interface합치는거 참조.

//상속받는 클래스가 어떻게 동작해야 할 지 알려주기 위해서 추상클래스를 사용한다.
// abstract class firstUser {
//   constructor(protected firstName: string, protected lastName: string) {}
//   abstract sayHello(name: string): string;
//   abstract fullName(): string;
// }

// class Contender extends firstUser {
//   fullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   sayHello(name: string) {
//     return `Hello ${name}. my name is ${this.fullName}`;
//   }
// }

//인터페이스는 오브젝트나 클래스의 shape을 설명한다.
interface firstUser {
  firstName: string;
  lastname: string;
  sayHello(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}

//인터페이스는 타입스크립트에만 존재하고 자바스크립트에는 존재하지 않기 때문에 코드가 더 가벼워진다.
class Contender implements firstUser {
  constructor(
    public firstName: string,
    public lastname: string,
    public health: number
  ) {}

  fullName(): string {
    return `${this.firstName} ${this.lastname}`;
  }
  sayHello(name: string) {
    return `Hello ${name}. my name is ${this.fullName}`;
  }
}
