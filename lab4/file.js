console.log("hiii")
function count()
{
    var str=document.getElementById("inputdata").value;
    var spl=str.toLowerCase().split("")
    var counta = 0 ,counte = 0, counti = 0,counto = 0, countu = 0;
    for( var i=0;i<spl.length;i++)
    {
        if(spl[i]=="a")
        {
            counta++;
        }
        if(spl[i]=="e")
        {
            counte++;
        }
        if(spl[i]=="i")
        {
            counti++;
        }
        if(spl[i]=="o")
        {
            counto++;
        }
        if(spl[i]=="u")
        {
            countu++;
        }
    }
    console.log("vowel count of A  = "+counta)
    console.log("vowel count of E = "+counte)
    console.log("vowel count of I = "+counti)
    console.log("vowel count of O = "+counto)
    console.log("vowel count of U = "+countu)
    document.getElementById("result").
}
function result()
{

}