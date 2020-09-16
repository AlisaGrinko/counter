import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import ListItem from "./ListItem";
import Item from "./Item";

function App() {

    const arr = [0, 0, 0, 0]

    const [counter, setCounter] = useState(arr)

    const counterPlus = (index) => {
        const result = counter.map((el, i) => {
            return index === i ? ++el : el;
        })
        setCounter(result)
    }

    const counterMinus = (index) => {
        const result = counter.map((el, i) =>
            (index === i) ? --el : el)
        setCounter(result);
    }

    const counterReset = (index) => {
        const result = counter.map((el, i) =>
            (index === i) ? 0 : el);
        setCounter(result);
    }

    const addCounter = () => {
        const result = [...counter];
        result.push(0)
        setCounter(result)
    }

    return (
        <div className="App">

            {counter.map((el, index) =>
                <ListItem key={index} el={el} index={index} counterPlus={counterPlus} counterMinus={counterMinus}
                counterReset={counterReset}/>)}
            <Item addCounter={addCounter} />
        </div>
    );
}

export default App;
