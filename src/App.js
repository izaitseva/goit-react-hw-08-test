import { Contacts } from "features/contacts/Contacts";
import { Route, Routes } from 'react-router-dom';
import { paths } from "paths";
import LoginForm from "features/login/Login";
import { Register } from "features/login/Register";
import { Main } from "features/Main";
import NotFound from "features/NotFound/NotFound";

export default function App() {

    return (
        <Routes>
            <Route path={paths.main} element={<Main />}>
                <Route index element={<Contacts />} />
                <Route path={paths.login} element={<LoginForm />} />
                <Route path={paths.register} element={<Register />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes >
    )
}