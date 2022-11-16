// document.write("1. Local variable-A variable that is declared inside a function definition is called local and has scope to that function only.<br>")
// function sumL()
// {
//     var a= 40 // Local variabl
//     document.write("Local variable can be print from Inside a function is a=: "+a+"<br>And this local var is only can be access inside block statement. <br>")
// }
// sumL()
// document.write("Global variable can be print from  Outside a function"+a+"<br>")
// document.write("<br><br><br>")


// document.write("2. Global variable- A variable that is declared outside of a function definition is called a global variable and its scope is throughout your program means its value is accessible and modifiable throughout your program.<br>")
// var b= 60 // Global variabl assigned before the fucntion
// function sumG()
// {
//     document.write("Global variable can be print from Inside function is b=: "+b+"<br>")
// }
// sumG()
// document.write("Global variable is also can be printed from Outside a function is: "+b+"<br>")



// document.write("3. Default Parameter- A JavaScript function can have default parameter values. Using default function parameters, you can initialize formal parameters with default values. If you do not initialize a parameter with some value, then the default value of the parameter is undefined.<br>")

// document.write("code-I <br>")
// function myfun(a,b,c,d=40)
// {
//     document.write(a+"<br>"+b+"<br>"+c+"<br>"+d)
// }
// myfun(10,20,30) // d = default value
// document.write(("<br>"))

// document.write("code-II <br>")
// function myfun(a,b,c=30,d)
// {
//     document.write(a+"<br>"+b+"<br>"+c+"<br>"+d)
// }
// myfun(10,20,40) // c = default value
// document.write("<br><br>")
// document.write("Default value only can be set on last variable otherwise we get 'undefined' instead of any value.<br>")



document.write("4. Rest Parameter- The rest parameter allows us to represent an indefinite number of arguments as an array.<br><br>")
document.write("code-I <br>")
function restpara(a,...b)
{
    document.write(a+"<br>"+b)
}
restpara(10,20,30,40,50,60,70)
document.write("<br>as we can see it, we assign 2 parameter as-->(a,...b) so 1st value stored in 'a' & remaining are in 'b'.<br><br>")

document.write("code-II <br>")
function restpara(a,b,...c)
{
    document.write(a+"<br>"+b+"<br>"+c)
}
restpara(10,20,30,40,50,60,70)
document.write("<br>Here we assign 3 parameter as-->(a,b,...c) so 1st value stored in 'a', 2nd value stored in 'b' & remaining are in 'c'.<br><br><br>")


document.write("5. Function Expression- When we create a function and assign it to a variable known as function expression.<br><br>")
document.write("It is same as function we see difference in below code<br><br>")
document.write("Code-I:- Normal function<br>")
function sumof(a,b)
{
    var c 
    c = a+b
    document.write("Output with normal function, So value of c="+c+", in this we call function.<br><br>")
}
sumof(30,40)
document.write("Code-II:-Function expression <br>")

var total = function sumexp(a,b) // function stored in variable
{
    var c 
    c = a+b
    document.write("Output with Function expression, So value of c="+c+", in this we call variable in which function is stored.<br><br>")
}
total(30,40) // instead of function we called variable


document.write("6. Anonymous Function- .When a function is defined without a name, it's known as an anonymous function. The function is stored in memory, but the runtime doesn't automatically create a reference.<br><br>")
var anonm = function (a,b)
{
    var c 
    c = a+b
    document.write("Here we dosen't set any function name thats why it called as anonymous function & value of c="+c+".<br><br>")
}
anonm(130,140) // instead of function we called variable


document.write("7. Arrow Function- Arrow Function expression has a shorter syntax compare to function expression. arrow function are always anonymous.<br><br>")
document.write("NOTE:- syntax is getting smaller & smaller observe it in a code.<br><br>")

var arrtotal=(a,b)=> // ITS A SYNTAX.
{
    var c 
    c = a+b
    document.write("Arrow funtion is most used in project.<br>Syntax of arrow() is as'=(parameters which are passed)=>' <br>just create 1 variable & apply this syntax after it, So value of c="+c+".<br><br>")
}
arrtotal(1030,1040) // we call variable & here no function name available
 

document.write("8. Closure- Closure means that an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned.<br><br>")
document.write("Code-I<br>")
function outerfunc()
{
    var a=40
    var b=20
    document.write(a+","+b+",")
    function insidefunc()
    {
        var c=50
        document.write(c)         
    } 
    insidefunc() // if we write this after all blocks so we dont get any o/p.
}
outerfunc();
// insidefunc() this will not give o/p, it will be as above line not here.
document.write("<br><br>")

document.write("Code-II:- in this we write outer function print syntax in inner, we get o/p correctly.<br>  ")
function outerfunc()
{
    var a=40
    var b=20
    function insidefunc()
    {
        var c=50
        document.write(a+","+b+",") // its outer function's msg
        document.write(c)         
    } 
    insidefunc() // if we write this after all blocks so we dont get any o/p.
}
outerfunc();

document.write("Code-III:- in this  we write outer function print syntax in inner, we get o/p correctly.<br>  ")
function outerfunc()
{
    var a=40
    var b=20
    document.write(a+","+b+",")
    // document.write(c)  // its inner function print syntax       
    function insidefunc()
    {
        var c=50
    } 
    insidefunc() // if we write this after all blocks so we dont get any o/p.
}
outerfunc();
document.write("<br>we get error<br>")
document.write("Outer is a parent class & inside is a child class, So parent element can't access any child element, but child can access parent's element.<br><br>")


document.write("9. Callback Function- A callback function is a function passed into another function as an argument.<br><br>")
function msg(name)
{
    document.write("Welcome "+name)
}
function username(callback)
{
    var name = "Flash"
    callback(name)
}
username(msg)

