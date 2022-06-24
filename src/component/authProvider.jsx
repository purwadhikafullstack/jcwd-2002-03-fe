// this page for check cookie if there's a cookie login in browsers
// for whole component in the project
// import to /pages/_app.js

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import jsCookie from "js-cookie";
import { loginAdmin } from "../redux/reducer/authAdminSlice";

const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const savedUserData = jsCookie.get("user");
        if (savedUserData) {
            const parsedUserData = JSON.parse(savedUserData);

            dispatch(loginAdmin(parsedUserData));
        }
    }, []);

    return <div>{children}</div>;
};

export default AuthProvider;
