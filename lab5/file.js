console.log("=");
function showReverse()
{
    var str = document.getElementById("inputData").value;
    var strToArray = str.split("");
    console.log(strToArray);
    var reverse = "";
    for(var i = strToArray.length - 1; i >= 0; i--)
    {
        reverse = reverse + strToArray[i];
    }
    console.log("Original string: " + str);
    console.log("Reversed string: " + reverse);
    document.getElementById("result").innerHTML =
        "<p>Original string: " + str + "</p>" +
        "<p>Reversed string: " + reverse + "</p>";
}
function showSort()
{
    var str = document.getElementById("inputData").value;
    var arr = str.split(",");
    console.log("Original array: " + arr);
    for(var i = 0; i < arr.length; i++)
    {arr[i] = Number(arr[i].trim());}
    arr.sort(function(a, b)
    {return a - b;});
    console.log("Sorted array: " + arr);
    document.getElementById("result").innerHTML =
        "<p>Sorted Array: " + arr.join(", ") + "</p>";
}
function showExtrema()
{
    var str = document.getElementById("inputData").value;
    var arr = str.split(",");
    console.log("Array: " + arr);
    for(var i = 0; i < arr.length; i++)
    {arr[i] = Number(arr[i].trim());}
    var min = arr[0];
    var max = arr[0];
    for(var i = 1; i < arr.length; i++)
    {
        if(arr[i] < min)
        {min = arr[i];}
        if(arr[i] > max)
        {max = arr[i];}
    }
    console.log("Minimum value: " + min);
    console.log("Maximum value: " + max);
    document.getElementById("result").innerHTML =
        "<p>Minimum value: " + min + "</p>" +
        "<p>Maximum value: " + max + "</p>";}