import PropTypes from 'prop-types';
import { List, Item, Button } from './ContactList.Styled'; 
import { ContactListItem } from '/.ContactList/ContactList';
export const ContactList = ({contacts, onDelete }) => {
    return (
        <List>   
        {contacts.map(({ id, name, number }) => (
            <ContactListItem key={id}>
                <Item>{name}: {number}</Item>
                <Button type="button" onClick={() => onDelete(id)}>Delete</Button>
            </ContactListItem>
        ))}
    </List>
)
        }
ContactList.propTypes = {
    onDelete: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired, 
    })),


}