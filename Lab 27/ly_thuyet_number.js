const logs = [];

// 1. Số nguyên và số thập phân
const integer = 123;
const float = 3.14;
logs.push("1. typeof integer (123) => '" + typeof integer + "'");
logs.push("   typeof float (3.14) => '" + typeof float + "'");

// 2. Các hệ cơ số khác (Nhị phân 0b, Bát phân 0o, Thập lục phân 0x)
const NhiPhan = 0b1011;
const BatPhan = 0o75;
const ThapLucPhan = 0xFF;
logs.push("2. Hệ nhị phân 0b1011 => " + NhiPhan);
logs.push("   Hệ bát phân 0o75 => " + BatPhan);
logs.push("   Hệ thập lục phân 0xFF => " + ThapLucPhan);

// 3. Phương thức kiểm tra số nguyên Number.isInteger()
logs.push("3. Number.isInteger(5) => " + Number.isInteger(5));
logs.push("   Number.isInteger(5.0) => " + Number.isInteger(5.0));
logs.push("   Number.isInteger(5.1) => " + Number.isInteger(5.1));
logs.push("   Number.isInteger('5.0') => " + Number.isInteger('5.0'));

// 4. Ký hiệu mũ (Exponential notation)
let number1 = 1e3;
let number2 = 2.5e-2;
let number3 = 5.67e5;
logs.push("4. Ký hiệu mũ: 1e3=" + number1 + ", 2.5e-2=" + number2 + ", 5.67e5=" + number3);

// 5. Các phương thức của Number: toExponential, toFixed, toPrecision
const number = 5;
const PI = 3.1415926;
logs.push("5. (5).toExponential() => '" + number.toExponential() + "'");
logs.push("   PI.toFixed(3) => '" + PI.toFixed(3) + "'");
logs.push("   PI.toFixed(4) => '" + PI.toFixed(4) + "'");
logs.push("   (325678).toPrecision(2) => '" + (325678).toPrecision(2) + "'");
logs.push("   PI.toPrecision(3) => '" + PI.toPrecision(3) + "'");

// 6. Các phép toán số học và gán kết hợp
logs.push("6. Lũy thừa 2**3 => " + (2 ** 3) + " | Chia dư 23 % 6 => " + (23 % 6));
let points = 0;
points += 10;
points += 10;
points -= 5;
points *= 2;
points /= 3;
points %= 7;
logs.push("   Toán tử gán kết hợp kết quả cuối của points => " + points);

// 7. Toán tử tăng giảm ++ (Hậu tố vs Tiền tố)
let p = 6;
let postResult = p++; // trả về 6 rồi tăng p lên 7
let preResult = ++p;  // tăng p lên 8 rồi trả về 8
logs.push("7. Hậu tố p++ trả về: " + postResult + ", Tiền tố ++p trả về: " + preResult);

// 8. Vô cực (Infinity), NaN và Number.isFinite()
logs.push("8. 1/0 => " + (1 / 0) + " | 'hello' * 5 => " + ('hello' * 5) + " | typeof NaN => '" + typeof NaN + "'");
logs.push("   Number.isFinite(1/0) => " + Number.isFinite(1 / 0) + " | Number.isFinite(42) => " + Number.isFinite(42));

document.getElementById('outputNumber').textContent = logs.join('\n');
console.log(logs.join('\n'));
