// type or interface로 타입지정을 할 수 있다.
// interface는 오직 오브젝트 모양을 타입스크립트에게 설명해 주기위해서 사용되는 키워드 이다.
// 객체지향프로그램개념활용해서 만듬
// Type은 유연/개방적임. 타입 alias만들수도있음.

type Nickname = string;
type Health = 1 | 5 | 10;
type Friends = Array<string>;

type Team = "red" | "blue" | "yellow";

interface Killer {
  nickname: Nickname;
  team: Team;
  health: Health;
}

const kims: Killer = {
  nickname: "inwon",
  team: "yellow",
  health: 1,
};

// readonly도 가능하다.
interface UZser {
  name: string;
}

interface Hlayer extends UZser {}

const kimNoah: Hlayer = {
  name: "inwon",
};
