// ! we will create this hook using useEffect and useState hook
import { useEffect } from "react";
import { useState } from "react";

// !creating hook
function useCurrencyInfo(currency) {

    const [data, setData] = useState({}); //!initially empty hai usestate then niche update hoga setData

    // !we use useEffect so that when this hook is called this api will be called
    useEffect(() => {
        // console.log(currency);
        // !we will use fetch method to call the api to recieve the data of conversion
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json()) //!converting into json because recieved in string format
            .then((res) => setData(res[currency])) //!adding value to setData because we want only res[currency] ka data 
        // console.log(data);
    }, [currency])
    // console.log(data);
    return data;
}

export default useCurrencyInfo;
// ! created custom hook by this way 