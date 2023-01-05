// Type, interface차이점정리.

type PlayerA = {
  name: string;
};

// 추가하려면 &연산자 사용해야한다.
type PlayerAA = PlayerA & {
  lastName: string;
};

const PlayerA: PlayerAA = {
  name: "inwon",
  lastName: "bae",
};
/////////
interface PlayerB {
  name: string;
}

interface PlayerBB extends PlayerB {
  lastName: string;
}

// type은 이렇게 중복 불가능하다.
interface PlayerBB {
  health: number;
}

const PlayerB: PlayerBB = {
  name: "inwon",
  lastName: "bae",
  health: 10,
};

type PlayerC = {
  firstName: string;
};

interface PlayerD {
  firstName: string;
}

// 추상클래스로 두가지 섞는느낌으로 가능하다.
// 클래스나 오브젝트의 모양을 정의하고싶으면 interface사용, 나머지는 type써라.
class Pser implements PlayerC {
  constructor(public firstName: string) {}
}
