//타입스크립트란 ?
//strongly typed 프로그래밍 언어. 컴파일러.
//작성한 코드가 자바스크립트로 변환되는 컴파일러.
//브라우저가 타입스크립트가 아니라 자바스크립트를 이해하기 때문.
//타입스크립트는 []+true같은 개발자의 실수를 잡아준다.

//타입이 코드를 체크한 이 후에, 변환된 자바스크립트 안에서 실수가 일어나지 않게 동작한다.
//타읍시크릅에러같은 코드르 감지하면 -> 자바스크립트로 컴파일 되지 않아서 컴파일오류를 줄여준다.

//ex)
// const inwon = {
//   nickname: "inwon",
// };

// inwon.goodbye();

// function divide(a: number, b: number) {
//   return a / b;
// }

// divide("hello", "string");

//2.타입스크립트의 타입 추론 및 명시적 정의.
//데이터와 변수의 타입을 명시적으로 정의 할 수도 있고
//자바스크립트 처럼 변수만 생성하고 넘어가도 된다.
//타입스크립트는 타입을 추론할 수 있기 때문이다.

//1).변수만 생성하고 넘어감.
let kim = "inwon";
kim = "good";
//string으로 시작해서 string으로 끝나야 하는데, number가 들어와서 에러가 발생한다.
// kim = 1

//2).타입을 명시적으로 정의해줌
// string으로 정의했는데 boolean이 들어가서 에러가 발생함.
let bae: string = false;

//타입체커가 타입스크립트의 타입체커가 추론하는 것을 추천한다. 코드도 짧고 가독성이 좋아지기 때문.
//타입스크립트가 추론하지 못할때는 명시적표현을 해주는게 좋다.

//3. 타입스크립트의 타입
//1) 기본타입 + 명시적정의.
let q: number = 1; // number
let w: string = "inwon"; // string
let e: boolean[] = [true]; // boolean array

//2) optional type, 옵셔널타입
// const player : = {
//   name: 'inwon'
// }
//string이라서 error남.
// player.name = 1;

//2-1 몇몇이 age를 가지고 있을때는 어떻게 명시해줄까.
//아래와 같이 정의해주고, 옵셔널체이닝을 사용한다.
const player: {
  name: string;
  age?: number;
} = {
  name: "inwon",
};

//많은수의 player들이 있다면 어떻게 타입을정의해 주면 될까.
//Alias(별칭)을 정해서 해결한다.
//Player라는 Alias를 지정해주면 된다.
//object에만 유효한게 아닌, 어느타입에나 적용할 수 있다. name도 type으로 정의가 가능하다.
type Player = {
  name: string;
  age?: Age;
};

type Age = number;

const playerInwon: Player = {
  name: "inwon",
};

//3) 함수의 return타입정의.
function playerMaker(name: string): Player {
  return {
    name,
  };
}

// 화살표함수일시에 사용.
// const playerMaker = (name: string): Player => ({ name });

const kims = playerMaker("kimkim");
kims.age = 99;

//4) readyonly도 적용이 가능하다.
type Players = {
  readonly name: string;
  age?: Age;
};

//5) Tuple
//최소한의 길이를 가지고, 특정위치에 특정타입이 있어야 한다.
const playerBae: [string, number, boolean] = ["bae", 22, true];
// 0번째 인덱스는 string이기 때문에 number사용이 불가능하다.
// readyonly도 사용이 가능하다.
playerBae[0] = 1;

//6) any
//타입은 비어있는것은 any로 추론한다.
//또한 타입스크립트의 보호를 벗어나는 것이기때문에 사용하는것을 추천하지는 않는다.
let pull = [];

//7)어떤타입인지 모르는 변수는 타입스크립트에게 어떻게 알려줘야 할까. -> unknown
// 예외처리를 통해서 타입체크를 한 후 사용한다.
let ert: unknown;

if (typeof ert === "number") {
  let b = ert + 1;
}

if (typeof ert === "string") {
  let b = ert.toUpperCase();
}

//8)void
//아무것도 리턴하지 않는 함수이다.

function hello() {
  console.log("x");
}

//9)never
//함수가 절대 return하지 않을때 발생한다.
// 타입이 두가지일 수도 있는 상황에 발생할 수 있다.
function goodbye(): never {
  throw new Error("xxx");
  return "qwer";
}

function goHell(name: string | number) {
  if (typeof name === "string") {
    name;
  } else if (typeof name === "number") {
    name;
  } else {
    //마지막 코드는 실행되지 않는다. string,number가 위에서 동작하기 때문.
    name;
  }
}
