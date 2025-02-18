import { useState } from "react";
import FruitCounter from "../fruitCounter/fruitCounter.jsx";
import Button from "../button/button.jsx";

function FruitCounterList() {
    const [fruitCounters, setFruitCounters] = useState({
        Aardbeien: 0,
        Bananen: 0,
        Appels: 0,
        "Kiwi's": 0
    });

    const updateCount = (fruit, amount) => {
        setFruitCounters((prev) => ({
            ...prev,
            [fruit]: Math.max(0, prev[fruit] + amount)
        }));
    };

    const reset = () => {
        setFruitCounters({
            Aardbeien: 0,
            Bananen: 0,
            Appels: 0,
            "Kiwi's": 0
        });
    };

    return (
        <>
            <h1>Fruitmand Bezorgservice</h1>
            {Object.entries(fruitCounters).map(([fruit, count]) => (
                <FruitCounter
                    key={fruit}
                    fruit={fruit}
                    emoji={fruit === "Aardbeien" ? "🍓" : fruit === "Bananen" ? "🍌" : fruit === "Appels" ? "🍎" : "🥝"}
                    count={count}
                    updateCount={updateCount}
                />
            ))}
            <Button label="Reset" onClick={reset} />
        </>
    );
}

export default FruitCounterList;