# 07\_class\_and\_constructor.md

> 클래스(class)와 생성자 함수(constructor)를 활용한 객체 생성, 클래스 기반 문법, 필드 및 메서드 정의, 정적 메서드(static) 등을 학습

---

## 📌 학습 내용 요약

* 클래스 선언 및 인스턴스 생성
* 클래스와 생성자 함수의 차이
* 클래스 내부 메서드 정의 방식
* 클래스 필드 정의
* 정적 필드 및 정적 메서드 (static)
* 클래스는 일급 객체 (변수에 할당 가능)

---

## 🧠 클래스 기본 사용법

```js
class YalcoChicken {
  constructor (name, no) {
    this.name = name;
    this.no = no;
  }
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

const chain1 = new YalcoChicken('판교', 3);
const chain2 = new YalcoChicken('강남', 17);
const chain3 = new YalcoChicken('제주', 24);

console.log(chain1, chain1.introduce());
console.log(chain2, chain2.introduce());
console.log(chain3, chain3.introduce());
```

---

## ⚠️ 클래스와 생성자 함수의 차이점

### 1. 클래스는 호이스팅되지 않음

```js
const chain1 = new YalcoChicken('판교', 3); // ❌ ReferenceError

class YalcoChicken { ... }
```

### 2. 클래스는 `new` 없이 호출 불가

```js
const chain2 = YalcoChicken('강남', 17); // ❌ TypeError
```

---

## 👤 생성자 파라미터 예시

```js
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
```

---

## 🆓 필드만 있는 클래스 (생성자 없음)

```js
class Empty {}
console.log(new Empty());
```

---

## 🐶 클래스와 생성자 함수 비교

```js
class Dog {
  bark () {
    return '멍멍';
  }
}
const badugi = new Dog();
console.log(badugi, badugi.bark());

function Dog2 () {
  this.bark = function () {
    return '멍멍';
  };
}
const badugi2 = new Dog2();
console.log(badugi2, badugi2.bark());
```

---

## 💪 필드값이 지정된 클래스

```js
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
slime1.attack(slime2);
console.log(slime1, slime2);
```

---

## 🐔 필드 + 생성자 + 메서드 활용

```js
class YalcoChicken {
  no = 0;
  menu = { '후라이드': 10000, '양념치킨': 12000 };

  constructor (name, no) {
    this.name = name;
    if (no) this.no = no;
  }
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
  order (name) {
    return `${this.menu[name]}원입니다.`;
  }
}

const chain0 = new YalcoChicken('(미정)');
const chain1 = new YalcoChicken('판교', 3);
chain1.menu['양념치킨'] = 13000;

console.log(chain0.order('양념치킨'), chain1.order('양념치킨'));
```

---

## 🏢 정적(static) 필드와 메서드

```js
class YalcoChicken {
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

console.log(YalcoChicken);
console.log(YalcoChicken.contact());
```

---

## 🧠 클래스는 일급 객체

```js
class Dog {
  bark () {
    return '멍멍';
  }
}

console.log(typeof Dog); // function
const 개 = Dog;
const 바둑이 = new 개();
console.log(바둑이);
```

---

## ✅ 정리

| 구분        | 클래스              | 생성자 함수            |
| --------- | ---------------- | ----------------- |
| 선언 방식     | `class`          | `function`        |
| new 없이 호출 | ❌ 오류 발생          | ⭕ undefined 반환 가능 |
| 호이스팅      | ❌ 안 됨            | ⭕ 가능              |
| 정적 메서드    | `static` 키워드 사용  | 직접 함수에 속성 부여 필요   |
| 메서드 정의    | prototype에 자동 추가 | 직접 정의 필요          |
