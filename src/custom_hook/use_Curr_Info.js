import { useEffect, useState } from "react";

function useCurrency(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(
            `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
        )
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch currency data");
                }
                return res.json();
            })
            .then((res) => {
                setData(res[currency]);
            })
            .catch((error) => {
                console.error(error);
                setData({});
            });
    }, [currency]);

    return data;
}

export default useCurrency;