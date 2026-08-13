console.log("i anm in  js")
function av(data)
{
    var inputdata=document.getElementById("inputdata");
    if(data=="equal")
    {
        var op =eval(inputdata.value);
        alert(op)
        inputdata.value=op;
        return true;
    }
    if(data=="clear")
        {
           inputdata.value="";
        return true; 
        }
    
    inputdata.value=inputdata.value+data;
}
function btn1()
{
    av(1) 
    console.log("button 1 pressed")   
}
function btn2()
{
    av(2)
    console.log("button 2 pressed")
}
function btn3()
{
    av(3)
    console.log("button 3 pressed")
}
function btn4()
{
    av(4)
    console.log("button 4 pressed")
}
function btn5()
{
    av(5)
    console.log("button 5 pressed")
}
function btn6()
{
    av(6)
    console.log("button 6 pressed")
}
function btn7()
{
    av(7)
    console.log("button 7 pressed")
}
function btn8()
{
    av(8)  
    console.log("button 8 pressed")  
}
function btn9()
{
    av(9)
    console.log("button 9 pressed")
}
function btn0()
{
    av(0)
    console.log("button 0 pressed")
}
function btn00()
{
    av("00")
    console.log("button 00 pressed")
}
function btnadd()
{
    av("+")
    console.log("button + pressed")
}
function btnsub()
{
    av("-")
    console.log("button - pressed")
}
function btndiv()
{
    av("/")
    console.log("button / pressed")
}
function btnmul()
{
    av("*")
    console.log("button *  pressed")
}
function btnper()
{
    av("%")
    console.log("button % pressed")
}
function btnc()
{
    av("clear")
    console.log("button clear pressed")
}
function btnequ()
{
    av("equal")
    console.log("button = pressed")
}
