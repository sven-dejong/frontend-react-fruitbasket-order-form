import { useState } from "react";
import Button from "../button/button.jsx";
import "./orderForm.css"

function OrderForm() {
    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [age, setAge] = useState(0);
    const [zip, setZip] = useState("");
    const [deliveryFrequency, setDeliveryFrequency] = useState("");
    const [deliveryTime, setDeliveryTime] = useState("");
    const [comments, setComments] = useState("");
    const [termsAccepted, setTermsAccepted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(firstName, surname, age, zip, deliveryFrequency, deliveryTime, comments, termsAccepted);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Voornaam:
                <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)}/>
            </label>

            <label>
                Achternaam:
                <input type="text" value={surname} onChange={e => setSurname(e.target.value)}/>
            </label>

            <label>
                Leeftijd:
                <input type="number" value={age} onChange={e => setAge(e.target.value)}/>
            </label>

            <label>
                Postcode:
                <input type="text" value={zip} onChange={e => setZip(e.target.value)}/>
            </label>

            <label>
                Bezorgfrequentie:
                <select value={deliveryFrequency} onChange={e => setDeliveryFrequency(e.target.value)}>
                    <option value="weekly">Wekelijks</option>
                    <option value="biweekly">Om de week</option>
                    <option value="monthly">Maandelijks</option>
                </select>
            </label>

            <label>
                Tijdvak:
                <input type="radio" name="delivery-time" value="day" checked={deliveryTime === "day"}
                       onChange={e => setDeliveryTime(e.target.value)}/>
                Overdag
            </label>
            <label>
                <input type="radio" name="delivery-time" value="evening" checked={deliveryTime === "evening"}
                       onChange={e => setDeliveryTime(e.target.value)}/>
                Avond
            </label>

            <label>
                Opmerkingen:
                <input type="text" value={comments} onChange={e => setComments(e.target.value)}/>
            </label>

            <label>
                <input type="checkbox" checked={termsAccepted} onChange={() => setTermsAccepted(!termsAccepted)}/>
                Ik ga akkoord met de voorwaarden
            </label>

            <Button label="Verzend" type="submit"/>
        </form>
    );
}

export default OrderForm;