var age = prompt("Type your age");
var is_subscribed = confirm("are you subscribed?");


// 4 scenarios
// the user is younger than 18 and not subscribed
if(age < 18 && is_subscribed == false) {
    console.log(" the user is younger than 18 and not subscribed");
}
else if(age > 18 && is_subscribed == false) {
    console.log(" the user is older than 18 and not subscribed");
}
// the user is younger than 18 and is subscribed
else if(age < 18 && is_subscribed == true) {
    console.log(" the user is younger than 18 and is subcribed");
}

else{
    console.log(" the user is older than 18 and is subscribed"
} 
   


