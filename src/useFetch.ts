import {useState, useEffect} from "react";
import castDates from "./castDates";

interface IUseFetchOutProps<T> {
  data: T | undefined;
  isPending: boolean;
  error: string;
}

const useFetch = <T extends object,>(fetchAddress: string): IUseFetchOutProps<T> => {
  const [data, setData] = useState<T>();
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
      .then((data: T) => {
        castDates(data);
        setIsPending(false);
        setError("");
        setData(data);
      })
      .catch((err: Error) => {
        setIsPending(false);
        setError(err.message);
        console.log(err.message);
      });
  }, [fetchAddress]);

  return {data, isPending, error};
};

export default useFetch;
export {IUseFetchOutProps};