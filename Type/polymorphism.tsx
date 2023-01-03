// Polymorphism
// 아래와 같이 하나하나 추가하는 방식은 다양하게 사용할 수 없어서 비효율적이다.
// 그래서 concrete type이 아닌, generics를 사용하게 된다.
// type SuperPrint = {
//   (arr: number[]): void;
//   (arr: boolean[]): void;
//   (arr: string[]): void;
//   (arr: (number | boolean)[]): void;
// };

// const superPrint: SuperPrint = (arr) => {
//   arr.forEach((i) => console.log(i));
// };

// superPrint([1, 2, 3, 4]);
// superPrint([true, false, true]);
// superPrint(["a", "b", "c"]);
// superPrint([1, 2, true, false]);

// 다형성이 적용된 타입.
// 다양한 타입들을 하나하나 적어주지 않아도 사용이 가능하다.
// 타입스크립트에게 타입을 유추하도록 만들었다.
// 그리고 이것이 generic이다.
// 가장 일반적인 방법은 아니다. react는 다른방식으로 사용하게 된다.
// any와 똑같지 않다. ** call signature를 생성해 주는 것이다.**
// 라이브러리를만들거나, 다른개발자가 사용할 기능을 개발하는 경우에는 유용할 것이다.
// 그 외에는 제네릭을 직접 만드는일은 없고, 사용할 일만 있을 것 이다.
type SuperPrint = {
  <TypePlaceHolder, M>(arr: TypePlaceHolder[], b: M): TypePlaceHolder;
};

// 똑같은 형식.
// function superPrint<V>(a:V[]) {
//   return a[0]
// }

const superPrint: SuperPrint = (arr) => arr[0];

const q = superPrint([1, 2, 3, 4], "kim");
const w = superPrint([true, false, true], 1);
const e = superPrint(["a", "b", "c"], true);
const r = superPrint([1, 2, true, false, "hello"], "what");

//제네릭은 선언 시점이 아니라, 생성 시점에 타입을 명시하여 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법이다.
// 타입 재 사용을 위해서 제네릭을 사용하는 경우, 커스텀한 타입을 사용할 경우 사용한다.
type Slayer<E> = {
  name: string;
  extraInfo: E;
};

type InwonExtra = {
  favFood: string;
};

type InwonSlayer = Slayer<InwonExtra>;

const inwon: InwonSlayer = {
  name: "inwon",
  extraInfo: {
    favFood: "kimchi",
  },
};

const Lynn: Slayer<null> = {
  name: "lynn",
  extraInfo: null,
};

function printAllNumbers(arr: Array<number>) {}
