const contacts = require('./contacts');

const invokeAction = async({ action, id }) => {
    switch (action) {
        case 'getAll':
            const all = await contacts.listContacts();
            console.table(all);
            break;
        case 'getById':
            const oneContact = await contacts.getContactById(id);
            console.log(oneContact);
            break;

    }
};

invokeAction({
    action: 'getById', id: "Z5sbDlS7pCzNsnAHLtDJd",
})