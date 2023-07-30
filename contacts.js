const fs = require('fs/promises');
const path = require('path');
const contactsPath = path.resolve(__dirname, './db/contacts.json');


 const listContacts =  async () => {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data)
};

const  getContactById = async (id) => {
   const contacts = await listContacts();
   const result = contacts.find((item) => item.id === id);
   return result ;
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