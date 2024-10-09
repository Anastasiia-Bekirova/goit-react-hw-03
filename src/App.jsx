import { useState, useEffect } from 'react'
import { nanoid } from "nanoid";

import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import initialContacts from './initialContacts.json'


import './App.css'

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts"); 
    const parsedContacts = JSON.parse(savedContacts) ?? initialContacts;
    return parsedContacts;
  });

   useEffect(() => {
     const savedContacts = JSON.stringify(contacts);
      localStorage.setItem("contacts", savedContacts);
  }, [contacts]);

  const [filter, setFilter] = useState('');
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

 const onAddContact = (formData) => {
    const newContact = {
      ...formData,
      id: nanoid(),
    };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

 const onDeleteContact = (contactId) => {
    setContacts((prevContacts) => { return prevContacts.filter((contact) => contact.id !== contactId); })
  };
  
  return (
  
     <div>
  <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contacts={visibleContacts }  onDelete={onDeleteContact} />
</div>
    
  )
}

export default App
