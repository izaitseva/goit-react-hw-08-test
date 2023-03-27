import ContactsList from "features/ContactsList";
import { useDispatch, useSelector } from "react-redux";
import CreateContacts from "./CreateContacts";
import { FilterContacts } from "./FilterContacts";
import useUser from "../hooks/UseUser";
import "./Contacts.css";
import { useEffect } from "react";
import fetchContacts from "store/contactsAPI";

export const Contacts = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

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