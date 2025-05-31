// 📌 조건문 예제 정리 (if, else if, else, switch)

// ✅ 기본적인 if 문
const isOpen = true;

if (isOpen) console.log('영업중입니다.');

if (isOpen) {
  console.log('환영합니다.');
  console.log('즐거운 쇼핑하세요!');
}

// ✅ if ~ else 문
const numA = 20;

if (numA % 2) {
  console.log('홀수입니다.');
} else {
  console.log('짝수입니다.');
}

// ✅ 중첩 if 문
const numB = 22;

if (numB % 4) {
  if (numB % 2) {
    console.log('홀수입니다.');
  } else {
    console.log('짝수입니다.');
  }
} else {
  console.log('4의 배수입니다.');
}

// ✅ else if 문
const numC = 21;

if (numC % 2) {
  console.log('홀수입니다.');
} else if (numC % 4) {
  console.log('짝수입니다.');
} else {
  console.log('4의 배수입니다.');
}

// ✅ return으로 조건 종료
function evalNumber() {
  const x = 21;

  if (x % 2) {
    console.log('홀수입니다.');
    return;
  }

  if (x % 4) {
    console.log('짝수입니다.');
    return;
  }

  console.log('4의 배수입니다.');
}

evalNumber();
console.log('블록문 바깥');

// ✅ switch 문 기본
const fingersOut = 2;

switch (fingersOut) {
  case 2:
    console.log('가위');
    break;
  case 0:
    console.log('바위');
    break;
  case 5:
    console.log('보');
    break;
  default:
    console.log('무효');
}

// ✅ switch를 이용한 값 매핑
const dir = 'north';
let dirKor;

switch (dir) {
  case 'north': dirKor = '북'; break;
  case 'south': dirKor = '남'; break;
  case 'east': dirKor = '동'; break;
  case 'west': dirKor = '서'; break;
  default: dirKor = '무효';
}

console.log(dirKor);

// ✅ 객체 활용 대체 방법
const dirKor2 = {
  north: '북',
  south: '남',
  east: '동',
  west: '서'
}[dir] ?? '무효';

console.log(dirKor2);

// ✅ switch로 분기 구분
const month = 1;
let quarter = '';

switch (month) {
  case 1:
  case 2:
  case 3:
    quarter = '1분기';
    break;
  case 4:
  case 5:
  case 6:
    quarter = '2분기';
    break;
  case 7:
  case 8:
  case 9:
    quarter = '3분기';
    break;
  case 10:
  case 11:
  case 12:
    quarter = '4분기';
    break;
  default:
    quarter = '잘못된 월입니다.';
}

console.log(quarter);

// ✅ break 없는 switch 흐름 예시
const startMonth = 1;
let holidays = '분기 내 휴일:';

switch (startMonth) {
  case 1:
    holidays += ' 설날';
  case 2:
  case 3:
    holidays += ' 3•1절';
    break;

  case 4:
  case 5:
    holidays += ' 어린이날';
  case 6:
    holidays += ' 현충일';
    break;

  case 7:
  case 8:
    holidays += ' 광복절';
  case 9:
    holidays += ' 추석';
    break;

  case 10:
    holidays += ' 한글날';
  case 11:
  case 12:
    holidays += ' 크리스마스';
    break;

  default:
    holidays = '잘못된 월입니다.';
}

console.log(holidays);
