document.write("CODE-I:- While Loop<br><br>")
var i=1;
document.write("Value of i=0, and its incremented in while loop by--->'i++' so,<br>")
while(i<=5)
{
    document.write(" i="+i+"<br>")
    i++ 
}
document.write("<br><br><br>")



document.write("CODE-II:- Do-While Loop<br><br>")
var j=1;
document.write("Value of j=0, and its incremented in do-while loop by--->'i++' so,<br>")
do
{
    document.write(" j="+j+"<br>")
    j++ 
}
while(j<=5)
document.write("<br><br><br>")



document.write("CODE-III:- For Loop<br><br>")
var j=1;
document.write("Value of j=0, and its incremented in for loop by--->'i++' so,<br>")
for(k=1; k<=5; k++)
{
    document.write(" j="+j+"<br>")
}
   
document.write("<br><br><br>")



document.write("CODE-IV:- Nested For Loop(loop inside loop).<br>We can print a '*' pattern using this nested for loop.<br><br>")

document.write("Pattern-1<br>")
for(l=1; l<=5; l++)  //row
{
    for(m=1; m<=5; m++)  // column
    {
        document.write("*")
    }
    document.write("<br>")
}
   
document.write("<br><br><br>")


document.write("Pattern-2<br>")
for(n=1 ; n<=5; n++)  //row
{
    for(o=1; o<=n; o++)  // column
    {
        document.write("*")
    }
    document.write("<br>")
}
   
document.write("<br><br><br>")


document.write("Pattern-3<br>")

// for(p=4 ; p<=5; p--)  //row
// {
//     for(q=1; q<=p; q++)  // column
//     {
//         document.write("*")
//     }
//     document.write("<br>")
// }
   
// THIS CODE DIDN'T WORK REASON UNKNOWN FIND LATER...
document.write("<br><br><br>")

