// ✅ 클래스 기본 예제
class YalcoChickenBasic {
  constructor (name, no) {
    this.name = name;
    this.no = no;
  }

  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

const storeA = new YalcoChickenBasic('판교', 3);
const storeB = new YalcoChickenBasic('강남', 17);
const storeC = new YalcoChickenBasic('제주', 24);

console.log(storeA, storeA.introduce());
console.log(storeB, storeB.introduce());
console.log(storeC, storeC.introduce());


// ⚠️ 클래스는 호이스팅되지 않음
// 아래 줄은 오류 발생: Cannot access 'YalcoChickenHoisting' before initialization
// const testStore = new YalcoChickenHoisting('선릉', 1);

class YalcoChickenHoisting {
  constructor (name, no) {
    this.name = name;
    this.no = no;
  }

  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}


// ⚠️ 클래스는 new 없이 호출 불가
// 아래 줄은 오류 발생: Class constructor YalcoChickenCallError cannot be invoked without 'new'
// const wrongStore = YalcoChickenCallError('역삼', 2);

class YalcoChickenCallError {
  constructor (name, no) {
    this.name = name;
    this.no = no;
  }

  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}


// ✅ 생성자 함수 버전
function YalcoChickenFn (name, no) {
  if (!new.target) {
    return new YalcoChickenFn(name, no);
  }
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  };
}

const storeFn1 = new YalcoChickenFn('마포', 5);
const storeFn2 = YalcoChickenFn('신촌', 6); // new 없이 호출해도 내부에서 처리

console.log(storeFn1.introduce());
console.log(storeFn2.introduce());


// ✅ 생성자 기본값 예시
class Person {
  constructor (name, age, married = false) {
    this.name = name;
    this.age = age;
    this.married = married;
  }
}

const person1 = new Person('박영희', 30, true);
const person2 = new Person('오동수', 18);
console.log(person1, person2);


// ✅ 생성자 없는 빈 클래스
class Empty {}
console.log(new Empty());


// ✅ 클래스와 생성자 함수 비교
class Dog {
  bark () {
    return '멍멍';
  }
}
const dog1 = new Dog();
console.log(dog1, dog1.bark());

function DogFn () {
  this.bark = function () {
    return '멍멍';
  };
}
const dog2 = new DogFn();
console.log(dog2, dog2.bark());


// ✅ 필드 기본값만 사용하는 클래스
class Slime {
  hp = 50;
  op = 4;

  attack (enemy) {
    enemy.hp -= this.op;
    this.hp += this.op / 4;
  }
}

const slime1 = new Slime();
const slime2 = new Slime();

console.log('공격 전:', slime1, slime2);
slime1.attack(slime2);
console.log('공격 후:', slime1, slime2);


// ✅ 필드 + 생성자 + 메서드
class YalcoChickenFull {
  no = 0;
  menu = { '후라이드': 10000, '양념치킨': 12000 };

  constructor (name, no) {
    this.name = name;
    if (no) this.no = no;
  }

  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }

  order (menuName) {
    return `${this.menu[menuName]}원입니다.`;
  }
}

const draftStore = new YalcoChickenFull('(미정)');
const pangyoStore = new YalcoChickenFull('판교', 3);

pangyoStore.menu['양념치킨'] = 13000;

console.log(draftStore.order('양념치킨')); // 12000
console.log(pangyoStore.order('양념치킨')); // 13000


// ✅ 정적 필드 및 메서드 사용
class YalcoChickenStatic {
  static brand = '얄코치킨';

  static contact () {
    return `${this.brand}입니다. 무엇을 도와드릴까요?`;
  }

  constructor (name, no) {
    this.name = name;
    this.no = no;
  }

  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

console.log(YalcoChickenStatic.brand);
console.log(YalcoChickenStatic.contact());


// ✅ 클래스도 일급 객체
class Cat {
  meow () {
    return '야옹';
  }
}

console.log(typeof Cat); // function
const 고양이클래스 = Cat;
const 나비 = new 고양이클래스();
console.log(나비.meow());