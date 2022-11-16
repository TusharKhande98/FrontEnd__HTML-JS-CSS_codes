document.write("As we know its a scripting language so every content is considered as a string, so if we want a particular place where we need only numbers & if its a string so it will give 'NaN' as o/p for that purpose we use Number object.<br><br><br>")

document.write("1. Number is displayed as it is in this object.<br>")
var val1 = new Number("20")
document.write(val1 + "<br><br>")

document.write("2. true is considered as a value '1'.<br>")
var val2 = new Number(true)
document.write(val2 + "<br><br>")

document.write("3. false is considered as a value '0'.<br>")
var val3 = new Number(false)
document.write(val3 + "<br><br>")

document.write("4. If we type string inside it so o/p will be as below in number object.<br>")
var val4 = new Number("Hello")
document.write(val4 + "<br><br><br>")



document.write("5. 'IsNaN' Method- it dosent allow number in this object<br>")

document.write("I. Here we give number.<br>")
document.write(isNaN(20) + "<br><br>")

document.write("II. Here we give number in string.<br>")
document.write(isNaN("20") + "<br><br>")

document.write("III. Here we give string.<br>")
document.write(isNaN("Hello") + "<br><br><br>")



document.write("6. Number function- converts given argument to a number, if value can't be converted to a number.<br>")

document.write("I. Here we just give value as 'true'.<br>")
document.write(Number(true) + "<br><br>")

document.write("II. Here we just give value as 'false'.<br>")
document.write(Number(false) + "<br><br><br>")


document.write("7. parseInt function- used to parse an integer from a string.<br><br>")
function sum()
{
    var num1 = prompt("Enter first number")
    var num2 = prompt("Enter second number")
    var num = parseInt(num1) + parseInt(num2)
    // without 'parseInt' it will just concatinate 2 digits like a string
    alert(num)
}