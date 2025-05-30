// 기본적인 콘솔 출력
console.log('Hello World!');
console.log(1);
console.log(true);
console.log({ name: '홍길동', age: 20, married: false });

// 실행 환경에 따른 this
console.log('브라우저 환경에서 this:', this); // 브라우저에서는 window
console.log('Node.js 환경에서 this:', this); // Node.js에서는 파일 실행 시 module.exports

// 다양한 콘솔 메서드 사용 예시
console.log('로그 - 기본적인 출력');
console.info('로그 - 기능적으로는 log와 같음. 사용하기에 따라 용도 구분 가능');
console.warn('경고 - 문제가 될 수 있는 부분');
console.error('오류 - 에러 발생 상황');

// table을 이용한 객체/배열 출력
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 }
];
console.table(users);

// group으로 묶기
console.group('로그 그룹');
console.log('첫 번째');
console.log('두 번째');
console.groupEnd();

// 시간 측정
console.time('타이머');
for (let i = 0; i < 1000000; i++) {}
console.timeEnd('타이머');
