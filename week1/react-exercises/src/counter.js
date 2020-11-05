import { useState } from "react";

const Count = (props) => {
    return <h1>{props.count}</h1>;
}

const Button = (props) => {
    return <button onClick={props.callback}>Add 1!</button>;
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