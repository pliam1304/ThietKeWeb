// Bài tập 2a: Thực thi các đoạn mã trong phần lý thuyết
const logs = [];

// 1. Câu lệnh và khối lệnh
{
    const message = 'Chao bac Teo!';
    logs.push('1. Câu lệnh chào: ' + message);
}

// 2. Phân biệt chữ hoa và chữ thường (Case-sensitive)
const myVariable = 'a';
const myvariable = 'b';
const MyVariable = 'c';
logs.push('2. Phân biệt hoa thường: myVariable=' + myVariable + ', myvariable=' + myvariable + ', MyVariable=' + MyVariable);

// 3. Toán tử typeof cơ bản
logs.push("3. typeof 'hi bac Teo' => " + typeof 'hi bac Teo');
logs.push("   typeof 123 => " + typeof 123);
logs.push("   typeof true => " + typeof true);
logs.push("   typeof {ten: 'van teo'} => " + typeof {ten: 'van teo'});
logs.push("   typeof [1, 2, 3] => " + typeof [1, 2, 3]);

// 4. Định kiểu động với biến var
var tuoi = 20;
logs.push('4. Khi tuoi = 20, typeof(tuoi) => ' + typeof(tuoi));
tuoi = 'hai muoi';
logs.push("   Khi tuoi = 'hai muoi', typeof(tuoi) => " + typeof(tuoi));

// 5. Khai báo với let và const
let diem = 7;
diem = 8;
logs.push('5. Biến let diem sau khi cập nhật => ' + diem);

let x = 1, y = 2, z = 3;
logs.push('6. Khai báo nhiều biến trên 1 hàng: x=' + x + ', y=' + y + ', z=' + z);

const arr = [1, 2, 3];
arr[0] = 4; // thay đổi giá trị phần tử của mảng khai báo bằng const
logs.push('7. Thay đổi phần tử mảng const arr => [' + arr.join(', ') + ']');

// Hiển thị kết quả 2a lên giao diện và Console
document.getElementById('output2a').textContent = logs.join('\n');
console.log(logs.join('\n'));

// Bài tập 2b: Bảng kiểm tra toán tử typeof
const items2b = [
    { label: 'null', expr: 'typeof null', result: typeof null, std: 'Object' },
    { label: 'undefined', expr: 'typeof undefined', result: typeof undefined, std: 'Undefined' },
    { label: '0', expr: 'typeof 0', result: typeof 0, std: 'Number' },
    { label: 'True (chữ T viết hoa)', expr: 'typeof True', result: typeof True, std: 'Undefined' },
    { label: 'true (chữ t viết thường)', expr: 'typeof true', result: typeof true, std: 'Boolean' },
    { label: "'True'", expr: "typeof 'True'", result: typeof 'True', std: 'String' },
    { label: '1e5', expr: 'typeof 1e5', result: typeof 1e5, std: 'Number' }
];

const tbody = document.getElementById('table2b');
items2b.forEach(function(item) {
    const tr = document.createElement('tr');
    tr.innerHTML = '<td><strong>' + item.label + '</strong></td>' +
                   '<td><code>' + item.expr + '</code></td>' +
                   '<td><code>\'' + item.result + '\'</code></td>' +
                   '<td><strong>' + item.std + '</strong></td>';
    tbody.appendChild(tr);
});
