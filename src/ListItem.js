import React from 'react'

export default function ListItem (props) {

    const el = props.el;
    const index = props.index;
    const counterPlus = props.counterPlus;
    const counterMinus = props.counterMinus;
    const counterReset = props.counterReset;
    const counterDelete = props.counterDelete;

    const counterPlusHandler = () => {
        return counterPlus(index);
    }

    const counterMinusHandler = () => {
        return counterMinus(index);
    }

    const counterResetHandler = () => {
        return counterReset(index);
    }

    const counterDeleteHandler = () => {
        return counterDelete(index);
    }



    return (
        <div>
            <button onClick={counterMinusHandler}>-</button>
            {el}
            <button onClick={counterPlusHandler}>+</button>
            <button onClick={counterResetHandler}>RESET</button>
            <button onClick={counterDeleteHandler}>Delete</button>
        </div>
    )
}
