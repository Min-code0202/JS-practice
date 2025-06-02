// 1. 기본값 매개변수
function addDefault(a = 2, b = 4) {
  console.log(`${a} + ${b}`);
  return a + b;
}

console.log("기본값 매개변수:");
console.log(addDefault());
console.log(addDefault(1));
console.log(addDefault(1, 3));


// 2. 초과 인수는 무시됨
function addTwo(a, b) {
  return a + b;
}

console.log("\n인수가 더 많을 때:");
console.log(addTwo(1, 3));          // 4
console.log(addTwo(1, 3, 5));       // 4
console.log(addTwo(1, 3, 5, 7));    // 4


// 3. arguments 객체
function logArguments(a, b) {
  console.log("\narguments 확인:");
  console.log("전체:", arguments);
  console.log("첫 번째 인수:", arguments[0]);
  console.log("타입:", typeof arguments);
  return a + b;
}

console.log("결과:", logArguments(1, 3, 5, 7));


// 4. arguments는 반복 가능함 (iterable)
function printAllArguments(a, b) {
  console.log("\n모든 인수 출력:");
  for (const arg of arguments) {
    console.log(arg);
  }
  return a + b;
}

printAllArguments(1, 3, 5, 7);


// 5. 평균 구하기 - arguments 사용
function getAverage() {
  let sum = 0;
  for (const num of arguments) {
    sum += num;
  }
  return sum / arguments.length;
}

console.log("\n평균값 계산:");
console.log(getAverage(1, 4, 7));
console.log(getAverage(24, 31, 52, 80));


// 6. 타입 안전한 평균 계산기
function getSafeAverage() {
  let sum = 0, count = 0;
  for (const num of arguments) {
    if (typeof num !== 'number') continue;
    sum += num;
    count++;
  }
  return sum / count;
}

console.log("\n타입 체크 포함 평균:");
console.log(getSafeAverage(2, '가', 8, true, 5));


// 7. 화살표 함수는 arguments 사용 불가
const arrowArgs = () => {
  console.log("\n화살표 함수 내 arguments 사용:", typeof arguments); // undefined
};

arrowArgs(1, 2);


// 8. rest parameter (...children)
function classIntro(classNo, teacher, ...children) {
  console.log("\nrest 파라미터 예시:");
  console.log("학생 목록:", children);
  console.log("arguments:", arguments);

  const childrenStr = children.join(", ");
  return `${classNo}반의 선생님은 ${teacher}, 학생들은 ${childrenStr}입니다.`;
}

console.log(classIntro(3, '김민지', '영희', '철수', '보라'));


// 9. 여러 연산자 조합하기 (combineArms)
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

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

console.log("\n연산 함수 조합:");
const f1 = combineArms(add, mul);  // (x + y) * y
const f2 = combineArms(add, mul, sub);
const f3 = combineArms(add, mul, sub, div);
const f4 = combineArms(add, mul, sub, div, (x, y) => x ** y); // 제곱 추가

console.log(f1(8, 3));   // ((8 + 3) * 3)
console.log(f2(8, 3));   // (((8 + 3) * 3) - 3)
console.log(f3(8, 3));   // ... / 3
console.log(f4(8, 3));   // ... ** 3


// 10. doMultiArms: 실행 시점에 연산을 적용
function doMultiArms(x, y, ...arms) {
  let result = x;
  for (const arm of arms) {
    if (typeof arm !== 'function') continue;
    result = arm(result, y);
  }
  return result;
}

console.log("\ndoMultiArms 결과:");
console.log(doMultiArms(8, 3, add, mul, 1, true));
console.log(doMultiArms(8, 3, add, mul, sub));
console.log(doMultiArms(8, 3, add, mul, sub, div));
console.log(doMultiArms(8, 3, add, mul, sub, div, (x, y) => x ** y));