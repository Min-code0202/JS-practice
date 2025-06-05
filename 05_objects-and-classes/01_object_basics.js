// 객체 리터럴로 객체 생성
const food1 = {
	name: '햄버거',
	price: 5000,
	vegan: false
};

console.log(food1);
// 점 표기법과 대괄호 표기법으로 접근
console.log(
	food1.name,
	food1['price']
);

// 빈 객체 생성 후 프로퍼티 동적 추가
const food2 = {};
console.log(food2);

food2.name = '샐러드';
food2.price = 6000;
food2['vegan'] = true;

console.log(food2);

// 값 수정
food2['price'] = 6500;
console.log(food2);

// 특수한 키를 가진 객체
const obj = {
  1: '하나',
  'ab-cd': 'ABCD',
  's p a c e': 'Space'
};

// 대괄호 표기법만 사용 가능
console.log(
  obj[1],
  obj['ab-cd'],
  obj['s p a c e']
);

// 동적 키 생성
let idx = 0;
const obj2 = {
  ['key-' + ++idx]: `value-${idx}`,
  ['key-' + ++idx]: `value-${idx}`,
  ['key-' + ++idx]: `value-${idx}`,
  [idx ** idx]: 'POWER'
};
console.log(obj2);

// 객체/배열을 키로 사용하면 내부적으로 문자열로 변환됨
const objKey = { x: 1, y: 2 };
const arrKey = [1, 2, 3];

const obj3 = {
  [objKey]: '객체를 키값으로',
  [arrKey]: '배열을 키값으로'
};

console.log(
  obj3[objKey],
  obj3[arrKey]
);

// 완전히 다른 객체여도 키 문자열이 같으면 같은 프로퍼티에 접근
console.log(
  obj3[{ a: 1, b: 2, c: 3 }],
  obj3['1,2,3']
);

console.log(obj3);
console.log(obj3['[object Object]']);

// delete 연산자 사용 예시
const person1 = {
  name: '홍길동',
  age: 24,
  school: '한국대',
  major: '컴퓨터공학'
};

console.log(person1);
delete person1.age;
console.log(person1);
delete person1['major'];
console.log(person1);
delete person1.hobby; // 없는 프로퍼티 삭제도 오류 없음
console.log(person1);

// 함수로 객체에 동적 프로퍼티 추가/수정/삭제
const product1 = {
  name: '노트북',
  color: 'gray',
  price: 800000
};

function addModifyProperty(obj, key, value) {
  obj[key] = value; // key는 문자열이어야 함
}

function deleteProperty(obj, key) {
  delete obj[key];
}

addModifyProperty(product1, 'inch', 16);
console.log(product1);

addModifyProperty(product1, 'price', 750000);
console.log(product1);

deleteProperty(product1, 'color');
console.log(product1);

// 축약 프로퍼티 문법
const x = 1, y = 2;

const obj1 = { x: x, y: y };
console.log(obj1);

const obj2 = { x, y }; // key와 value가 동일한 경우 축약 가능
console.log(obj2);

// 객체 생성 함수
function createProduct(name, price, quantity) {
  return { name, price, quantity };
}

const productA = createProduct('선풍기', 50000, 50);
const productB = createProduct('청소기', 125000, 32);
console.log(productA, productB);

// 객체에 함수 프로퍼티 추가 (일반 함수)
const person2 = {
  name: '홍길동',

  salutate: function (formal) {
    return formal
      ? `안녕하십니까, ${this.name}입니다.`
      : `안녕하세요, ${this.name}이에요.`;
  }
};

console.log(person2.salutate(true));

// 객체 메서드 축약 표현
const person3 = {
  name: '홍길동',

  salutate(formal) {
    return formal
      ? `안녕하십니까, ${this.name}입니다.`
      : `안녕하세요, ${this.name}이에요.`;
  }
};

console.log(person3.salutate(true));
