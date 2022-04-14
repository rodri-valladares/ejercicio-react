import React from 'react';
import {useCouter} from '../../hooks/useCouter'

export const CounterWithCustomHook = () =>{

    const {counter, increment, decrement} = useCouter(100)

    return (
        <>
            <h1>Contador con custom hook: {counter}</h1>
            <hr/>
            <button onClick={increment} className="btn">+1</button>
            <button onClick={decrement}  className="btn">-1</button>

        </>
    )
}