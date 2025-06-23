// String 객체 생성자 사용 (비추천 방식)
const strObj1 = new String(); // 빈 문자열
const strObj2 = new String('Hello World!');

console.log(strObj1); // [String: '']
console.log(strObj2); // [String: 'Hello World!']

// valueOf는 원시 값, toString도 문자열 반환
console.log(strObj1.valueOf(), strObj1.toString()); // '', ''
console.log(strObj2.valueOf(), strObj2.toString()); // 'Hello World!', 'Hello World!'

// 다양한 자료형 → 문자열 객체 생성
const fromNum = new String(123);
const fromBool = new String(true);
const fromArr = new String([1, 'A', false]);
const fromObj = new String({ a: 1 });

console.log(typeof fromNum, fromNum);   // object, [String: '123']
console.log(typeof fromBool, fromBool); // object, [String: 'true']
console.log(typeof fromArr, fromArr);   // object, [String: '1,A,false']
console.log(typeof fromObj, fromObj);   // object, [String: '[object Object]']

// 각 객체를 문자열로 변환
console.log(fromNum.toString());  // '123'
console.log(fromBool.toString()); // 'true'
console.log(fromArr.toString());  // '1,A,false'
console.log(fromObj.toString());  // '[object Object]'

// String() 함수는 문자열만 반환 (원시 타입)
const str1 = String('Hello World!');
const str2 = String(123);
const str3 = String(true);
const str4 = String({ x: 1, y: 2 }); // '[object Object]'
const str5 = String([1, 2, 3]);      // '1,2,3'

console.log(typeof str1, str1); // string 'Hello World!'
console.log(typeof str2, str2); // string '123'
console.log(typeof str3, str3); // string 'true'
console.log(typeof str4, str4); // string '[object Object]'
console.log(typeof str5, str5); // string '1,2,3'

// 문자열 기본 속성 및 불변성
let myStr = '안녕하세요!';
console.log(
    myStr.length,        // 6
    myStr[0],            // '안'
    myStr[myStr.length - 1] // '!'
);

myStr[myStr.length - 1] = '?'; // 문자열은 불변 → 무시됨
console.log(myStr); // '안녕하세요!'

// 문자열 순회
for (const letter of myStr) {
    console.log(letter);
}

// 문자열 대소문자 변환
const msg = 'Hello, World.';
console.log(
    msg.toUpperCase(), // 'HELLO, WORLD.'
    msg.toLowerCase()  // 'hello, world.'
);
console.log(msg); // 원본 유지

// 대소문자 무시하고 단어 비교
function areSameWords(word1, word2) {
    return word1.toLowerCase() === word2.toLowerCase();
}

console.log(
    areSameWords('Hello', 'hello'), // true
    areSameWords('가나다', '가나다'), // true
    areSameWords('ABC', 'DEF')       // false
);

// 문자 추출: charAt, at
console.log(
    'Hello World!'.charAt(0),       // 'H'
    '안녕하세요~'.charAt(2)           // '하'
);
console.log(
    '안녕하세요~'.at(1),              // '녕'
    '안녕하세요~'.at(-1)              // '~'
);

// indexOf, lastIndexOf
const w1 = '반갑습니다!';
console.log(w1.indexOf('습'), w1.lastIndexOf('습'));

const w2 = '아니, 하나마나한 걸 왜 하나?';
console.log(w2.indexOf('하나'), w2.lastIndexOf('하나'));

console.log(
    '가나다라마'.indexOf('하'),     // -1
    '가나다라마'.lastIndexOf('하')  // -1
);

// 포함 여부 확인
const line = '옛날에 호랑이 한 마리가 살았어요.';

for (const w of ['옛날에', '호랑이', '살았어요.', '나무꾼']) {
    console.log('includes', w, line.includes(w));
    console.log('startsWith', w, line.startsWith(w));
    console.log('endsWith', w, line.endsWith(w));
    console.log('- - - - -');
}

// 정규표현식 검색
console.log(
    '하루가 7번 지나면 1주일이 되는 거야.'.search(/[0-9]/), // 4
    '하루가 일곱 번 지나면 일주일이 되는 거야.'.search(/[0-9]/) // -1
);

// substring
const abc = 'ABCDEFGHIJKL';
console.log(abc, abc.substring(4, 8)); // 'EFGH'
console.log(abc.substring(4));        // 'EFGHIJKL'
console.log(
    abc.substring(-1),    // 'ABCDEFGHIJKL'
    abc.substring(4, 100),// 'EFGHIJKL'
    abc.substring(100)    // ''
);

// 특정 단어 추출
const story = '옛날에 호랑이 한 마리가 살았어요.';
const first = story.substring(0, story.indexOf(' '));
const last = story.substring(story.lastIndexOf(' ') + 1);
console.log(first, last); // '옛날에', '살았어요.'

// slice: substring과 비슷하지만 음수 지원
console.log(
    abc.slice(4, 8),      // 'EFGH'
    abc.slice(-4)         // 'IJKL'
);

// split
console.log(
    '010-1234-5678'.split('-'),                  // ['010','1234','5678']
    'ABC1DEF2GHI3JKL'.split(/[0-9]/)             // ['ABC','DEF','GHI','JKL']
);

const hello = '안녕하세요';
console.log(
    hello.split(''),      // 각 문자 단위로 분리
    hello.split()         // 전체 문자열 1개로 유지
);

const saying = '하나 하면 할머니가 지팡이 짚고서 잘잘잘';
console.log(
    saying.split(' ', 2), // ['하나', '하면']
    saying.split(' ', 4)  // ['하나', '하면', '할머니가', '지팡이']
);

// split + 배열로 처음/마지막 단어 추출
const words = story.split(' ');
console.log(words[0], words[words.length - 1]);

// trim
const padded = '  Hello World!  ';
console.log(`--${padded}--`);
console.log(`--${padded.trim()}--`);
console.log(`--${padded.trimStart()}--`);
console.log(`--${padded.trimEnd()}--`);

// repeat
const ho = '호이';
console.log(ho.repeat(3)); // '호이호이호이'
console.log(ho.repeat(0)); // ''
console.log(ho.repeat());  // ''

// replace
console.log(
    '이스탄불은 터키의 수도이다.'.replace('터키', '튀르키예')
);

const repeatWord = '밥 좀 먹자, 밥. 응? 야, 밥 좀 먹자고 밥, 밥!';
console.log(repeatWord.replace('밥', '라면'));           // 첫 '밥'만
console.log(repeatWord.replace(/밥/g, '라면'));          // 정규식 전체
console.log(repeatWord.replaceAll('밥', '라면'));        // 문자열 전체
console.log(repeatWord.replaceAll(/밥/g, '라면'));       // 정규식 전체

// 체이닝 활용
const mixed = ' 모두 HELLO! ';
const from = 'hello';
const to = 'bye';

console.log(
    mixed
        .trimStart()              // '모두 HELLO! '
        .toLowerCase()            // '모두 hello! '
        .replaceAll(from, to)     // '모두 bye! '
        .toUpperCase()            // '모두 BYE! '
        .repeat(3)                // x3 반복
        .trimEnd()                // 우측 공백 제거
);

console.log(mixed); // 원본은 변경되지 않음