import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { Section } from './Section/Section';

import {
  getDataFromLocalStorage,
  setDataToLocalStorage,
} from 'service/localStorage';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    this.setState({ contacts: getDataFromLocalStorage() });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      setDataToLocalStorage(this.state.contacts);
    }
  }

  addNewContact = newContact => {
    const contactExists = this.state.contacts.find(
      contact => contact.name.toUpperCase() === newContact.name.toUpperCase()
    );

    if (contactExists) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  setContactFilter = filterQuery => {
    this.setState({ filter: filterQuery });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const trimmedFilter = filter.toUpperCase().trim();
    if (trimmedFilter) {
      const filteredContacts = contacts.filter(contact =>
        contact.name.toUpperCase().includes(trimmedFilter)
      );
      return filteredContacts.length !== 0 ? filteredContacts : null;
    }
    return contacts;
  };

  render() {
    return (
      <Section>
        <div>
          <h1>Phonebook</h1>
          <ContactForm addNewContact={this.addNewContact} />

          <h2>Contacts</h2>
          <Filter setContactFilter={this.setContactFilter} />
          <ContactsList
            contacts={this.filterContacts()}
            deleteContact={this.deleteContact}
          />
        </div>
      </Section>
    );
  }
}
