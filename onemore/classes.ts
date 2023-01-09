//typescript가 클래스 같은 객체지향 기술을 구현할 수 있다.

//추상클래스는 다른 클래스가 상속받을 수 있는 클래스다.
//하지만 새로운 인스턴스를 만들어 낼 수는 없다.
abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected nickname: string
  ) {}
  //메소드는 클래스 안에 존재하는 함수.
  //추상클ㄹ래스 안에서는 추상메소드를 만들 수 있다.
  //대신에 메소드를 구현하면 안되고, call signature만 적어주면 된다.
  abstract getNickName(): void;

  private getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Noah extends User {
  getNickName() {
    //protetced이기 때문에 상속받은 user의 nickname을 사용할 수 있다.
    //private일때는 사용이 불가능하다.
    //다른 클래스에서도 상속받지 않는다면 protetced이기 때문에 사용이 불가능 하다.
    console.log(this.nickname);
  }
}

//new User는 사용할수 없다. 추상클래스 이기 때문에 인스턴스생성 불가.
const kimnoah = new Noah("inwon", "las", "인원");
//private이기 때문에 사용이 불가능하다.
// kimnoah.firstName
//오직 nickname만 사용을 할 수 있다.

//private,public이 property뿐 아니라 method에서도 작동한다.
kimnoah.getFullName();

//object의 key값을 string으로 정의함.
type Words = {
  [key: number]: string;
};

let dict: Words = {
  1: "food",
  2: "kimchi",
  3: "stake",
};

class Dict {
  private words: Words;
  //수동으로 초기화 하였다.
  constructor() {
    this.words = {};
  }
  //클래스를 타입처럼 사용했다, 파라미터가 클래스의 인스턴스 이기를 원하면 사용할 수 있다.
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
  static hello() {
    return "hello";
  }
}

class Word {
  constructor(public readonly term: string, public readonly def: string) {}
}

const kimchi = new Word("kimchi", "한국의음식");
const dicts = new Dict();

dicts.add(kimchi);
dicts.def("kimchi");
