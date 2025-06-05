const chain1 = {
  name: '판교',
  no: 3,
  introduce() {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
};

const chain2 = {
  name: '강남',
  no: 17,
  introduce() {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
};

const chain3 = {
  name: '제주',
  no: 24,
  introduce() {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
};

// 생성자 함수 정의 (new 없이 호출될 때도 안전하게 처리)
function YalcoChicken(name, no) {
  if (!new.target) return new YalcoChicken(name, no); // new 없이 호출해도 객체 반환

  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  };
}

// 인스턴스 생성
const c1 = new YalcoChicken('판교', 3);
const c2 = new YalcoChicken('강남', 17);
const c3 = new YalcoChicken('제주', 24);

console.log(c1, c1.introduce());
console.log(c2, c2.introduce());
console.log(c3, c3.introduce());

// new 없이 호출 → 자동으로 new 붙여서 처리됨
const c4 = YalcoChicken('홍대', 30); // 생성자 방어 코드 덕분에 정상 작동
console.log(c4, c4.introduce());

// 객체 리터럴을 리턴하는 함수 방식 (클래스 아님)
function createYalcoChicken(name, no) {
  return {
    name, no,
    introduce() {
      return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
    }
  };
}

const c5 = createYalcoChicken('광화문', 5);
console.log(c5, c5.introduce());

// 생성자 함수로 만든 인스턴스에 prototype을 통해 메서드 추가
YalcoChicken.prototype.introEng = function () {
  return `Welcome to Yalco Chicken at ${this.name}!`;
};

console.log(c1.introEng()); // 프로토타입 메서드 사용
console.log(new YalcoChicken('대전', 12).introEng());

// instanceof 체크
const fromLiteral = {
  name: '판교', no: 3,
  introduce() {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
};
const fromFunc = createYalcoChicken('강남', 17);
const fromCtor = new YalcoChicken('제주', 24);

console.log(fromLiteral, fromLiteral instanceof YalcoChicken); // false
console.log(fromFunc, fromFunc instanceof YalcoChicken);       // false
console.log(fromCtor, fromCtor instanceof YalcoChicken);       // true

// 생성자 함수 자체에 속성 추가 (정적 속성)
YalcoChicken.brand = '얄코치킨';
YalcoChicken.contact = function () {
  return `${this.brand}입니다. 무엇을 도와드릴까요?`;
};

console.log(YalcoChicken.contact()); // 얄코치킨입니다. 무엇을 도와드릴까요?

// 인스턴스에서는 정적 메서드 접근 불가
console.log(c1.contact); // undefined
