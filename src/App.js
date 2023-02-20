import ContactForm from 'features/ContactsForm/ContactsForm';
import ContactList from 'features/ContactList/ContactList';
import Filter from 'features/Filter/Filter';
import { getLoading, getError } from 'components/selectors';
import { fetchContacts } from 'components/fetchContacts';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './App.module.css';

const App = () => {

  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.formBox}> 
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error ? <p> Is loading .... </p> : <ContactList />}
    </div>
  );
};

export default App;