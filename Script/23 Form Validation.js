function validate1()
{
    var name = document.getElementById("uname").value
    if(name=="")
    {
        document.getElementById("error").innerHTML="* Please enter username"
        return false 
        // without returning 'false' data will submit & warning also dosent show clearly so form will submit with blank without it.
    }

    if(name.length<3)
    {
        document.getElementById("error").innerHTML="* Username must be great than 3 character"
        return false
    }

    if(name.length>9)
    {
        document.getElementById("error").innerHTML="* Username must be less than 9 character"
        return false
    }
}

function validate2()
{
    var name = document.getElementById("lname").value
    var pattern="/^[a-z,A-Z]+$/"
    // If we nees to fill character from a to z so in above way we can check condition for this pattern
    // this will be check by writing condition inside a syntax--->"/^[....]+$/"
    // ^ <-- it means 'not'
    if(!name.match(pattern))
    {
        document.getElementById("val2error").innerHTML="* Enter only character"
        return false
    }
}

function password1()
{
    var pass = document.getElementById("pass").value
    var cpass = document.getElementById("cpass").value
    // This above line is for confirm password case
    if(pass=="")
    {
        document.getElementById("passerror").innerHTML="* Please enter password"
        return false
    }
 
    if(pass.length<3)
    {
        document.getElementById("passerror").innerHTML="* Password must be greater than 3"
        return false
    }
    if(pass.length>8)
    {
        document.getElementById("passerror").innerHTML="* Password must be less than 8"
        return false
    }

    if(pass!=cpass)
    {
        document.getElementById("passerror").innerHTML="* Password dosen't match"
        return false
    }
}


function mblnumber()
{
    var number = document.getElementById("number").value
    if(number=="")
    {
        document.getElementById("mblnum").innerHTML="* Please enter your mobile number"
        return false
    }
    if(isNaN(number))
    // we learn this 'isNaN' in number object part
    {
        document.getElementById("mblnum").innerHTML="* Please enter numeric value"
        return false
    }
    if(number.length<10)
    {
        document.getElementById("mblnum").innerHTML="* Mobile number must be 10 digits(its below 10 digits)"
        return false
    }
    if(number.length>10)
    {
        document.getElementById("mblnum").innerHTML="* Mobile number must be 10 digits(its above 10 digits)"
        return false
    }
    if((number.charAt(0)!=9) && (number.charAt(0)!=8) && (number.charAt(0)!=7))
    {
        document.getElementById("mblnum").innerHTML="* Mobile number starts with 9,8 and 7  "
        return false
    }
}


function emailchk()
{
    var email = document.myform5.email.value
    if(email.indexOf('@')<0)
    // '@' symbol should not be in 0th or lesser place from zero
    {
        document.getElementById("emailcheck").innerHTML="* Invalid email ID"
        return false
    }
    if((email.charAt(email.length-4)!='.') || (email.charAt(email.length-3)!='.'))
    // generally '.'<-- this dot comes at last 4th & 3rd condition almost in every email
    {
        document.getElementById("emailcheck").innerHTML="* Invalid email ID"
        return false
    } 
}  // NOT WORKING PROPERLY REASON UNKNOWN, solve later



function radiobutton()
{
    var radio = document.myform6.container
    for(i=0; i<radio.length; i++)
    {
        if(radio[i].checked==true)
        {
            return true
        }
    }
    document.getElementById("radiobtn").innerHTML="* Select any one"
    return false
}