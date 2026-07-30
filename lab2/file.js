   function Submit()
    {
        console.log("clicked on submit")
        var a=document.getElementById("username").value;
        var b=document.getElementById("pass").value;
        let op=validateEmail(a);
        console.log("email check ==",op)
         if(a="")
        {
            alert("please enter username")
            return false;
        }
        if(op)
        {
            alert("please enter proper email")
        }
        if(b="")
        {
         alert("please enter password")   
        return false;
        }
        console.log("username = ",a,"||" ,"password = ",b);

       
    }
    function validateEmail(email)
    {
        var emailregex = /^[^\s@]+@[^\s@}+\.[^\s@]+$/;
        return emailregex.test(email);
    }