# 01_console_comments_semicolons.js

> 자바스크립트 콘솔 출력 및 디버깅을 위한 기본적인 `console` 사용법 실습

---

## 📌 학습 내용 요약

- `console.log()`를 통한 값 출력
- 다양한 데이터 타입 출력 예시
- `this` 출력 시 환경 차이에 따른 결과
- 기타 유용한 console 메서드들

---

## 🧪 주요 예제 코드

```js
console.log('Hello World!');
console.log(1);
console.log(true);
console.log({name: '홍길동', age: 20, married: false});

console.log(this); // 환경에 따라 다르게 출력됨
```

---

## 🔍 콘솔 메서드 요약
| 메서드                  | 설명                  |
| -------------------- | ------------------- |
| `console.log()`      | 일반 로그 출력            |
| `console.info()`     | 정보 로그 (log와 기능상 동일) |
| `console.warn()`     | 경고 메시지 출력           |
| `console.error()`    | 에러 메시지 출력           |
| `console.table()`    | 표 형태로 배열/객체 출력      |
| `console.group()`    | 관련 로그를 묶어서 출력       |
| `console.groupEnd()` | 그룹 출력 종료            |
| `console.time()`     | 실행 시간 측정 시작         |
| `console.timeEnd()`  | 실행 시간 측정 종료         |

---

## 🌐 실행 환경 별 `this`
| 환경            | `this` 값            |
| ------------- | ------------------- |
| 브라우저 콘솔       | `window` 객체         |
| Node.js REPL  | `global` 객체         |
| Node.js 파일 실행 | `module.exports` 객체 |
