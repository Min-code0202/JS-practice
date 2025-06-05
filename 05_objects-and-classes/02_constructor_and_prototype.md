# 02_constructor_and_prototype

> 생성자 함수, 객체 리터럴, 객체 생성 함수 패턴 비교 및 프로토타입, 정적 메서드 활용 예제

---

## 📌 학습 포인트

- 생성자 함수로 객체 만들기
- `new.target`으로 new 없이 호출 방지
- 객체 리터럴과 팩토리 함수 패턴 비교
- 프로토타입 메서드 추가
- 생성자 함수 자체에 정적 메서드 정의

---

## 🧱 기본 객체 리터럴 방식

```js
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
```

→ **비효율적이며 반복이 많음**

---

## 🏗️ 생성자 함수 방식

```js
function YalcoChicken(name, no) {
  if (!new.target) return new YalcoChicken(name, no); // new 없이 호출 방지

  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  };
}

const c1 = new YalcoChicken('판교', 3);
const c2 = new YalcoChicken('강남', 17);
const c3 = YalcoChicken('제주', 24); // new 없이 호출 → 자동으로 new 적용됨
```

---

## 🔁 팩토리 함수 방식 (객체 리터럴 반환)

```js
function createYalcoChicken(name, no) {
  return {
    name, no,
    introduce() {
      return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
    }
  };
}

const c4 = createYalcoChicken('광화문', 5);
```

---

## 🧬 프로토타입 메서드 추가

```js
YalcoChicken.prototype.introEng = function () {
  return `Welcome to Yalco Chicken at ${this.name}!`;
};

console.log(c1.introEng());
```

---

## 🔍 instanceof 비교

```js
console.log(c1 instanceof YalcoChicken); // true
console.log(c4 instanceof YalcoChicken); // false
```

---

## 🏢 생성자 함수의 정적 속성 / 메서드

```js
YalcoChicken.brand = '얄코치킨';
YalcoChicken.contact = function () {
  return `${this.brand}입니다. 무엇을 도와드릴까요?`;
};

console.log(YalcoChicken.contact()); // 얄코치킨입니다. 무엇을 도와드릴까요?
console.log(c1.contact); // undefined (인스턴스에서는 사용 불가)
```

---

## ✅ 정리

| 방식 | 구조 | this 사용 | prototype | instanceof |
|------|------|------------|------------|-------------|
| 객체 리터럴 | 수동 정의 | O | X | false |
| 팩토리 함수 | 함수 내부 리턴 | O | X | false |
| 생성자 함수 | new 키워드 | O | O | true |
