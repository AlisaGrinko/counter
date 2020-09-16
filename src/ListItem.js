import React from 'react'
import Item from "./Item";

export default function ListItem (props) {

    const el = props.el;
    const index = props.index;
    const counterPlus = props.counterPlus;
    const counterMinus = props.counterMinus;
    const counterReset = props.counterReset;
    const addCounter = props.addCounter;

    const counterPlusHandler = () => {
        return counterPlus(index);
    }

    const counterMinusHandler = () => {
        return counterMinus(index);
    }

    const counterResetHandler = () => {
        return counterReset(index);
    }



    return (
        <div>
            <button onClick={counterMinusHandler}>-</button>
            {el}
            <button onClick={counterPlusHandler}>+</button>
            <button onClick={counterResetHandler}>RESET</button>
        </div>
    )
}
