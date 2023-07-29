const fs = require('fs/promises');
const path = require('path');

async function readContacts() {
    const contactsPath = path.resolve(__dirname, './db/contacts.json')
    const text = await fs.readFile(contactsPath, 'utf-8')
    console.log(text)
}

module.exports = { readContacts }