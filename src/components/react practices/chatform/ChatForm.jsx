import { useState } from 'react';
import Chat from './components/react practices/chatform/Chat';
import ContactList from './components/react practices/chatform/ContactList';

export default function Messenger() {
    const [to, setTo] = useState(contacts[0]);
    return (
        <div>
            <ContactList 
            contacts={contacts}
            selectedContact={to}
            onSelect={contact => setTo(contact)}
            />
            <Chat contact = {to} />
        </div>
    )
}

const contacts = [
    { name: 'Taylor', email: 'taylor@mail.com' },
    { name: 'Alice', email: 'alice@mail.com'},
    { name: 'Bob', email: 'bob@mail.com'}
];
