# 03_data-types.js

> 자바스크립트 데이터 타입 정리와 typeof, 형 변환, 문자열 처리 등 기본 개념 학습

---

## 📌 학습 내용 요약

- 자바스크립트의 원시 데이터 타입 정리
- `typeof` 연산자 결과와 주의사항
- `null`이 `object`로 나오는 이유
- 동적 타이핑(Dynamic Typing)과 변수 타입 변경
- 템플릿 리터럴과 이스케이프 시퀀스
- 형 변환(Type Coercion)과 NaN, Infinity 처리
- Symbol과 BigInt 기본 개념

---

## 🧠 개념 정리

### ✅ 데이터 타입 종류

| 타입       | typeof 결과 | 예시                      |
|------------|--------------|----------------------------|
| boolean    | `'boolean'`   | `true`, `false`            |
| number     | `'number'`    | `1`, `3.14`, `NaN`, `Infinity` |
| string     | `'string'`    | `"abc"`, `'abc'`, \`abc\`  |
| undefined  | `'undefined'` | 선언만 된 변수             |
| null       | `'object'` ⚠️ | `let x = null`             |
| symbol     | `'symbol'`    | `Symbol('id')`             |
| bigint     | `'bigint'`    | `12345678901234567890n`    |

---

### ⚠️ 주의사항

- `typeof null` → `'object'`: 설계상 버그
- `NaN !== NaN`: 자기 자신과 같지 않음
- `typeof typeof true` → `'string'`
- BigInt와 Number는 직접 연산 불가 (TypeError)
- Symbol은 고유하며, 직접 출력은 불가

---

## 🔁 동적 타이핑

```js
let age = 20;
console.log(typeof age); // 'number'

age = '스무 살';
console.log(typeof age); // 'string'
```

---

## 🔧 형 변환 (Type Coercion)
| 표현식         | 결과     |
| ----------- | ------ |
| `'1' + 1`   | `'11'` |
| `'1' - 1`   | `0`    |
| `true + 1`  | `2`    |
| `false + 1` | `1`    |
| `'3' * '4'` | `12`   |

---

## 🧪 주요 코드 예시
```js
// typeof 기본
console.log(typeof 1); // 'number'
console.log(typeof 'hello'); // 'string'
console.log(typeof undefined); // 'undefined'

// null 예외
let x = null;
console.log(typeof x); // 'object' (⚠️)
console.log(x === null); // true

// 이중 typeof
console.log(typeof typeof true); // 'string'

// NaN 체크
console.log(NaN === NaN); // false
console.log(Number.isNaN(NaN)); // true

// Symbol
const s1 = Symbol('id');
const s2 = Symbol('id');
console.log(s1 === s2); // false

// BigInt
const big = 10n;
console.log(typeof big); // 'bigint'

// 템플릿 리터럴
const name = '홍길동';
const age = 20;
const married = false;
console.log(`이름: ${name}, 나이: ${age}, 기혼 여부: ${married ? '예' : '아니오'}`);
```

---

## 🧵 문자열 다루기
- 작은따옴표/큰따옴표 혼용 가능

- 이스케이프 시퀀스: \', \", \n, \t, \\

- 줄바꿈 시 \ 사용 가능 (백슬래시 + 줄바꿈은 코드상 연결)

```js
let text = '그는 말했다. "괜찮아."';
let word = '안녕하세요~\t반갑습니다!\n저는 \\홍길동\\입니다.';
```