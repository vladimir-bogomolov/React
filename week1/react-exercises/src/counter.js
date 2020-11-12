import { useState } from "react";

const Count = ({count}) => {
    return <h1>{count}</h1>;
}

const Button = ({callback}) => {
    return <button onClick={callback}>Add 1!</button>;
}

const Counter = () => {
    const [count, setCount] = useState(0);
    function plusOne() {
        setCount(count + 1);
    }
    let feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";
    return (
    <div>
        <Count count={count}/>
        <Button callback={plusOne}/>
        <p>{feedback}</p>
    </div>);
  };
export default Counter;