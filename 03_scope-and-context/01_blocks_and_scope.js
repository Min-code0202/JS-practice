// 블록문 예시 - 중괄호 {}는 하나의 블록을 나타냄
{
    console.log('블록문');
}

// 블록은 0개 이상의 문(statement)을 묶는 단위이며,
// 주로 제어문(if, for 등), 함수, 클래스 내부에서 사용됨
// 또한 블록은 새로운 스코프(scope)를 생성함

{
    const x = 'Hello';
    let y = 'world!';
    console.log(x, y); // Hello world!
}

// console.log(x); // ❌ ReferenceError: x is not defined
// console.log(y); // ❌ ReferenceError: y is not defined

// 바깥 스코프의 변수
let outerX = 1;

{
    let innerY = 2;
    console.log(outerX, innerY); // 1 2
}

console.log(outerX); // 1
// console.log(innerY); // ❌ ReferenceError: innerY is not defined

// 블록 내부에서 바깥 변수 이름과 동일한 변수 재선언 가능
const xx = 0;
let yy = 'Hello!';
console.log('바깥:', xx, yy); // 바깥: 0 Hello!

{
    const xx = 1; // 블록 안에서 새로운 const 선언 가능
    let yy = '안녕하세요~'; // 다른 변수로 간주됨

    console.log('블록 안:', xx, yy); // 블록 안: 1 안녕하세요~

    // ⚠️ const/let 없이 선언하면 바깥의 값을 변경하게 됨
    zz = '의도치 않은 전역 변수'; // 지양할 것
}

console.log('바깥 다시:', xx, yy); // 바깥 다시: 0 Hello!
console.log(zz); // ⚠️ 의도치 않게 생성된 전역 변수 (string: '의도치 않은 전역 변수')

// 중첩 블록에서의 변수 섀도잉(shadowing)
let a = 0;
let b = 1;
let c = 2;
console.log('시점 1:', a, b, c); // 0 1 2

{
    let a = 'A';
    let b = 'B';
    console.log('시점 2:', a, b, c); // A B 2

    {
        let a = '가';
        console.log('시점 3:', a, b, c); // 가 B 2
    }

    console.log('시점 4:', a, b, c); // A B 2
}

console.log('시점 5:', a, b, c); // 0 1 2