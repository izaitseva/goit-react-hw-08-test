import ContactsList from "features/ContactsList";
import { useSelector } from "react-redux";
import CreateContacts from "./CreateContacts";
import { FilterContacts } from "./FilterContacts";
import useUser from "../hooks/UseUser";
import "./Contacts.css";

export const Contacts = () => {

    const contacts = useSelector((state => state.contacts.contacts));
    const { isAuth } = useUser();

    return (
        <div className="container">
            {isAuth &&
                <>
                    <h1>Phonebook</h1>
                    <CreateContacts />
                    <div>
                        {contacts.length === 0
                            ? <p>You don't have contacts yet</p>
                            : <>
                                <ContactsList />
                                <FilterContacts />
                            </>
                        }
                    </div>
                </>
            }
        </div>
    )
}