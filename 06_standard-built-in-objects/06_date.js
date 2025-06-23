// Date 객체 생성
const now1 = new Date();  // 현재 날짜와 시간
console.log(typeof now1); // object
console.log(now1);

// Date 함수 호출 (생성 아님)
const nowStr = Date(); // 문자열 반환
console.log(typeof nowStr); // string
console.log(nowStr);

// 유닉스 타임스탬프 기반 생성
console.log(new Date(0)); // 1970-01-01T00:00:00.000Z
console.log(new Date(1000 * 60 * 60 * 24 * 365 * 30)); // 30년 후

// 연도 + 월 (월은 0부터 시작)
console.log(new Date(2022, 8)); // 2022-09-01

// 연월일시분
console.log(new Date(2022, 8, 20, 14, 35));

// 연월일시분초밀리초
console.log(new Date(2022, 8, 20, 14, 35, 47, 789));

// 문자열 기반 생성
console.log(new Date('August 20, 2022 14:35:47'));
console.log(new Date('2022-08-20T14:35:47'));

// 현재 시간의 타임스탬프 (ms)
console.log(Date.now());

// 문자열 → 타임스탬프 (UTC 기준)
console.log(Date.parse('August 20, 2022 00:00:00 UTC'));

// 시스템 타임존 기준 파싱
console.log(Date.parse('August 20, 2022 09:00:00'));

// UTC 기준으로 타임스탬프 생성
console.log(Date.UTC(2022, 7, 20, 0, 0, 0)); // 8월 = index 7

// 날짜 객체 출력
const now2 = new Date();
console.log(now2.toString());         // 시스템 포맷
console.log(now2.toDateString());     // 날짜만
console.log(now2.toTimeString());     // 시간만

// 지역화된 출력
console.log(now2.toLocaleString());           // 기본 (한국이라면 ko-KR)
console.log(now2.toLocaleString('ko-KR'));    // 명시적 한국어
console.log(now2.toLocaleString('en-US'));    // 미국 영어
console.log(now2.toLocaleString('de-DE'));    // 독일어

// 날짜 각 구성요소 가져오기
const now3 = new Date();
console.log(now3.toString());

for (const [label, value] of [
    ['연:', now3.getFullYear()],
    ['월:', now3.getMonth()],         // 0 ~ 11
    ['일:', now3.getDate()],
    ['요일:', now3.getDay()],         // 0(일) ~ 6(토)
    ['시:', now3.getHours()],
    ['분:', now3.getMinutes()],
    ['초:', now3.getSeconds()],
    ['밀리초:', now3.getMilliseconds()]
]) {
    console.log(label, value);
}

// 날짜 구성 변경
const now4 = new Date();
now4.setFullYear(2022);
now4.setMonth(7);        // 8월
now4.setDate(20);
now4.setHours(14);
now4.setMinutes(35);
now4.setSeconds(47);
now4.setMilliseconds(789);
console.log(now4.toString());

// 포맷팅 예제
const now5 = new Date();
const year = now5.getFullYear();
const month = now5.getMonth() + 1;
const date = now5.getDate();
const day = '일월화수목금토'[now5.getDay()];

console.log(`오늘은 ${year}년 ${month}월 ${date}일, ${day}요일입니다.`);

// getTime / setTime
const date1 = new Date(2020, 7, 20);
const timeValue = date1.getTime();
console.log(date1.toString());
console.log(timeValue);

const date2 = new Date();
console.log(date2.toString());
date2.setTime(timeValue);
console.log(date2.toString());

// 타임존 오프셋 (분 단위 → 한국은 -540분)
console.log(new Date().getTimezoneOffset() / 60); // -9

// ISO 문자열 (UTC 기반)
const now6 = new Date();
console.log(now6.toISOString()); // 항상 UTC 기준
console.log(now6.toString());    // 로컬 기준

// 타임존 보정 후 ISO 출력 (로컬 기준과 일치시키기)
const now7 = new Date();
const offset = now7.getTimezoneOffset() * 60000;
const localISO = new Date(now7.getTime() - offset).toISOString();

console.log(localISO);
console.log(now7.toString());