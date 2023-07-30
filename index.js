const contacts = require('./contacts');

const invokeAction = async({ action, id }) => {
    switch (action) {
        case 'getAll':
            const all = await contacts.listContacts();
            console.table(all);
            break
    }
}

invokeAction({
    action: 'getAll'
})