import React from 'react';
import ContactInfo from './ContactInfo.jsx';
import ContactCreator from './ContactCreator.jsx';
import ContactRemover from './ContactRemover.jsx';
import ContactEditor from './ContactEditor.jsx';
import update from 'react-addons-update';

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
      selectedKey: -1,
      selected: {
        name: '',
        phone: '',
      },
    };

    this.insertContact = this.insertContact.bind(this);
    this.isSelected = this.isSelected.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.removeContact = this.removeContact.bind(this);
  }

  onSelect(key) {
    if (key === this.state.selectedKey) {
      this.setState({ selectedKey: -1 });
      this.setState({ selected: { name: '', phone: '' } });
    } else {
      this.setState({ selectedKey: key });
      this.setState({ selected: this.state.contactData[key] });
    }
  }

  isSelected(key) {
    if (this.state.selectedKey === key) return true;

    return false;
  }

  insertContact(name, phone) {
    const newState = update(this.state, {
      contactData: {
        $push: [{ name, phone }],
      },
    });

    this.setState(newState);
  }

  removeContact() {
    if (this.state.selectedKey === -1) return;

    this.setState({
      contactData: update(
        this.state.contactData,
        {
          $splice: [[this.state.selectedKey, 1]],
        },
      ),
      selectedKey: -1,
    });
  }

  editContact(name, phone) {
    this.setState({
      contactData: update(
        this.state.contactData,
        {
          [this.state.selectedKey]: {
            name: { $set: name },
            phone: { $set: phone },
          },
        },
      ),
    });
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
            contactKey={i}
            isSelected={this.isSelected(i)}
            onSelect={this.onSelect}
          />))}
        </ul>
        <ContactCreator onInsert={this.insertContact} />
        <ContactRemover onRemove={this.removeContact} />
        <ContactEditor
          onEdit={this.editContact}
          isSelected={this.state.isSelected !== -1}
          contact={this.state.selected}
        />

      </div>
    );
  }
}
