document.write("Content 1- showing width & height:-<br><br>")

document.write("Inner width of browser window = " + window.innerWidth + "<br>")
document.write("Outer width of browser window = " + window.outerWidth + "<br>")
document.write("Inner height of browser window  = " + window.innerHeight + "<br>")
document.write("Outer height of browser window including scrollbar & toolbar = " + window.outerHeight + "<br><br><br>") 


document.write("Content 2- Window name:-<br><br>")

window.name="Flash's Multiverse Window"
document.write("Name of window is:- "+ window.name + "<br><br>")


document.write("<br>Content 3- Open & close window:-<br><br>")

function openWin()
{
    var operator = window.open ("6 Operators.html", "operator", "width=350,height=280")
    // 1. we open link, 2. assign window name, 3. set width & height
}

function closeWin()
{
    if(operator)
    {
        operator.close()
        // not able to close reason unknown
    }
}




