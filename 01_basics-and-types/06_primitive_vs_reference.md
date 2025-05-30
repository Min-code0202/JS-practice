# 06_value-vs-reference.js

> 기본형(Primitive Type)과 참조형(Reference Type)의 복사/할당 차이를 예제로 학습

---

## 📌 학습 내용 요약

- 기본형은 **값에 의한 복사** (메모리에 별도 저장)
- 객체/배열 등의 참조형은 **참조에 의한 복사** (같은 메모리 주소 참조)
- `const`로 선언해도 내부 값은 변경 가능
- 복사의 방식에 따라 값 변경 시 원본에 영향을 줄 수 있음

---

## 🧠 개념 정리

### ✅ 값에 의한 복사 (Primitive Type)

| 타입 | 예시         |
|------|--------------|
| number | `1`, `3.14` |
| string | `'abc'` |
| boolean | `true`, `false` |
| null, undefined, symbol, bigint 등 |

```js
let a = 10;
let b = a;
b = 20;

console.log(a); // 10
console.log(b); // 20
```
값 자체를 복사 -> ***서로 영향 없음***

---

### ✅ 참조에 의한 복사 (Reference Type)
| 타입       | 예시               |
| -------- | ---------------- |
| object   | `{ key: value }` |
| array    | `[1, 2, 3]`      |
| function | `function() {}`  |
```js
const obj1 = { val: 10 };
const obj2 = obj1;

obj2.val = 20;

console.log(obj1.val); // 20
```
같은 객체를 가리킴 → 하나가 바뀌면 둘 다 바뀜

---

### ✅ const의 특징
- const는 재할당은 불가능

- 내부 프로퍼티나 배열 값은 변경 가능
```js
const arr = [1, 2, 3];
arr[0] = 10; // ✅ 가능

// arr = [4, 5, 6]; // ❌ 에러
```

### ✅ 객체/배열 복사를 독립적으로 만들고 싶다면?
```js
// 객체 복사 (Shallow Copy)
const obj1 = { a: 1 };
const obj2 = { ...obj1 }; // Spread 연산자

obj2.a = 2;
console.log(obj1.a); // 1

// 배열 복사
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

arr2[0] = 9;
console.log(arr1[0]); // 1
```