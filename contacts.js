const fs = require('fs/promises');
const path = require('path');
const contactsPath = path.resolve(__dirname, './db/contacts.json');
const { nanoid } = require('nanoid');

 const listContacts =  async () => {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data)
};

const  getContactById = async (id) => {
   const contacts = await listContacts();
   const result = contacts.find((item) => item.id === id);
   return result || null ;
};

const removeContact = async (id) => {
    const contacts = await listContacts();
};
  
const addContact = async({ name, email, phone }) => {
    const contacts = await listContacts();
    const newContact = {
        id:nanoid(),
        name,
        email,
        phone,
    };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return newContact;
};

module.exports = { 
    listContacts,
    getContactById,
    addContact,
    removeContact, 
};