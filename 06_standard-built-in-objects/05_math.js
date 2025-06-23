// 기본 상수
console.log(
    Math.PI           // 원주율 ≈ 3.14159...
);

console.log(
    Math.E            // 자연로그의 밑 ≈ 2.71828...
);

// 절댓값
console.log(
    Math.abs(123),    // 123
    Math.abs(-123)    // 123
);

// 0 반환 (암묵적 변환: '' → 0, null → 0, [] → 0)
console.log(
    Math.abs(0),      // 0
    Math.abs(''),     // 0
    Math.abs(null),   // 0
    Math.abs([])      // 0
);

// NaN 반환
console.log(
    Math.abs('abc'),         // NaN
    Math.abs(undefined),     // NaN
    Math.abs({a: 1}),         // NaN
    Math.abs([1, 2, 3]),      // NaN
    Math.abs()                // NaN
);

// 부동소수점 오차 비교용 함수
const isEqual = (a, b) => {
    return Math.abs(a - b) < Number.EPSILON;
};

console.log(
    isEqual(0.1 + 0.2, 0.3)    // true
);

// 반올림 관련 함수 비교
for (const num of [1.4, 1.6, -1.4, -1.6]) {
    console.log(
        num + ' : ',
        Math.ceil(num),    // 올림
        Math.round(num),   // 반올림
        Math.floor(num),   // 내림
        Math.trunc(num)    // 정수부만 남김 (소수점 제거)
    );
}

// NaN 반환 (인자가 없으면 NaN)
console.log(
    Math.ceil(),     // NaN
    Math.round(),    // NaN
    Math.floor(),    // NaN
    Math.trunc()     // NaN
);

// 제곱 (거듭제곱)
console.log(
    Math.pow(4, 2),     // 16
    Math.pow(4, 1),     // 4
    Math.pow(4, 0),     // 1
    Math.pow(4, -1)     // 0.25
);

// 인자 부족 → NaN
console.log(
    Math.pow(4)         // NaN
);

// 제곱근
console.log(
    Math.sqrt(25),      // 5
    Math.sqrt(9),       // 3
    Math.sqrt(2),       // ≈ 1.414
    Math.sqrt(1),       // 1
    Math.sqrt(0)        // 0
);

// 음수의 제곱근 또는 인자 없음 → NaN
console.log(
    Math.sqrt(-25),     // NaN
    Math.sqrt()         // NaN
);

// 최대값 / 최소값
console.log(
    Math.max(8, 5, 9, 6, 3, 1, 4, 2, 7), // 9
    Math.min(8, 5, 9, 6, 3, 1, 4, 2, 7)  // 1
);

// 0 이상 1 미만 난수
for (let i = 0; i < 10; i++) {
    console.log(Math.random());
}

// 0 이상 10 미만 정수
for (let i = 0; i < 10; i++) {
    console.log(
        Math.floor(Math.random() * 10)
    );
}

// 삼각 함수
console.log(
    Math.sin(Math.PI / 2),                 // ≈ 1
    Math.cos(Math.PI * 2),                 // ≈ 1
    Math.tan(Math.PI / 180 * 45)           // ≈ 1 (45도)
);

// 역삼각 함수
console.log(
    Math.asin(1),            // ≈ Math.PI / 2
    Math.acos(0),            // ≈ Math.PI / 2
    Math.atan(Infinity)      // ≈ Math.PI / 2
);