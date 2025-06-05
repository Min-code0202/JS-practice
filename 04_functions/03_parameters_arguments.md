# 03_parameters_arguments.js

> 자바스크립트의 함수 매개변수, arguments 객체, 나머지 매개변수(rest parameter)에 대해 학습

---

## 📌 학습 내용 요약

* 함수 호출 시 **지정된 매개변수보다 많은 인수를 넘겨도 오류 발생 X**
* 기본값 매개변수(default parameter)
* `arguments` 객체 사용법 및 특징
* 나머지 매개변수 (`...rest`) 사용법
* 다양한 인수 조합 처리 및 함수 조합 예제

---

## 🧠 개념 정리

### ✅ 초과 인수 처리

```js
function add(a, b) {
  return a + b;
}

add(1, 3, 5, 7); // 초가된 인수는 무시됨
```

> 💡 자바스크립트는 인수 갯수에 엄격하지 않음

---

### 🔹 1. 기본값 매개변수

* 매개변변수에 기본값을 지정할 수 있음

```js
function add(a = 2, b = 4) {
  return a + b;
}
```

---

### 🔹 2. `arguments` 객체

* 함수 내부에서 사용 가능한 **유사 배열 객체**
* 전달된 모든 인수를 포함 (매개변수 개수와 무관)
* 화살표 함수에서는 `arguments` 사용 불가

```js
function add(a, b) {
  console.log(arguments); // [1, 3, 5, 7]
}
```

> ⚠️ `arguments`는 지정된 배열이 아님 → 배열 메서드 사용 불가

---

### 🔹 3. 나머지 매개변수 (...rest)

* 전달된 인수를 배열로 받음
* 마지막 매개변수에만 사용 가능
* 실제 배열이며 배열 메서드 사용 가능

```js
function classIntro(classNo, teacher, ...students) {
  // students는 배열
}
```

---

### 🔹 4. 다양한 예제

#### ✅ 타입 안전한 평균 계산

```js
function getAverage() {
  let total = 0, count = 0;
  for (const value of arguments) {
    if (typeof value !== 'number') continue;
    total += value;
    count++;
  }
  return total / count;
}
```

#### ✅ 함수 조합을 반환하는 함수

```js
function combineArms(...arms) {
  return (x, y) => {
    let result = x;
    for (const arm of arms) {
      if (typeof arm !== 'function') continue;
      result = arm(result, y);
    }
    return result;
  };
}
```

#### ✅ 다양한 연산을 적용하는 고차 함수

```js
function doMultiArms(x, y, ...arms) {
  let result = x;
  for (const arm of arms) {
    if (typeof arm !== 'function') continue;
    result = arm(result, y);
  }
  return result;
}
```

---

## 🧪 Í \xcd9c력 예시

```js
add(1, 3, 5, 7);               // → 4
add();                         // → 기본값 사용
getAverage(2, '가', 8, true);  // → 5
classIntro(3, '김민지', '영희', '철수');
// → "3반의 선생님은 김민지, 학생들은 영희, 철수입니다."
```

---

## 📌 참고 링크

* [MDN: Default Parameters](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters)
* [MDN: arguments](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments)
* [MDN: Rest Parameters](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters)
