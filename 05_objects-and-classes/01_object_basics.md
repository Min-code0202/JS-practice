# 01_object_basics.md

> 객체 생성, 프로퍼티 접근/수정/삭제, 메서드 정의 및 객체 관련 주요 문법 정리

---

## 📌 학습 내용 요약

- 객체 리터럴 및 빈 객체 생성 방식  
- 점 표기법 vs 대괄호 표기법  
- 동적 프로퍼티 추가/수정  
- 특수 키, 객체/배열을 키로 사용할 때 주의점  
- delete 연산자 사용  
- 축약 프로퍼티 문법  
- 객체 생성 함수  
- 메서드 정의 방식 (일반 함수 vs 축약 표현)

---

## 🧠 객체 생성 및 프로퍼티 접근

```js
const food = {
  name: '햄버거',
  price: 5000,
  vegan: false
};

console.log(food.name);      // 점 표기법
console.log(food['price']);  // 대괄호 표기법
```

- 점 표기법: 키가 일반적인 식별자인 경우  
- 대괄호 표기법: 공백, 특수문자, 숫자로 시작하는 키 사용 가능

---

## 🛠 빈 객체 생성 후 프로퍼티 추가

```js
const food2 = {};
food2.name = '샐러드';
food2.price = 6000;
food2['vegan'] = true;
```

- 나중에 동적으로 속성을 추가 가능

---

## 🔁 프로퍼티 값 수정

```js
food2.price = 6500;
```

---

## ❗ 특수 키와 대괄호 사용

```js
const obj = {
  1: '하나',
  'ab-cd': 'ABCD',
  's p a c e': 'Space'
};

console.log(obj[1]);              // 숫자 키
console.log(obj['ab-cd']);        // 특수문자 포함
console.log(obj['s p a c e']);    // 공백 포함
```

> 대괄호 표기법만 사용 가능

---

## ⚙️ 동적 키 생성

```js
let idx = 0;
const obj2 = {
  ['key-' + ++idx]: `value-${idx}`,
  ['key-' + ++idx]: `value-${idx}`,
  ['key-' + ++idx]: `value-${idx}`,
  [idx ** idx]: 'POWER'
};
```

- 계산된 키를 동적으로 설정할 수 있음

---

## 🧩 객체/배열을 키로 사용

```js
const objKey = { x: 1, y: 2 };
const arrKey = [1, 2, 3];

const obj3 = {
  [objKey]: '객체를 키값으로',
  [arrKey]: '배열을 키값으로'
};

console.log(obj3[objKey]);  // '[object Object]'
console.log(obj3[arrKey]);  // '1,2,3'
```

- 객체나 배열은 문자열로 변환되어 `'[object Object]'`, `'1,2,3'` 등으로 사용됨

---

## 🧼 delete 연산자

```js
const person = {
  name: '홍길동',
  age: 24,
  major: '컴퓨터공학'
};

delete person.age;
delete person['major'];
delete person.hobby; // 없는 키 삭제도 오류 없음
```

- 존재 여부 상관없이 삭제 가능

---

## 🔧 프로퍼티 조작 함수

```js
function addModifyProperty(obj, key, value) {
  obj[key] = value;
}

function deleteProperty(obj, key) {
  delete obj[key];
}
```

- 외부에서 객체 속성을 동적으로 제어할 수 있음

---

## ✂️ 축약 프로퍼티 문법

```js
const x = 1, y = 2;
const obj = { x, y }; // 키와 값 이름 같을 때 축약 가능
```

---

## 🏭 객체 생성 함수

```js
function createProduct(name, price, quantity) {
  return { name, price, quantity };
}
```

---

## 👤 객체 메서드 정의 방식

### 일반 함수 방식

```js
const person = {
  name: '홍길동',
  salutate: function (formal) {
    return formal
      ? `안녕하십니까, ${this.name}입니다.`
      : `안녕하세요, ${this.name}이에요.`;
  }
};
```

### 축약 표현

```js
const person = {
  name: '홍길동',
  salutate(formal) {
    return formal
      ? `안녕하십니까, ${this.name}입니다.`
      : `안녕하세요, ${this.name}이에요.`;
  }
};
```

---

## ✅ 정리

| 항목             | 설명                                                   |
|------------------|--------------------------------------------------------|
| 객체 생성         | 리터럴 방식, 빈 객체 후 속성 추가                     |
| 프로퍼티 접근     | 점 표기법 / 대괄호 표기법                              |
| 키 특수문자 사용  | 반드시 대괄호 표기법 사용                              |
| 동적 키           | 계산된 키를 대괄호 내에서 설정 가능                   |
| 키로 객체/배열 사용 | 문자열로 변환되어 키 처리됨 (`[object Object]`, `1,2,3`) |
| delete           | 속성 삭제 (없는 키 삭제도 가능)                       |
| 메서드 정의 방식  | 일반 함수, 축약 표현 모두 가능                         |