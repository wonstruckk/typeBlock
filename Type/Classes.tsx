// 추상 클래스 = 다른클래스가 상속 받을수 있는 클래스, 직접적으로 인스턴스는 생성할 수 없다.
// private protetced활용해서 보호할 수 있다. 메서드들을.

//추상메서드는 구현이 되어 있지 안흔 메서드이다.
//call signature만 가지고 있다.
// argument를 받을 경우 argument이름 타입 함수의 리탄타입을정의한다.
// 추상메서드가 있는 경우, 추상클래스를 상속받는 클래스에서 추상메소드를 구현해주어야 한다.
abstract class User {
  constructor(
    private firstName: string,
    protected lastName: string,
    public nickname: string
  ) {}
  abstract getNicnName(): void;
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {
  getNickName() {
    console.log(this.nickname);
  }
}

const inWon = new Player("inwon", "las", "인원");
inWon.getFullName();
