document.write("1. Output Using Constructor:-<br>")
var str1 = new Object()
str1.name = "Flash"
str1.email = "Flash98@gmail.com"
str1.id = 24
document.write(str1.name + "<br>")
document.write(str1.email + "<br>")
document.write(str1.id + "<br>")
document.write("<br><br>")


document.write("2. Output Using Literal:-<br>")
var str2 = {name:"Flash", email:"Flash98@gmail.com", id:24}
document.write(str2.name + "<br>")
document.write(str2.email + "<br>")
document.write(str2.id + "<br>")
document.write("<br><br>")


document.write("3. Output using a function:-<br>")
var sum1 = {a:10, b:20, total:function()
    // a & b are ssigned value & total is declared as our function
    {
    return(sum1.a+sum1.b)
    // we write this cauz we need to access value a & b
}
} // observe opening & closing syntax properly
document.write("Sum by using 'total' function is---> "+sum1.total())
document.write("<br><br><br>")
    

document.write("4. Output by cretaing User defined function:-<br>")
function Student()
{
    this.name = "Lucifer"   
    this.email = "Ultron98@gmail.com"
    this.id = 9199
    // this keyword access current value without it we cant get output
}
var str3 = new Student()

document.write(str3.name + "<br>")
document.write(str3.email + "<br>")
document.write(str3.id + "<br>")
document.write("<br><br>")
