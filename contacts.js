const fs = require('fs/promises');
const path = require('path');
const contactsPath = path.resolve(__dirname, './db/contacts.json');


 const listContacts =  async () => {
    const data = await fs.readFile(contactsPath, 'utf-8');
    return JSON.parse(data)
};

async function getContactById(contactId) {
   const contactById =  fs.readFile(contactsPath) 
};

async function removeContact(contactId) {
    // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
};
  
async function addContact(name, email, phone) {
    // ...твій код. Повертає об'єкт доданого контакту. 
};

module.exports = { 
    listContacts,
    getContactById,
    addContact,
    removeContact, 
};