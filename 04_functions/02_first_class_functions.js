// 01. 할당 가능 - 변수나 상수에 함수 할당
const sayHello = function(name) {
    return `Hello, ${name}`;
};

console.log(sayHello('JavaScript'));

// 함수도 객체처럼 객체의 프로퍼티에 할당 가능
const person = {
    name: 'Alice',
    greet: function() {
        return `Hi, I'm ${this.name}`;
    }
};

console.log(person.greet());

// 화살표 함수는 this를 바인딩하지 않음 (사용 주의)
const personWrong = {
    name: 'Bob',
    greet: () => `Hi, I'm ${this.name}`
};

console.log(personWrong.greet()); // undefined 또는 예기치 않은 결과


// 02. 인자로 전달 - 고차 함수와 콜백 함수
function doInArray(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}

doInArray(['🍎', '🍌', '🍇'], function(item, index) {
    console.log(`과일 ${index + 1}: ${item}`);
});


// 03. 결과값으로 반환 - 함수가 함수를 반환
function multiplyBy(x) {
    return function(y) {
        return x * y;
    };
}

const double = multiplyBy(2);
console.log(double(5)); // 10

const triple = multiplyBy(3);
console.log(triple(5)); // 15


// 💡 커링: 여러 개의 인자를 받는 함수를 분리해서 단계적으로 처리 가능
function add(x) {
    return function(y) {
        return x + y;
    };
}

console.log(add(1)(2)); // 3

// 기존의 코드
function addMultSubt (a, b, c, d) {
  return (a + b) * c - d;
}

const addMultSubt2 = (a, b, c, d) => (a + b) * c - d;

console.log(
  addMultSubt(2, 3, 4, 5),
  addMultSubt2(2, 3, 4, 5),
);

// ⭐ 커링으로 작성된 함수
function curryAddMultSubt (a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return (a + b) * c - d;
      }
    }
  }
}

const curryAddMultSubt2 = a => b => c => d => (a + b) * c - d;


// ⭐️ 함수 분할을 통해 조합하여 사용 가능
const isEven = x => x % 2 === 0;
const log = x => console.log(`값: ${x}`);

function processIfValid(x, validatorFn, actionFn) {
    if (validatorFn(x)) {
        actionFn(x);
    }
}

processIfValid(10, isEven, log); // 값: 10
processIfValid(7, isEven, log);  // 출력 없음
