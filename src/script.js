// console.log("Before conditionals");
// let random = Math.random();

// if(random<0.5){
//     console.log("Your number is less than 0.5");
// } else{
//     console.log("Your number is less than or equal t0 0.5");
// }

// const dayOfWeek = 'Monday';
// if(dayOfWeek == 'Monday'){
//     console.log("I HATE MONDAYS!!")
// } else if(dayOfWeek == 'Saturday'){
//     console.log("I LOVE SATURDAYS!");
// }

// let babyPrice = 0;
// let childPrice = 10;
// let adultPrice = 20;
// let seniorPrice = 10;

// const age = 2;

// if(age<5){
//     console.log(`Please pay $${babyPrice}`);
// } else if(age<10){
//     console.log(`Please pay $${childPrice}`);
// } else if(age<65){
//     console.log(`Please pay $${adultPrice}`);
// } else if(age>65){
//     console.log(`Please pay $${seniorPrice}`);
// }

//Password
const password = prompt("Please enter a new password");

// if(password.length >=6){
//     if(password.indexOf(' ') == -1){
//         console.log('Valid Password');
//     } else{
//         console.log("Password cannot contain spaces!");
//     }
// } else{
//     console.log("PASSWORD TOO SHORT!");
// }

// if(password.length >= 6 && password.indexOf(' ') === -1){
//     console.log("Valid password");
// } else{
//     console.log("Incorrecct format for password");
// }

//Switch statement
const day = 1;
switch(day){
    case 1: 
        console.log("Monday");
        break;
    case 2:
        console.log("Teusday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid input");
}