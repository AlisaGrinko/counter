import React from 'react';
import './App.css';


function Item(props) {

    const addCounter = props.addCounter

    return (
        <div className="App">
            <button onClick={addCounter}>Add Counter</button>
        </div>
    );
}

export default Item;
