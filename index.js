const contacts = require('./contacts');

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

invokeAction({
    action: 'removeContact', id: "yPcGb5LiFW9UUi3L6Ux8S",
})