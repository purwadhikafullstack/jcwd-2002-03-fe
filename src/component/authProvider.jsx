import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loginAdmin } from "../redux/reducer/authAdminSlice";

const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const savedUserData = localStorage.getItem("user");
        if (savedUserData) {
            const parsedUserData = JSON.parse(savedUserData);

            dispatch(loginAdmin(parsedUserData));
        }
    }, []);

    return children
};

export default AuthProvider;
