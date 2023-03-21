import PropTypes from 'prop-types';
import { List, ListItem, Item} from './ContactItem.Styled'; 
import { Button } from './ContactItem.Styled';

export const ContactItem = ({contacts, onDelete }) => {
    return (
        <List>
            
        {contacts.map(({ id, name, number }) => (
            <ListItem key={id}>
                <Item>{name}: {number}</Item>
                <Button type="button" onClick={() => onDelete(id)}>Delete</Button>
            </ListItem>
        ))}
    </List>
)
        }

ContactItem.propTypes = {
    onDelete: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired, 
    })),


}