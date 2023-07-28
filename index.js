function main() {
    console.log("Hello World");
}
main();

const { greeting } = require('./contacts');
const { admins } = require('./contacts');


greeting(admins[1])