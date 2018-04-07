const del = document.getElementById("del");
const parL = document.getElementById("parL");
const parR = document.getElementById("parR");
const plus = document.getElementById("plus");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const minus = document.getElementById("minus");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const mul = document.getElementById("mul");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const divide = document.getElementById("divide");
const zero = document.getElementById("zero");
const coln = document.getElementById("coln");
const eql = document.getElementById("eql");
const clear = document.getElementById("clr")
let process = document.getElementById("process");
let result = document.getElementById("result");
let processArr = [];

function displayClear () {
    processArr = [];
    process.textContent = processArr;
    result.textContent = 0;
}

displayClear();

eql.addEventListener('click', function () {
    let str = eval(processArr.join(""));
    result.textContent = str;
    console.log(str);
});

del.addEventListener('click', function () {
    
});

clear.addEventListener('click', function () {
    displayClear();
});

parR.addEventListener('click', function () {
    processArr.push(")");
    process.textContent = processArr.join("");
});

parL.addEventListener('click', function () {
    processArr.push("(");
    process.textContent = processArr.join("");
});

plus.addEventListener('click', function () {
    processArr.push("+");
    process.textContent = processArr.join("");
});

divide.addEventListener('click', function () {
    processArr.push("/");
    process.textContent = processArr.join("");
});

mul.addEventListener('click', function () {
    processArr.push("*");
    process.textContent = processArr.join("");
});

minus.addEventListener('click', function () {
    processArr.push("-");
    process.textContent = processArr.join("");
});

coln.addEventListener('click', function () {
    processArr.push(".");
    process.textContent = processArr.join("");
});

zero.addEventListener('click', function () {
    processArr.push(0);
    process.textContent = processArr.join("");
});

one.addEventListener('click', function () {
    processArr.push(1);
    process.textContent = processArr.join("");
});

two.addEventListener('click', function () {
    processArr.push(2);
    process.textContent = processArr.join("");
});

three.addEventListener('click', function () {
    processArr.push(3);
    process.textContent = processArr.join("");
});

four.addEventListener('click', function () {
    processArr.push(4);
    process.textContent = processArr.join("");
});

five.addEventListener('click', function () {
    processArr.push(5);
    process.textContent = processArr.join("");
});

six.addEventListener('click', function () {
    processArr.push(6);
    process.textContent = processArr.join("");
});

seven.addEventListener('click', function () {
    processArr.push(7);
    process.textContent = processArr.join("");
});

eight.addEventListener('click', function () {
    processArr.push(8);
    process.textContent = processArr.join("");
});

nine.addEventListener('click', function () {
    processArr.push(9);
    process.textContent = processArr.join("");
});












