// var result2 = sum(30,50)
// if we run only this line so it will throw error as 'undefined' when we inspect it in a console of web browser
// for this purpose we use try-catch block for sam example


try
{
    var result1=sum(40,50);
}
catch(ex)
// in catch we create an object with name 'ex'
{
    document.getElementsById("errorMessage").innerHTML += ex;
}
finally
    {
    document.getElementById("message").innerHTML="finally Block Executed"
    }
document.write("Welcome")

// NOT ABLE TO SOLVE THIS PROBLEM SEE IT LATER

