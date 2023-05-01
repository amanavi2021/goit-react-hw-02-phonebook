import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ConstactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, PhonebookTitle, ContactsTitle } from './App.styled';

const INITIAL_STATE = {
  contacts: [
    {id:'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id:'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id:'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id:'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter:''
}

export class App extends Component {

  state = {
    ...INITIAL_STATE,
  };

  addContact = ({name, number}) => {

    const contactNames = this.state.contacts.map(contact => contact.name);
    const isExist = contactNames.includes(name);
    if (isExist) {
      return alert(`${name} is already in contacts.`)
    };

    const contact = {
      id: nanoid(),
      name,
      number
    };
    this.setState(({ contacts }) => ({contacts: [contact, ...contacts]}));
  };

  deleteContact = contactName => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.name !== contactName)
    }))
  };

  // contactId

  changeFilter = event => {
    this.setState({filter:event.currentTarget.value});
  };
   
  getFilteredContacts =() => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };


  render() {
    const { filter } = this.state;
    const filtredContacts = this.getFilteredContacts();

    return (
      <Container> 
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm onSubmit={this.addContact}/>

        <ContactsTitle>Contacts</ContactsTitle>
        <Filter 
        value={filter}
        onChange={this.changeFilter}
        />

        <ContactList 
        contacts={filtredContacts}
        onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
  
};


