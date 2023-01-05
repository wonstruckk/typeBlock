// 함수의 타입정의.

// call signature
// 파라미터의 타입, 함수의 리턴타입정의.
// type Add = {
//   (a: number, b: number): number;
//   (a: number, b: string): number;
// };

//오버로딩은 함수의 call signature가 여러개일때 발생시킨다.
//서로다른 여러개의 call signature.

// const add: Add = (a, b) => {
//   if (typeof b === "string") return a;
//   return a + b;
// };

//매우 비 효율적이다.

//오버로딩 예시.
// type Config = {
//   path: string;
//   state: object;
// };

// type Push = {
//   (path: string): void;
//   (config: Config): void;
// };

// const push: Push = (config) => {
//   if (typeof config === "string") console.log(config);
//   else {
//     console.log(config.path, config.state);
//   }
// };

//마지막 c는 옵셔널

type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};
