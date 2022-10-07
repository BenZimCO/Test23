var prompt = require('prompt-sync')();
//
// get input from the user.
//
var age = prompt('enter from 1-7:');
age = parseInt(age);
switch(age){
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('saturday');
        break;
    default:
        console.log("invalid")
}