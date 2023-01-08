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
type SuperPrint = {
  <TypePlaceHolder>(arr: TypePlaceHolder[]): TypePlaceHolder;
};

const superPrint: SuperPrint = (arr) => arr[0];

superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["a", "b", "c"]);
superPrint([1, 2, true, false]);
