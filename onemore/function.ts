//Function
//call signature

import { isRegularExpressionLiteral } from "typescript";

// function add(a: number, b: number) {
//   return a + b;
// }
// type Add = (a: number, b: number) => number;

// const add: Add = (a, b) => a + b;

//overloading : 함수가 여러개의 call signature를 가지고 잇을때 발생한다.
//여러개의 call signature를 가지고 있는 안좋은 예.
// type Add = {
//   (a: number, b: number): number;
//   (a: number, b: string): number;
// };
// const add: Add = (a, b) => {
//   if (typeof b === "string") return a;
//   return a + b;
// };

//in next Js example

type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") console.log(config);
  else {
    console.log(config.path);
  }
};

//파라미터의 개수가 다른경우
type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

// 다형성 Polymorphsim : generic
// generic은 타입의 placeholder같은 역할을 한다.
// call signature를 작성할때 어던 타입이 들어올지 모를때 사용한다.
// 아래와같은 경우는 배열안에 numberstring,boolean을 다 담지 못한다 call signature가 없기 때문이다.
// type SuperPrint = {
//   (arr: number[]): void;
//   (arr: boolean[]): void;
//   (arr: string[]): void;
// };

//기본적으로 타입스크립트가 유추한 call ignature를 말해주고, palceholder대신 타입이 발견한 타입으로 바꿔준다.
//<TypePlaceHolder>(arr:TypePlaceHolder[]) : <TypePlaceHolder>
//Generic은 개발자가 요구한 대로 signature를 생성할 수 있는 도구라고 생각하자.
// type SuperPrint = {
//   <T>(a: T[]): T;
// };

//인자를 두개받는 함수, 제네릭 사용. 제네릭을 처음 인식했을때와 제네릭의 순서를 기반으로 제네릭의 타입을 알게 됨.
//첫번째는 배열, 두번째는 m이 파라미터로 들어온다.
// type SuperPrint = {
//   <T, M>(a: T[], b: M): T;
// };

// const superPrint: SuperPrint = (arr) => arr[0];

function superPrint<T, M>(a: T[], b: M) {
  return a[0];
}

superPrint([1, 2, 3, 4], "string");
superPrint([true, false, true], 1);
superPrint(["a", "b", "c"], true);
superPrint([1, 2, true, false, "string"], [1, true, "string"]);

//w다만 제네릭을 사용해서 타입을 만드는 일은 적다. 라이브러리를 만들거나, 다른개발자가 사용할 기능을 만들경우에 유용.

//타입의 상속같은 재사용. 제네릭으로 타입 재사용을 많이 할 수 있고, 커스텀타입을 보낼때도 사용이 가능하다.

type Player<E> = {
  name: string;
  extraInfo: E;
};

type inwonExtra = {
  favFood: string;
};
type inwonPlayer = Player<inwonExtra>;

const inwon: Player<{ favFood: string }> = {
  name: "inwon",
  extraInfo: {
    favFood: "tofu",
  },
};

type A = Array<number>;

let a: A = [1, 2, 3, 4];

//samewith number[]
function printAllNumbers(arr: Array<number>) {}
