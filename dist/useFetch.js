import { useState, useEffect } from "react";
import castDates from "./castDates";
const useFetch = (fetchAddress) => {
    const [data, setData] = useState();
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
        fetch(fetchAddress)
            .then((res) => {
            if (!res.ok) {
                throw Error("Could not fetch data: " + res.status);
            }
            return res.json();
        })
            .then((data) => {
            castDates(data);
            setIsPending(false);
            setError("");
            setData(data);
        })
            .catch((err) => {
            setIsPending(false);
            setError(err.message);
            console.log(err.message);
        });
    }, [fetchAddress]);
    return { data, isPending, error };
};
export default useFetch;
