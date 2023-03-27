import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "../../store/contacts.slice";
import { MdSearch } from "react-icons/md";
import styles from "./FilterContacts.module.css";

export const FilterContacts = () => {
    const filter = useSelector((state) => state.contacts.filter);
    const dispatch = useDispatch();

    const onFilterChange = (filter) => {
        dispatch(setFilter(filter))
    }

    return (
        <>
            <h3>Find contacts by name</h3>
            <div className={styles.search_input_wrapper}>
                <input className={styles.search_input} placeholder="Find a friend"
                    value={filter}
                    onChange={(e) => onFilterChange(e.target.value)}>
                    </input>
                <MdSearch className={styles.search_icon} />
            </div>
        </>
    )
}