console.log("=")
function count()
{    var str=document.getElementById("inputData").value;
    alert("str=====>"+str)
    var strToArray=str.toLowerCase().split("")
    console.log(strToArray);
    var count=0;
    var count_A=0, count_E=0, count_I=0, count_O=0, count_U=0;
    for(var i=0;i<strToArray.length; i++)
    {        if(strToArray[i] == 'a' || strToArray[i] == 'e' || strToArray[i] == 'i' || strToArray[i] == 'o' ||strToArray[i] == 'u' )
        {            count++;
        }
    }
    for(var i=0;i<strToArray.length; i++)
    {        if(strToArray[i] == 'a')
        {            count_A++;
        }
        if(strToArray[i] == 'e')
        {            count_E++;
        }
        if(strToArray[i] == 'i')
        {            count_I++;
        }
        if(strToArray[i] == 'o')
        {            count_O++;
        }
        if(strToArray[i] == 'u')
        {
            count_U++;
        }
    }
    console.log("Total vowels count:"+ count);
    console.log("Total A count:"+ count_A);
    console.log("Total E count:"+ count_E);
    console.log("Total I count:"+ count_I);
    console.log("Total O count:"+ count_O);
    console.log("Total U count:"+ count_U);
    document.getElementById("result").innerHTML ="<p>Total vowels count: " + count + "</p>" +
        "<p>Total A count: " + count_A + "</p>" +
        "<p>Total E count: " + count_E + "</p>" +
        "<p>Total I count: " + count_I + "</p>" +
        "<p>Total O count: " + count_O + "</p>" +
        "<p>Total U count: " + count_U + "</p>";
}