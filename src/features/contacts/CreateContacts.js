import { FaUserPlus } from "react-icons/fa";
import { useState } from "react";
import { addContact } from "store/contactsAPI";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CreateContacts.module.css";

const CreateContacts = () => {

    const [newContactNumb, setNewContactNumb] = useState("");
    const [newContactName, setNewContactName] = useState("");
    const contacts = useSelector((state => state.contacts.contacts.items));

    const dispatch = useDispatch();

    const handleContactName = e => {
        setNewContactName(e.target.value);
    }

    const handleContactNumb = e => {
        setNewContactNumb(e.target.value);
    }

    const onAddContact = () => {
        if (newContactName.trim() === '' || newContactNumb.trim() === '') {
            return alert(`Please fill all the fields`)
        }
       else if (contacts.some(el => el.name.toLowerCase() === newContactName.toLowerCase())) {
            alert(`${newContactName} is already in contacts`)
        } else {
            const newContact = { name: newContactName, number: newContactNumb }
            dispatch(addContact(newContact));
            setNewContactName('');
            setNewContactNumb('');
        }
}

return (
    <div>
        <div className={styles.input_group}>
            <input className={styles.input}
                placeholder="Enter the contact name"
                type="text"
                name="name"
                value={newContactName}
                onChange={handleContactName}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <input className={styles.input}
                placeholder="Enter the contact phone"
                type="tel"
                name="number"
                value={newContactNumb}
                onChange={handleContactNumb}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <button className={styles.add_btn} onClick={onAddContact} type="submit">
                <FaUserPlus />
            </button>
        </div>
    </div >
)
}

export default CreateContacts;