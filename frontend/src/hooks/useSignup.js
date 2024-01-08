import { useState } from "react";
import useAuthContext from "./useAuthContext";
import axios from 'axios';

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatch} = useAuthContext();

    const sighUp = async(email, password) => {
        setIsLoading(true);
        setError(null);

        
    }
}

