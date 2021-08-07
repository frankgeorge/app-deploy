import React,{ useState} from "react";
import './App.css';
import Header from "./Header";
import AddContact from './AddContact';
import ContactList from "./ContactList";

function App() {
  const[contacts, setContacts] = useState([]);

  const AddContactHandler = (contact) => {
    console.log(contact);
    }
  return (
    <div className="ui container">
      <Header> </Header>

      <AddContact AddContactHandler= {AddContactHandler}></AddContact>
      <ContactList contacts={contacts}></ContactList>

    </div>
  );

    
}

export default App;
