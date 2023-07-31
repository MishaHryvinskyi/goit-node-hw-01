const expres = require('express');
const fs = require('fs/promises');
const cors = require('cors');
const contactsRouter = require('./routes/api/contacts')

const contacts =require('./db/contacts.json');

const app = expres();

app.use(cors());

app.use("/api/contacts", contactsRouter);

app.listen(3000);


// app.get("/", (request, response) => {
//     response.send("<h2>Home page</h2>")
// });//GET

// app.get("/contacts", (request, response) => {
//     console.log(request.url);//маршрут
//     console.log(request.method);//тип запиту
//     response.send("<h2>Contacts page</h2>")
// });//GET

// app.listen(3000, () => console.log("Server running"));


// const contacts = require('./contacts');
// const { program } = require('commander');

// const invokeAction = async({
//      action,
//      id,
//      name,
//      email,
//      phone
//  }) => {
//     switch (action) {
//         case 'getAll':
//             const all = await contacts.listContacts();
//             console.table(all);
//             break;
//         case 'getById':
//             const oneContact = await contacts.getContactById(id);
//             console.log(oneContact);
//             break;
//         case 'addContact':
//             const newContact = await contacts.addContact({ name, email, phone });
//             console.log(newContact);
//             break;
//             case 'removeContact':
//         const contact = await contacts.removeContact(id);
//             console.log(contact);
//             break;
//         default:
//             console.log("Unknown action");    
//             break;
//     }
// };

// program
// .option('-a, --action <type>')
// .option('-i, --id <type>')
// .option('-n --name <type>')
// .option('-em --email <type>')
// .option('-p --phone <type>')

// program.parse(process.argv);

// const options = program.opts();

// invokeAction(options);