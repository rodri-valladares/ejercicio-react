import {useState} from 'react';

export const useCouter=(initialState=10)=>{
    const [counter, setCounter] = useState(initialState);

    const increment = ()=>{
        setCounter( counter + 1);
    }

    const decrement = ()=>{
        setCounter( counter - 1)
    }

    return{
        counter,
        increment,
        decrement
    };

}