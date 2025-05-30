# 05_boolean_and_operations.js

> 자바스크립트의 Boolean 타입과 논리 연산자, Truthy/Falsy, 단축 평가, 삼항 연산자 등을 학습합니다.

---

## 📌 학습 내용 요약

- Boolean 값의 타입과 비교 연산 결과 확인
- 논리 연산자(`&&`, `||`, `!`)의 동작 방식과 단축 평가
- 삼항 연산자(`? :`) 활용법
- Truthy / Falsy 판별 및 강제 형 변환
- De Morgan's Law(드 모르간 법칙) 활용
- Boolean 연산자 우선순위 이해

---

## 🧠 개념 정리

### ✅ Boolean 기본 타입

| 값         | 설명               |
|------------|--------------------|
| `true`     | 참                  |
| `false`    | 거짓                |
| `typeof` 결과 | `'boolean'`     |

```js
console.log(typeof true); // 'boolean'
console.log(typeof false); // 'boolean'
```

---

### ✅ 비교 연산자와 Boolean
```js
console.log(1 === 2);        // false
console.log('abc' !== 'def'); // true
```
비교 연산 결과는 항상 Boolean을 반환합니다.

---

### ✅ 논리 연산자
| 연산자  | 의미       | 예시                       |       |         |   |                |
| ---- | -------- | ------------------------ | ----- | ------- | - | -------------- |
| `!`  | 부정 (NOT) | `!true // false`         |       |         |   |                |
| `&&` | 논리 AND   | `true && false // false` |       |         |   |                |
| \`   |          | \`                       | 논리 OR | \`false |   | true // true\` |

---
### ✅ 단축 평가 (Short-circuit Evaluation)
- &&: 앞이 false면 뒤는 평가하지 않음

- ||: 앞이 true면 뒤는 평가하지 않음
```js
error && console.error('오류 발생!');
error || console.log('정상 작동');
```

### ✅ 삼항 연산자
```js
let result = condition ? '참' : '거짓';
```

---

### ✅ Truthy / Falsy 판별
Falsy 값 목록:
| 값           | 결과    |
| ----------- | ----- |
| `false`     | false |
| `0`, `-0`   | false |
| `''`        | false |
| `null`      | false |
| `undefined` | false |
| `NaN`       | false |

Truthy 값 예시:
| 값          | 결과   |
| ---------- | ---- |
| `'0'`      | true |
| `[]`, `{}` | true |
| `Infinity` | true |

```js
console.log(!!'');       // false
console.log(!!'hello');  // true
console.log(!![]);       // true
```

---

### ✅ 드 모르간의 법칙 (De Morgan's Laws)
```js
!(a && b) === !a || !b
!(a || b) === !a && !b
```
항상 true를 반환하는 논리 동등식

---

### ✅ Boolean 강제 변환
- Boolean(값) 또는 !!값
```js
console.log(Boolean(0));     // false
console.log(!!'hello');      // true
```

---

### ✅ 논리 연산자 우선순위
```js
console.log(true || false && false); // true
// AND가 OR보다 우선 → false && false → false → true || false → true

console.log((true || false) && false); // false
```

---

## 🧪 주요 코드 예시
```js
// Boolean 타입
console.log(typeof true); // 'boolean'

// 부정 연산자
console.log(!true); // false

// AND / OR 연산자
console.log(true && false); // false
console.log(false || true); // true

// 단축 평가
let error = true;
error && console.warn('에러!'); // 경고 출력

// 삼항 연산자
let x = 3;
console.log(x % 2 ? '홀수' : '짝수'); // 홀수

// Truthy / Falsy 확인
console.log(!!0, !!'hello'); // false true

// 드 모르간 법칙
let a = true;
let b = false;
console.log(!(a && b) === (!a || !b)); // true

// Boolean 우선순위
console.log(true || false && false); // true
```

---
## 🧵 참고 개념 요약
- &&, ||는 Boolean이 아닌 실제 값을 반환한다.

- !!는 값을 Boolean으로 강제 변환한다.

- typeof로 Boolean 타입 확인 가능

- false, 0, '', null, undefined, NaN → falsy