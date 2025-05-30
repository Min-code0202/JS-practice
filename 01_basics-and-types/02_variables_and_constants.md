# 02_variables_and_memory.js

> 변수 선언, 초기화, 메모리 관련 개념 학습

---

## 📌 학습 내용 요약

- `let`, `const`를 이용한 변수 선언
- 재할당 가능 여부와 스코프
- 선언과 초기화의 차이
- 복사 할당과 독립적 저장
- 호이스팅과 TDZ (Temporal Dead Zone)
- `var`와의 차이점 비교

---

## 🧠 개념 정리

### ✅ 호이스팅 (Hoisting)
- 변수나 함수 선언이 **코드의 최상단으로 끌어올려지는 현상**.

- 선언만 끌어올려지며, **초기화는 원래 자리에 유지됨**.

- `var`, `function`은 호이스팅되고,
`let`, `const`도 선언은 호이스팅되지만 **TDZ**에 묶임.

---

### ⚠️ TDZ (Temporal Dead Zone)
- `let`, `const`로 선언된 변수는 **호이스팅은 되지만**,
**선언 전까지 접근하면 에러가 나는 구간**이 생김 → 이게 TDZ.

- 런타임 중에 "이 변수는 선언되긴 했지만 아직 초기화되지 않았어!" 상태.



## 🧪 주요 코드 예시

```js
let x;
console.log(x); // undefined

x = 1;
console.log(x);

// let x = 1; // ❌ SyntaxError: Identifier 'x' has already been declared

const PI = 3.14;
// PI = 3.14159; // ❌ TypeError: Assignment to constant variable

let a = 1;
let b = a;
a = 'Hello';
console.log(a, b); // 'Hello', 1
```

---

## ⚠️ 주의사항
- `const`는 선언과 동시에 초기화해야 함

- 같은 스코프 내에서 `let`/`const`로 변수 재선언 불가

- 선언 전에 접근하면 ReferenceError 발생 (TDZ)

- `var`는 함수 스코프이며 호이스팅됨

---

## 🔍 var vs let/const 비교
| 특성      | var            | let / const          |
| ------- | -------------- | -------------------- |
| 스코프     | 함수 스코프         | 블록 스코프               |
| 호이스팅    | O (undefined)  | O (TDZ 발생)           |
| 재선언     | 가능             | 불가능                  |
| 재할당     | 가능             | let: 가능 / const: 불가능 |
| 선언 전 접근 | 가능 (undefined) | ReferenceError       |
