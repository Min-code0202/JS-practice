# 01_blocks_and_scope.js

> 자바스크립트의 블록문과 스코프에 대한 개념 및 예시 코드 정리

---

## 📌 학습 내용 요약

- `{}` 중괄호 블록의 의미와 사용처 이해
- 블록 레벨 스코프(Block Scope)의 개념과 변수의 유효 범위 확인
- 변수 섀도잉(Shadowing)과 스코프 중첩 이해
- 암묵적 전역 변수의 위험성 인지

---

## 🔍 블록문 (Block Statement)이란?
블록문은 `{}` 중괄호로 감싼 여러 개의 문(statement)을 묶는 문법 구조로, 다음과 같은 특징이 있음:
- **0개 이상의 문(statement)**를 포함할 수 있음

- 제어문(if, for 등), 함수, 클래스에서 사용됨

- 새로운 스코프(scope)를 생성함
```js
{
    console.log("이건 블록문 내부입니다");
}
```

---

## 🧠 블록 스코프(Block Scope)

자바스크립트에서 let, const로 선언한 변수는 해당 블록 내에서만 접근 가능함.

```js
{
    const x = "Hello";
    let y = "World";
    console.log(x, y); // ✅ 접근 가능
}

console.log(x); // ❌ ReferenceError
console.log(y); // ❌ ReferenceError
```

- 블록 내부에서 선언한 변수는 밖에서 접근 불가

- 반대로 블록 외부에서 선언된 변수는 블록 내부에서 접근 가능

---

## 🧪 변수 섀도잉 (Shadowing)
같은 이름의 변수를 블록 안에서 다시 선언하면, 바깥 변수를 가리는 효과가 발생함.

```js
const value = 10;

{
    const value = 20; // 바깥의 value를 가림
    console.log(value); // 20
}

console.log(value); // 10
```

---

## ⚠️ 의도치 않은 전역 변수 생성 (지양)
`let`, `const`, `var` 없이 변수에 값을 할당하면, **암묵적으로 전역 변수**가 생성됨.
```js
{
    undeclaredVar = "😱"; // 지양! 전역에 생김
}

console.log(undeclaredVar); // '😱'
```

---

## 🧬 스코프 중첩과 변수의 유효범위
블록이 중첩되면, 가장 가까운 블록의 변수가 우선 사용됨 (→ 섀도잉 발생).
```js
let a = 0;
let b = 1;
let c = 2;

{
    let a = 'A';
    let b = 'B';

    {
        let a = '가';
        console.log(a, b, c); // '가', 'B', 2
    }

    console.log(a, b, c); // 'A', 'B', 2
}

console.log(a, b, c); // 0, 1, 2
```

---

## ✅ 정리
| 구분                 | 설명                                  |
| ------------------ | ----------------------------------- |
| 블록문 (`{}`)         | 여러 문(statement)을 묶는 구조              |
| 블록 스코프             | `let`, `const` 변수는 블록 안에서만 유효       |
| 변수 섀도잉 (Shadowing) | 같은 이름의 변수가 블록 내에서 새로 선언되면 바깥 변수 가려짐 |
| 암묵적 전역 변수          | 선언 키워드 없이 변수에 할당 → 전역 오염 발생         |

---

## 📚 참고 자료
- [MDN - Block](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/block)

- [MDN - Scope](https://developer.mozilla.org/ko/docs/Glossary/Scope)

- [MDN - Variable scope](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope)