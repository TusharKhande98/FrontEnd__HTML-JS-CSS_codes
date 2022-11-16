function myfun1()
{
    alert("Welcome")
}

function myfun2()
{
    confirm("Do you want to move another side")
}

function myfun3()
{
    var ans = confirm("Do you want to move another side")
    if(ans)
    {
        window.location="http://www.yahoo.com"
    }
    else
    {
        alert("Sorry")
    }
}

function myfun4()
{
    prompt("Enter your name")
}

function myfun5()
{
    var name = prompt("Enter your name")
    alert(name)
}

