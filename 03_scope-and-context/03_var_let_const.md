# 03_var_let_const.js

> 변수 선언 키워드의 차이 (`var`, `let`, `const`)에 대한 개념 및 예시 코드 정리

---

## 📌 학습 내용 요약

- var / let / const의 스코프 차이
- 호이스팅 동작 차이
- 변수 중복 선언 가능 여부
- const의 재할당 제한
- 객체 내부 변경은 const여도 가능함

---

## 🧠 스코프 차이

```js
if (true) {
  var x = 1;
  let y = 2;
  const z = 3;
}

console.log(x); // ✅ 1
console.log(y); // ❌ ReferenceError
console.log(z); // ❌ ReferenceError
```

- var → 함수 스코프 (블록 밖에서도 접근됨)

- let, const → 블록 스코프

---

## 🧪 호이스팅 차이
```js
console.log(a); // undefined
var a = 1;

console.log(b); // ❌ ReferenceError
let b = 2;
```
- `var`는 선언과 동시에 `undefined`로 초기화됨

- `let`, `const`는 **Temporal Dead Zone(TDZ)** 구간 존재

---

## 🧬 변수 중복 선언
같은 이름의 변수를 블록 안에서 다시 선언하면, 바깥 변수를 가리는 효과가 발생함.

```js
var a = 1;
var a = 2; // 가능

let b = 1;
let b = 2; // ❌ SyntaxError

const c = 1;
const c = 2; // ❌ SyntaxError
```

---

## 🔒 const는 재할당 불가
```js
const num = 100;
num = 200; // ❌ TypeError
```
하지만 참조형(객체, 배열) 은 내부 변경 가능
```js
const arr = [1, 2];
arr.push(3); // ✅ 가능
```
---

## ✅ 정리
| 항목    | `var`               | `let`    | `const`            |
| ----- | ------------------- | -------- | ------------------ |
| 스코프   | 함수 스코프              | 블록 스코프   | 블록 스코프             |
| 중복 선언 | 가능                  | 불가능      | 불가능                |
| 호이스팅  | 선언 + 초기화(undefined) | 선언만 호이스팅 | 선언만 호이스팅           |
| 재할당   | 가능                  | 가능       | 불가능                |
| 사용 용도 | 지양 (구형 방식)          | 기본 사용 권장 | 상수 또는 객체/배열 참조시 사용 |
