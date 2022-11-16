var a = 40
var b = 30
var c = 20
var d = "20"

document.write("CODE-I(A):- single 'If' statements always should have to be true, if its false then it gives blank o/p.<br><br>")
if(a==b)
{
    document.write("*Condition True<br><br>")
}

document.write("CODE-I(B):- In this condition is false, value are same but types are not so we get blank o/p in 'if' statement.<br><br>")
if(c===d)
{
    document.write("*Condition False")
}
document.write("<br><br>")

document.write("CODE-II(A):- In 'If-Else' we can give we can give condition for true & false both.<br>")
if(c===d) //types are same or not, so it execute else part now
{
    document.write("*values & types are equal")
}
else 
{
    document.write("*values are equal but types are not<br>")
}
document.write("<br><br>")

document.write("CODE-II(B):- prgm with If-Else to check which is greater<br>")
if(a<b) //which is grreater
{
    document.write("*'a' is greater than 'b'")
}
else 
{
    document.write("*'a' is not greater than 'b'<br><br>")

}
document.write("<br><br>")


document.write("CODE-III:- Prgm with If-Else-if to check that given variables are vowels or not.<br>")

var str='n'
if(str=='a')
{
    document.write("*'a' is a vowel<br>")
}
else if(str=='e')
{
    document.write("*'e' is a vowel<br>")
}
else if(str=='i')
{
    document.write("*'i' is a vowel<br>")
}
else if(str=='o')
{
    document.write("*'o' is a vowel<br>")
}
else if(str=='u')
{
    document.write("*'u' is a vowel<br>")
}
else
{
    document.write("*Its not a vowel<br>")
}
document.write("<br><br><br>")


document.write("CODE-IV(A):- Switch Case statement<br>")
var strg = 1;
switch(strg)
{
    case 0:
    document.write("*Its a case-0")
    break
// if we didnt write break so other cases also print continously with our o/p case.    

    case 1:
    document.write("*Its a case-1")
    break

    case 2:
    document.write("*Its a case-2")
    break

    case 3:
    document.write("*Its a case-3")
    break

    default:
    document.write("*Unknown case found")
    break
}
document.write("<br><br>")

 document.write("CODE-IV(B):- Switch Case for check vowels.<br>")
var vow = 'o';
switch(vow)
{
    case 'a':
    document.write("*Yes 'a' is a vowel")
    break

    case 'e':
    document.write("*Yes 'e' is a vowel")
    break

    case 'i':
    document.write("*Yes 'i' is a vowel")
    break

    case 'o':
    document.write("*Yes 'o' is a vowel")
    break

    case 'u':
    document.write("*Yes 'u' is a vowel")
    break

    default:
    document.write("*No, its not a vowel")
    break
}
document.write("<br><br><br><br>")


document.write("CODE-V(A):- Conditional statement(If-Else) with logical(AND-&&) opearator.<br>")
var m = 91
if(m <=100 && m >=80)
{
    document.write("Grade A")
}
else if(m <=80 && m >=70) 
{
    document.write("Grade B")
}
else if(m <=70 && m >=50)
{ 
    document.write("Grade C")
}
else if(m <=50 && m >=35)
{ 
    document.write("Grade D")
}
else
{
    document.write("Fail bro...")
}
document.write("<br><br>")

document.write("CODE-V(B):- Conditional statement(If-Else) with logical(OR-||) opearator.<br>")
var orVow = 'A'
if(orVow=='a' || orVow=='A' || orVow=='e' || orVow=='E' || orVow=='i' || orVow=='I' || orVow=='o' || orVow=='O' || orVow=='u' || orVow=='U')
{
    document.write("Yes, character "+"'"+orVow+"'"+" is a vowel")
}
else
{
    document.write("No, character "+"'"+orVow+"'"+" is not a vowel")
}
document.write("<br><br>")


document.write("CODE-V(C):- Conditional statement(If-Else) with logical(NOT-!) opearator.<br>")
var k=33
j=k%2
document.write(j+"<br>") // I wrote this & above line just for understanding
if(k%2!=0)
{
    document.write("Odd number")
  
}
else
{
    document.write("Even number")
}