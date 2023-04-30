import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className='ContactList'>
    {contacts.map(({ id, name, number })=> 
    <ContactListItem
    key={id}
    name={name}
    number={number}
    onDeleteContact={onDeleteContact}
    />
    )}
  </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.string.isRequired,
      name:PropTypes.string.isRequired,
      number:PropTypes.string.isRequired
    })),
    onDeleteContact: PropTypes.func
}
