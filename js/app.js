
var age = [
    5, 
    10, 
    15,
    20,
    25,
    30,
    35,
];
var is_subscribed = [
    "true",
    "false",
    "true",
    "false",
    "true",
    "false",
    "true",
];

for(var i = 0; i < 7; i++) {

if(age[i] < 18 && is_subscribed[i] == "false") {
    console.log("the user is younger than 18 and not subscribed");
}
else if(age[i] > 18 && is_subscribed[i] == "false") {
    console.log("the user is older than 18 and not subscribed");
}
else if(age[i] < 18 && is_subscribed[i] == "true") {
    console.log("the user is younger than 18 and is subcribed");
}
else {
    console.log("the user is older than 18 and is subscribed"); 
}
}