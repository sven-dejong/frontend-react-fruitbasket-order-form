import "./fruitCounter.css"

function FruitCounter({ fruit, emoji, count, updateCount }) {
    return (
        <article>
            <h3>{emoji} {fruit}</h3>
            <button type="button" onClick={() => updateCount(fruit, -1)}>-</button>
            <p>{count}</p>
            <button type="button" onClick={() => updateCount(fruit, 1)}>+</button>
        </article>
    );
}

export default FruitCounter;