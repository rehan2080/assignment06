// Chapter 21 -25 task 01

// var firstname = "Rehan";

// var secondname = "Aslam";

// document.write(firstname +" " + secondname);



// Chapter 21 -25 task 02//

// var mobilename = prompt("Enter your favorite mobile model");


// document.write("My Favourite Phone is " + mobilename);

// document.write("<br>");

// var len = mobilename.length;

// document.write("Length of String " + len);

// Chapter 21 -25 task 03//


//  var text = "Pakistani";


//  document.write("<h1> String is " + text);

//  document.write("<br>");

//  var ind = text.indexOf("n");

//  document.write("Index of 'n' " + ind);


// Chapter 21 -25 task 04//


// var text = "Hello World";

// var ind = text.lastIndexOf("l");


// document.write("<h1> String is " + text);

// document.write("<br>");

// document.write("Last Index of 'l' " + ind);


// Chapter 21 -25 task 05//


// var text = "Pakistani";

// var ind = text.charAt(3);


// document.write("<h1> String is " + text);

// document.write("<br>");

// document.write("Character at Index 3: " + ind);



// Chapter 21 -25 task 06

//  var firstname = "Rehan";

//  var secondname = "Aslam";

// document.write(firstname + " " + secondname);


// Chapter 21 -25 task 07//


//  var text = "Hyderabad";

//  var ind = text.replace("Hyder","Islam");


//  document.write("<h1> City: " + text);

//  document.write("<br>");

//  document.write("After replacement: " + ind);




// Chapter 21 -25 task 08//


//   var text = "Ali and Sami are best friends. They play cricket and football together";

//   var ind = text.replace(/and/g,"&");


//   document.write("<h1> ACtual Message: " + text);

//   document.write("<br>");

//   document.write("REvised Message: " + ind);



  // Chapter 21 -25 task 09//

//   var text = "472";

//   var ind = parseInt(text);

//   var ty = typeof(text);

//   var ty1 = typeof(ind);
  
  
//   document.write("<h1> Value: " + text);

//   document.write("<br>");

//   document.write("<h1> Type: " + ty);

//   document.write("<br>");

//   document.write("<h1> Value: " + ind);

//   document.write("<br>");

//   document.write("<h1> Type: " + ty1);

 

// Chapter 21 -25 task 10//

// var input = prompt("Enter your Input");

// var uper = input.toUpperCase();

// document.write("<h1> User Input: " + input);

// document.write("<br>");

// document.write("<h1> Upper Case: " + uper);



// Chapter 21 -25 task 11//


// var input = prompt("Enter your Input");

// var tit = input.slice(1);

// var tit1 = input.slice(0,1);

// var uper = tit1.toLocaleUpperCase();

// document.write("<h1> User Input: " + input);

// document.write("<br>");

// document.write("<h1> title case: " + uper + tit);




// Chapter 21 -25 task 13//


//  var username = prompt("Enter your valid username");



// // var a = username.charCodeAt();

// var result = true;


// for (var i=0; i<username.length; i++)

// if (username.slice(i,i+1) === "!")

// {

//   document.write("Please enter a valid uername");

//   result = false;
//   break


//   }

//   else if (username.slice(i,i+1) === ",")


//   {

//     document.write("Please enter a valid uername");
 
//     result = false;
//     break

//    }

//    else if (username.slice(i,i+1) === ".")


//    {
 
 
//     document.write("Please enter a valid uername");  

//     result = false;
//     break


//   }

//     else if (username.slice(i,i+1) === "@")


//   {


//     document.write("Please enter a valid uername");
// result = false;
// break

//   }

//   if(result)
//   {

  
//   document.write("Congratulations");
  
// }



// // Chapter 21 -25 task 12//

// var num = 33.56;



// var str = num.toString();

// var r = str.replace(".","");



// document.write(r);


// Chapter 21 -25 task 14//




// var bakerylist = ["cake","apple pie","cookie","chips","patties"];



// var input = prompt("Welcome to ABC Bakery What do you want to order Sir!");


// if (bakerylist.indexOf(input) !== -1)
// {

// document.write(input + " is available at index " + bakerylist.indexOf(input) + " in our bakery");

// }

// else{

//   document.write("We are sorry " + input + " is not available in our bakery");

// }



// Chapter 21 -25 task 14//


// var university = "University of Karachi";

