// this page for check cookie if there's a cookie login in browsers
// for whole component in the project
// import to /pages/_app.js

import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import { signin } from "../redux/reducer/authSlice";

const AuthProvider = ({ children }) => {
    const [isAuthChecked, setIsAuthChecked] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const savedUserData = localStorage.getItem("admin")
        if (savedUserData) {
            const parsedUserData = JSON.parse(savedUserData);

            dispatch(signin(parsedUserData));
        }
        setIsAuthChecked(true)
    }, []);

    if (!isAuthChecked) {
        return <Spinner thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
            display="flex"
            mt="10px"
            mb="auto"
            ml="auto"
            mr="auto"
        />
    }
    return children


};

export default AuthProvider;
