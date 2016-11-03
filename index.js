index.js

// simplest tri-lingual program 

var program = require('commander');
 
var person1_name = "James";
var person1_age = 25;
var person1_language = "english";

var person2_name = "Rita";
var person2_age = 7;
var person2_language = "danish";

var person3_name = "Greert";
var person3_age = 51;
var person3_language = "dutch";

program
  .version('0.1')
  .option('-n, --name [string]', 'Name of the person')
  .parse(process.argv);

switch(program.name)
{
    case(person1_name):
        console.log(person1_name);
        console.log(person1_age);
        console.log(person1_language);
        break;
    case(person2_age:
        console.log(person2_name);
        console.log(person2_age);
        console.log(person2_language);
        break;

    case(person3_name):
        console.log(person3_name);
        console.log(person3_age);
        console.log(person3_language);
        break;
    default:
        console.log('...');
        break;
}