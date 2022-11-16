document.write("CODE-I:- Function Calling-<br>")
document.write("A function is a group of reusable code which can be called anywhere in your program.This eliminates the need of writing same code again and again.<br><br>")
function myFun1()
{
    document.write("* Its a myFun1() function <br>")
} // upto this code we didnt get any output, cauz we haven't call a function after this code
document.write("<br><br><br>")

function myFun2()
{
    document.write("* Its a myFun2() function <br>")
}
myFun2()
document.write("<br><br>")

function sum()
{
    var a = 40
    var b = 20
    var c
    c = a+b
    document.write("*Here we call sum() function without parameter which add values of 'a' & 'b'===> "+a+"+"+b+"="+c+"<br>")
}
sum()
document.write("<br><br>")


function sumpara(d,e)

{
    var f
    f = d+e
    document.write("*Here we call sumpara() function with parameter which add values of 'a' & 'b'===> "+d+"+"+e+"="+f+"<br>")
}
sumpara() // value of this will passed to above parameter when we declared it in html file for call so d=20, e=50
document.write("<br><br>")


document.write("CODE-II:- Return Statement- <br>function to return a value back to where the call was made. This is possible by using the return statement.<br><br>")
function sumReturn(g,h)
{
    return g+h
}
var i = sumReturn(20,410)  // if we use 'return()' then write printing line outof block(observe above & this code) 
document.write("*Here we call sumReturn() by 'return' function which add values of 'g' & 'h'===> "+i+"<br>")
document.write("we also pass function with values directly as we do for this o/p---> "+sumReturn(30,29)+"<br>")
document.write("<br><br>")