// var spt = university.split("");



// for (var i=0; i<spt.length; i++)
// {

//   document.write(spt[i] + "<br>");

// }






// Chapter 21 -25 task 18//

// var text = "The quick brown fox jumps over the lazy dog"

// var newtext = text.count("the")

// document.write(newtext);









// var val1 = +prompt("enter your num");

//  var eq = prompt("Enter value");

//  var val2 = +prompt("enter your num");

//  var num = eq.length;


//  for (var i =0; i<num; i++ )

//  {
//  if (s.indexOf(0) === 1)

 
//  {

//    document.write("hellow");
//    break
//  }

  
//  }



//  if (eq.slice(i,i+1) === "+")

// if (eq.length > 6)


















// var val = prompt("enter your name");

// var val1 = val.slice(1);

// var first = val.slice(0,1);

// var y = first.toUpperCase();

// document.write(y + val1);













// var a = +prompt("Enter first number");

// var b = prompt("Enter Operatorr");

// var c = +prompt("Enter second number");


// function calc(a,b,c)
// {

// if (b === "+"){

//   return a + c

// }

// if (b === "-"){

//   return a - c
  
// }

// if (b === "*"){

//   return a * c
  
// }

// if (b === "/"){

//   return a / c
  
// }

// }

// var result  = calc(a,b,c);
// document.write(result);














// var username = prompt("Enter your valid username");



// var a = username.charCodeAt();

// var result = true;


// for (var i=0; i<username.length; i++)

// if (username.slice(i,i+1) === "!")

// {

//   document.write("Please enter a valid uername");

//   result = false;
//   break


//   }

//   else if (username.slice(i,i+1) === ",")


//   {

//     document.write("Please enter a valid uername");
 
//     result = false;
//     break

//    }

//    else if (username.slice(i,i+1) === ".")


//    {
 
 
//     document.write("Please enter a valid uername");  

//     result = false;
//     break


//   }

//     else if (username.slice(i,i+1) === "@")


//   {


//     document.write("Please enter a valid uername");
// result = false;
// break

//   }

//   if(result)
//   {

  
//   document.write("Congratulations");
  
// }

// Chapter 26 to 30 task 01//

// var num = +prompt("enter positive integer num");

// var t = Math.round(num);

// var f = Math.floor(num);

// var c = Math.ceil(num);

// document.write("<h1>Number " + num);

// document.write("<br>");

// document.write("<h1>Round off " + t);

// document.write("<br>");

// document.write("<h1>Floor Value " + f);

// document.write("<br>");

// document.write("<h1>Ceil Value " + c);

// document.write("<br>");



// Chapter 26 to 30 task 02//


//  var num = +prompt("enter positive integer num");

//  var t = Math.round(num);

//  var f = Math.floor(num);

//  var c = Math.ceil(num);

//  document.write("<h1>Number " + num);

//  document.write("<br>");

//  document.write("<h1>Round off " + t);

//  document.write("<br>");

//  document.write("<h1>Floor Value " + f);

//  document.write("<br>");

//  document.write("<h1>Ceil Value " + c);

//  document.write("<br>");



// Chapter 26 to 30 task 04//


// var num = 4;

// var a = Math.random(num);

// document.write(a)

// document.write("<br>");



// var num1 = 4;

// var b = Math.random(num);

// document.write(b)



// Chapter 26 to 30 task 07/


// var weight = prompt("Enter your weight");

// document.write("Your Weight is " + weight);



// Chapter 26 to 30 task 08/

// var secret = 8;


// var num = +prompt("Enter your secret number");


// if ( num >= 1 && num <=10 && num !=8)

// {
// document.write("Try Again")



// }

// else if (num === secret)
// {

//   document.write("Congratulates");

// }




// Chapter 31 to 34 task 01/


// var d = new Date();

// document.write(d);


// Chapter 31 to 34 task 2/


// var d = new Date();

// var m = d.toString();

// var t = m.slice(4,7)

// document.write("Current month " + t);


// Chapter 31 to 34 task 3/


// var d = new Date();

// var m = d.toString();

// var t = m.slice(0,3);

// document.write("Current day " + t);

// Chapter 31 to 34 task 4/


// var d = new Date();

// var m = d.toString();

// var t = m.slice(0,3);

// if (t === "Sat" || t == "Sun" )
// {

