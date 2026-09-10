let arr = [];
function array() {
    let input = document.getElementById("inputdata").value;
    arr = input.split(",").map(item => item.trim());
    display();
}
function push() {
    let element = document.getElementById("element").value;
    arr.push(element);
    display();
}
function pop() {
    arr.pop();
    display();
}
function unshift() {
    let element = document.getElementById("element").value;
    arr.unshift(element);
    display();
}

function shift() {
    arr.shift();
    display();
}

function display() {
    document.getElementById("result").innerHTML =
        "Array: [" + arr.join(", ") + "]";
}