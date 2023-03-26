import { Contacts } from "features/contacts/Contacts";
import { Route, Routes } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "store/contactsAPI";
import { paths } from "paths";
import LoginForm from "features/login/Login";
import { Register } from "features/login/Register";
import { Main } from "features/Main";

export default function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    return (
        <Routes>
            <Route path={paths.main} element={<Main />}>
                <Route index element={<Contacts />} />
                <Route path={paths.login} element={<LoginForm />} />
                <Route path={paths.register} element={<Register />} />
            </Route>
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes >
    )
}