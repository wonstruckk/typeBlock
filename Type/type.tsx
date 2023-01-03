// let a = "hello";
// a = "bye";
// typeScript에서는 string이라서 불가능합니다.
// a = 1;

// 아예 정의해주고 하는것도 가능함. (명시적표현)
// // 타입을 추론하지 못할때 하면 좋지만, 최소한으로 하는게 좋다. -> typescript가 추론하는게 훨씬 좋다.
// let b: boolean = false;
// let c: number[] = [];
// number[]이기 떄문에 string을 push할수는 없다.
// c.push("1");

// 명시적으로 해도 되지만 알아서 되게 냅두자.
let a = [1, 2];
let b: string[] = ["i1", "string"];
let c: boolean[] = [true];

//변수에 타입할당하는 방법 const or let.

//readonly속성도 부여가 가능하다.
// type Player = {
//   readonly name:Name
//   age?:age
// }

type Age = number;
type Name = string;
// type Player = {
//   name: Name;
//   age?: Age;
// };

//화살표함수에서의 type지정.
const playerArrow = (name: string): Player => ({
  name,
});

//함수의 return부 및 arguments타입지정
function playerMaker(name: string): Player {
  return {
    name,
  };
}

const nico = playerArrow("nico");
nico.age = 12;

const numbers: readonly number[] = [1, 2, 3, 4];
// readonly기 때문에 push불가능함.
// number.push(1);
const names: readonly string[] = ["1", "2"];

//tuple readonly
// const player: readonly [string, number, boolean] = ["123", 123, false];
// player[0] = 1

// let z : undefined = undefined
// let h :  null = null

//never , unknown, void
// unknown : 변수의 타입을 모를때 사용해서 타입을 강제할 수 있다.
let h: unknown;

// let i = h+1 unknwon이기 때문에 불가능함.
if (typeof h === "number") {
  let i = h + 1;
}

if (typeof h === "string") {
  let i = h.toUpperCase();
}

//void

function hello() {
  console.log("x");
}

//never
//함수가 절대 return 하지 않을때 발생한다.
//타입이 두가지 일수도 있는 상황에서 발생한다.
function hello1(name: string | number) {
  if (typeof name === "string") {
  } else if (typeof name === "number") {
  } else {
    name;
  }
}
