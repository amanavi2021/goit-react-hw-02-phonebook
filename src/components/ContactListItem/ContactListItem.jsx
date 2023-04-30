import PropTypes from 'prop-types';
import { DeleteBtn } from './ContactListItem.styled';

export const ContactListItem = ({ name, number, onDeleteContact }) => (
    <li>
        <span>{name}</span>: <span>{number}</span>   
         <DeleteBtn 
         type='button' 
         className='ContactList_btn'
         onClick={() => onDeleteContact(name)}
         >Delete</DeleteBtn>   
    </li>
);

ContactListItem.propTypes = {
    name:PropTypes.string.isRequired,
    number:PropTypes.string.isRequired,
    onDeleteContact:PropTypes.func
}



