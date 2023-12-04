//task 1
// var a = 10;

// document.write("<h1> Results </h1>"
//     + "<br>"
//     + "The value of a is: " + a
//     + "<hr>"


// )
// var a = ++a;
// document.write(

//     "The value of ++a is: " + a
//     + "<br>"
//     + "Now the value is: " + a
//     + "<br>"    
//     + "<br>"
// )

// var b= ++a;
// document.write("The value of a++ is: " + a
// + "<br>"
// + "Now the value is: " + b
// + "<br>"+ "<br>"
// )

// var c = --a;
// document.write("The value of --a is: " + a
// + "<br>"
// + "now the value is: " + c
// + "<br>"+ "<br>"
// )

// var d = a--;
// document.write(
//     "The value of a-- is: " + d 
//     + "<br>"
//     + "now the value is: " + a
// )










//task2
//var a = 2;
//var b = 1;
//var results = --a- --b + ++b + b--;
//this means
// var results = 1 - 0 + 1 + 1;
//document.write(results)



// //task3
// var username = prompt("Enter your name");


// if (username) {
//     alert("Hello, " + username + " Welcome to this program.")
// }
// else {
//     alert ("Hello unknown, welcome to the program.")
// }



// task 5
// var num = prompt("Please enter a number here");
// for (var i=1;i<=10;i++){
//     document.write("<div>")

//     document.write(num + " x " + num + " = " + i*num)
//     document.write("</div>")
// }



//task 6
var ecomonics = prompt("Enter economics marks")
var accouting = prompt("Enter accounting marks")
var business = prompt("Enter accounting marks")
var total = 100;


document.write("<td>")
document.write("<tr>"
+ ((ecomonics / total) * 100 )
+ "</tr>")
document.write("</td>")