// document.write("Its FunDAY ");

// }


// Chapter 31 to 34 task 5//


// var d = new Date();

// var s = d.toString();

// var t = s.slice(8,11);

// document.write(t)



//  if (s < 16 )
//   {

//   document.write("First Fifteenth Days of the month ");

//   }


// Chapter 31 to 34 task 6//

//  var d = new Date();

//   var m = d.getTime();


// var s = m.toString();

//  document.write("<h1> Current date " + d);

//  document.write("<br>");

//  document.write("<h1> Elapsed Milliseconds since jan 01 1970 " + m);

// var n = s/(1000*60*60);

//  document.write("<br>");

//  document.write("<h1> Elapsed Minutes since jan 01 1970 " + n)

  
// Chapter 31 to 34 task 7//

// var t = new Date();



//  var m = t.toString();

//  var t = m.slice(16,18);

//  if (t < 12 )
//  {

//  document.write("Its AM ");

//  }

// else 
// {

//   document.write("Its PM ");
 
//   }
 

// Chapter 31 to 34 task 8//


// var laterDate = new Date("Dec 19, 2020");


// document.write(laterDate);


// Chapter 31 to 34 task 9//


// var d = new Date("Jun 18, 2015");

// var m = d.getTime();

// var actual = new Date();

// var actual1 = actual.getTime();

// var diff = actual1 - m

// var days = diff/(1000*60*60*24);

// var round = Math.floor(days);


// document.write(round  + " Days have passed since 1st ranadan 2015");


// Chapter 31 to 34 task 10//


//  var d = new Date("Dec 05, 2015");

//  var m = d.getTime();

//  var actual = new Date();

//  var actual1 = actual.getTime();

//  var diff = actual1 - m

//  var secs = diff/(1000*60);

//  var round = Math.floor(secs);


//  document.write("On reference Date " + d);

//  document.write("<br>")


//  document.write(round  + " Seconds have passed since beginning of 2015");




// Chapter 31 to 34 task 12//


//   var d = new Date("June 23, 1920");

  

//   var actual = new Date();

  

//  document.write("Current Date " + actual);

//   document.write("<br>")


//   document.write(" 100 Years back, it was " + d);




// Chapter 31 to 34 task 13//


//  var d = +prompt("Enter your birthyear");


// var r = d.toString();


//  var actual = new Date();

//  var s = actual.toString();

//   var t = s.slice(11,15);

// var z = t - r 

// document.write(" Your age is " + z);

// document.write("<br>");

// document.write(" Your birth year is " + d);


// }

// Chapter 35 to 38 task 1//


// var d = new Date();

// document.write(d);


// Chapter 35 to 38 task 2//


// function name(a,b){

//   alert(a,b)

// }

// name("Rehan" + " " + "Aslam");




// Chapter 35 to 38 task 3//


// var a = +prompt("Enter 1st number");
// var b = +prompt("Enter 2nd number");

// function num(a,b){


// alert(a + b)
  
//  }

// num(a,b);


// Chapter 35 to 38 task 4//


//  var a = +prompt("Enter 1st number");
//  var b = +prompt("Enter Operator");
//  var c = +prompt("Enter 2nd number");

 
//  function num(a,c){


  
//  if (b = "+")

//  {

//  alert(a + c)
  
//   }

//   if (b = "-")

//  {

//  alert(a - c)
  
//   }

//   if (b = "*")

//  {

//  alert(a * c)
  
//   }

//   if (b = "/")

//  {

//  alert(a / c)
  
//   }
// }

//  num(a,c);



// Chapter 35 to 38 task 5//



// function num(a) {

//   var c = a * a;
//   alert(c);



// }


// num(2)


// Chapter 35 to 38 task 9//


// var a = +prompt("Enter width");
// var b = +prompt("Enter height");


//  function num(a,b) {

//   var c = a * b;

//   alert("Area of a rentangular is " + c);



//  }


//  num(a,b)


// Chapter 35 to 38 task 11//

//   var a = prompt("Enter sentence");

//    var b = a.slice(0,1);

//    var c = b.toUpperCase();
  
  
//    var d = a.slice(1);


// document.write("EXAMPLE STRING " + a)

// document.write("<br>")


//    function word(c,d) {

  
//   document.write("EXPECTED OUTPUT " + c + d)
  
//    }

//    word(c,d);


