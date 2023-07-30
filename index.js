const contacts = require('./contacts');
const { program } = require('commander');

const invokeAction = async({
     action,
     id,
     name,
     email,
     phone
 }) => {
    switch (action) {
        case 'getAll':
            const all = await contacts.listContacts();
            console.table(all);
            break;
        case 'getById':
            const oneContact = await contacts.getContactById(id);
            console.log(oneContact);
            break;
        case 'addContact':
            const newContact = await contacts.addContact({ name, email, phone });
            console.log(newContact);
            break;
            case 'removeContact':
        const contact = await contacts.removeContact(id);
            console.log(contact);
            break;
        default:
            console.log("Unknown action");    
            break;
    }
};

program
.option('-a, --action <type>')
.option('-i, --id <type>')
.option('-n --name <type>')
.option('-em --email <type>')
.option('-p --phone <type>')

program.parse(process.argv);

const options = program.opts();

invokeAction(options);