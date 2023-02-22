import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue, getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import style from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();
  
  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const deleteContacts = data => {
    dispatch(deleteContact(data));
};
  return filteredContacts.length > 0 ? (
    <ul className={style.list}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li className={style.id__list} key={id}>
                <p className={style.id__nameList}>{name}:  </p>
                <p className={style.id__numberList}> {number}</p>
            <button className={style.id__button} type="submit" onClick={() => deleteContacts(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No contacts.</p>
  );
};

export default ContactList;