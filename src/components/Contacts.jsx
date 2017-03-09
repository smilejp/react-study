import React from 'react';
import ContactInfo from './ContactInfo.jsx';

export default class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contactData: [
        { name: 'Abet', phone: '000-0000-0001' },
        { name: 'Betty', phone: '000-0000-0002' },
        { name: 'Chalie', phone: '000-0000-0003' },
        { name: 'David', phone: '000-0000-0004' },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <ul>
          {this.state.contactData.map((contact, i) => (<ContactInfo
            name={contact.name}
            phone={contact.phone}
            key={i}
          />))}
        </ul>
      </div>
    );
  }
}
