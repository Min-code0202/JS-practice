# 02_execution_context.js

> 자바스크립트 코드가 실행될 때, 해당 환경을 설명하는 내부 개념  
모든 코드 실행은 **실행 컨텍스트** 내부에서 일어난다.

---

## 📌 학습 내용 요약

- 실행 컨텍스트의 정의와 역할 이해
- 실행 컨텍스트 구성 요소: VariableEnvironment, LexicalEnvironment, ThisBinding
- 함수 호출 시 컨텍스트 생성 및 콜 스택에 쌓이는 구조 파악
- 코드 실행 흐름 추적을 위한 Call Stack 분석

---

## 🔍 실행 컨텍스트란?

자바스크립트 코드가 실행되는 환경(Context)을 추상화한 내부 객체.  
실행될 때마다 다음 정보를 포함한 컨텍스트가 생성되어 **콜 스택**에 쌓임:

- **VariableEnvironment**: 변수/함수 선언 정보
- **LexicalEnvironment**: 외부 스코프 정보
- **ThisBinding**: this에 바인딩할 값

---

## 🧠 실행 컨텍스트의 흐름

1. **전역 컨텍스트(Global)**  
   - 자바스크립트가 처음 실행될 때 자동 생성
2. **함수 컨텍스트(Function)**  
   - 함수가 호출될 때마다 생성
3. **Eval 컨텍스트** *(거의 안 씀)*

실행 컨텍스트는 **스택(Stack 구조)** 으로 관리된다.  
→ **콜 스택(Call Stack)** 으로 표현됨.

---

## 🔁 예시: 실행 컨텍스트 스택

```js
function one() {
  console.log("Inside one");
  two();
}

function two() {
  console.log("Inside two");
  three();
}

function three() {
  console.log("Inside three");
}

one();
```

---

## 🔍 실행 순서
```scss
Global Execution Context 생성
↓
one() 호출 → one 컨텍스트 push
↓
two() 호출 → two 컨텍스트 push
↓
three() 호출 → three 컨텍스트 push
↓
three() 종료 → pop
↓
two() 종료 → pop
↓
one() 종료 → pop
```

---

## ⚠️ 콜 스택 오류 예시 (Stack Overflow)
```js
function recur() {
  recur();
}
recur(); // ❌ Maximum call stack size exceeded
```
> 무한 재귀 호출은 콜 스택이 꽉 차서 오류 발생

---

## 📌 핵심 요약
- 실행 컨텍스트는 코드 실행을 위한 환경 정보 집합

- 전역 → 함수 → 중첩 함수 순으로 스택에 쌓였다가 사라짐

- 모든 실행 흐름은 Call Stack으로 추적 가능

| 구분                | 설명                                  |
| ----------------- | ----------------------------------- |
| 실행 컨텍스트           | 코드가 실행되는 환경 정보 모음 (스코프, 변수, this 등) |
| 전역 컨텍스트           | JS 시작 시 자동 생성되는 최상위 컨텍스트            |
| 함수 컨텍스트           | 함수 호출 시마다 개별로 생성되며 콜 스택에 push       |
| 콜 스택 (Call Stack) | 실행 컨텍스트가 쌓이고 제거되는 후입선출 구조 (LIFO)    |
