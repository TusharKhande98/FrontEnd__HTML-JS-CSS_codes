document.write("1. Date display as our system:-<br>")
var dt1 = new Date()
document.write(dt1)
document.write("<br><br>")

document.write("2. Date display with milli-seconds:-<br>")
var dt2 = new Date(23909)
document.write(dt2)
document.write("<br><br>")
 

document.write("3. Date display using string(time cant be display in this):-<br>")
var dt3 = new Date("23 oct, 2019")
document.write(dt3)
document.write("<br><br>")
 

document.write("4. Date & time display:-<br>")
var dt4 = new Date("31 dec,  2020 10:20:20")
document.write(dt4)
document.write("<br><br>")
  

document.write("5. Get Date, Day, Month, etc.. methods:- <br>")
var dt5 = new Date("29 jul,  2022 10:20:20")
document.write("Below methods are only used if some parameter(date) is passed in bracket of new date function, cauz it can't change current time & date<br>")
document.write("Our Mentioned Date is: " + dt5 + "<br>")
document.write("Here we get only date: " + dt5.getDate() + "<br>")
document.write("Here we get only month in number & it starts from zero(not 'one'): " + dt5.getMonth() + "<br>")
document.write("Here we get only day represent by number (i.e. sunday=0, monday=1...): " + dt5.getDay() + "<br>")
document.write("Here we get only year): " + dt5.getFullYear() + "<br>")
document.write("Here we get hours): " + dt5.getHours() + "<br>")
document.write("Here we get minutes): " + dt5.getMinutes() + "<br>")
document.write("Here we get seconds): " + dt5.getSeconds() + "<br>")
document.write("Here we get milliseconds): " + dt5.getMilliseconds() + "<br>")
document.write("<br><br>")
 

document.write("6. We can change the date if we passed another date in a function:-<br>")
var ch1 = new Date("22 jan, 2021  10:22:55")
document.write(ch1 + "<br>")
ch1.setDate(30)
ch1.setMinutes(12)
ch1.setFullYear(2022)
// ch1.setYear(23)
// it can takes 2 digits of year only but its make as 1923(reason unknown) 
document.write(ch1)

