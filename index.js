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

    }
};

invokeAction({
    action: 'addContact', name: 'Ruta', email: 'rutaMe@gmail.com', phone: '0663243123',
})