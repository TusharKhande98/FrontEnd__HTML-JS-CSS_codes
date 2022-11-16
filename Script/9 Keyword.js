document.write("CODE-I:- <br> Difference between var and let--->&nbsp&nbsp var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped. <br>We can see it below:<br><br>")

document.write("1. 'var' keyword-<br>")
if(true)
{
    var a=10
    document.write("In 'var' we access Inside block in which stored value is "+a+".<br>")
}
document.write("In 'var' we access Outside block in which stored value is "+a+".<br>")
document.write("<br>")

document.write("2. 'let' keyword-<br>")
let b=100 // if we cut-paste this line in block so we get o/p only 1 line of inside block. reason is mentioned in definition 
if(true)
{
    // write that line in seoarate code & check (cauz if we write that here then below code o/p has disappeared from browser[don't know why?])
    document.write("In 'let' we access Inside block in which stored value is "+b+".<br>")
}
document.write("In 'let' we access Outside block in which stored value is "+b+".<br>")

document.write("Both codes are same just check the differences in o/p.<br>")
document.write("<br>")


document.write("3. 'const' keyword-<br>This keyword also have a same property as above 'let' keyword & 2nd property we explain in code below.....<br>")

const pi=3.14 // after this we cant change value of 'c'
if(true)
{

    // pi=3.14 //we cant give or set same variable again after declare it as a constant
    document.write("We cant change 'const' var value if we assign it outside block & try to change it inside block again<br>")
    document.write("In 'const' we access Inside block in which stored value is "+pi+".<br>")
}
document.write("In 'const' we access Inside block in which stored value is "+pi+".<br>")
