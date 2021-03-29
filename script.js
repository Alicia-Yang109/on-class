document.write("Hello, world!");

function sayHello(){
  var response = prompt("what's ur name?")
 alert("hello"+ response +", have a good day!")
}

function add(a,b){
  return a+b;
}
console.log(add(20,30));
console.log(add(100,30));

function showTopic(){
   var x=document.getElementById("demo");
   x.style.fontSize="25px";
   x.style.color="red";
 }

 var movies=["Avengers","Captain Marvel","Black pathers","Spiderman"];
 movies[0]="Wonder Woman";
 movies.push("Avengers");
 movies.pop();
console.log(movies);

var movie={
  title:"Avengers",
  time:"12pm"
};
alert(movie.title);
movie.status="available";
console.log(movie)

var fruits=[];
for (i=1;i<10;i++){
  fruits[i]=prompt("Enter fruit")
}
alert("fruits contains"+fruits);

var movieDetails = [
{title: "Avengers",
time:"12pm",
 status: "available"},
 {title: "Captain Marvel",
  time:"2pm",
  status: "unavailable"},
   {title: "Black Panther",
   time:"4pm",
  status: "available"},
   {title: "Spiderman",
    time:"6pm",
     status: "available"}
    ];

    var fruits = [ ];
     for (i=1; i< 10 ; i++){
        fruits[i] = prompt("Enter fruit");
      }
      alert("fruits contains " + fruits);
