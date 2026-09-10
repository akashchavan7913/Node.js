function spreadDemo() {
    let numbers1 = [10, 20, 30];
    let numbers2 = [40, 50, 60];
    let combined = [...numbers1, ...numbers2];
    console.log("Spread Operator");
    console.log("Array 1:", numbers1);
    console.log("Array 2:", numbers2);
    console.log("Combined Array:", combined);
    document.getElementById("output").innerHTML =
        "Combined Array: " + combined;
}
function restDemo() {
    function addNumbers(...numbers) {
        let sum = 0;
        numbers.forEach(function(num) {
            sum += num;
        });
        return sum;
    }
    let result = addNumbers(10, 20, 30, 40);
    console.log("Rest Operator");
    console.log("Numbers:", 10, 20, 30, 40);
    console.log("Sum:", result);
    document.getElementById("output").innerHTML =
        "Sum using Rest Operator: " + result;
}
function destructuringDemo() {
    let student = {
        name: "Akash",
        age: 20,
        branch: "CSBS"
    };
    let { name, age, branch } = student;
    console.log("Object Destructuring");
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Branch:", branch);
   document.getElementById("output").innerHTML =
        `Name: ${name} | Age: ${age} | Branch: ${branch}`;
}
function mapDemo() {
    let numbers = [1, 2, 3, 4, 5];
    let squares = numbers.map(function(num) {
        return num * num;
    });
    console.log("Map Method");
    console.log("Original Array:", numbers);
    console.log("Squares:", squares);
    document.getElementById("output").innerHTML =
        "Squares using map(): " + squares;
}
function filterDemo() {
    let numbers = [10, 15, 20, 25, 30, 35];
    let result = numbers.filter(function(num) {
        return num > 20;
    });
    console.log("Filter Method");
    console.log("Original Array:", numbers);
    console.log("Numbers greater than 20:", result);
    document.getElementById("output").innerHTML =
        "Numbers greater than 20: " + result;
}
function forEachDemo() {

    let fruits = ["Apple", "Mango", "Banana", "Orange"];
    console.log("ForEach Method");
    fruits.forEach(function(fruit) {
        console.log(fruit);
    });
    document.getElementById("output").innerHTML =
        "Fruits: " + fruits.join(", ");
}