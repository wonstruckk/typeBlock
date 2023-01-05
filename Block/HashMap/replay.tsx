// 클래스와 인터페이스를 사용할 때의 차이점에 대해서 알아보자.

// 추상클래스 생성.
// 자바스크립트에서는 추상클래스를 만들어도 일반적인 클래스로 바뀌게 되지만
// 다른클래스들이 표준화된 모양, 표준화된 property와 메서드를 갖도록 해주는 청사진을 만들기 위해
// 추상클래스를 사용한다.
// abstract class Oser {
//   constructor(protected firstName: string, protected lastName: string) {}
//   abstract sayHi(name: string): string;
//   abstract fullName(): string;
// }

// class Olayer extends Oser {
//   fullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   sayHi(name: string): string {
//     return `Hello ${name}. My name is ${this.fullName}`;
//   }
// }

// 인터페이스는 클래스의 모양을 알려준다.
// 자바스크립트 코드로 컴파일 되지 않는다. -> 한층 더 가벼워 진다.
interface Oser {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}

class Olayer implements Oser, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string): string {
    return `Hello ${name}. My name is ${this.fullName}`;
  }
}

function makeUser(user: Oser) {
  return "hi";
}

makeUser({
  firstName: "nico",
  lastName: "234",
  fullName: () => "xx",
  sayHi: (name) => "xx",
});
