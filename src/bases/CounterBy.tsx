import { useState } from "react"
//Si quiero hacer opcional el initialValue simplemente agrego el ?
interface Props {
    initialValue?: number
}
interface CounterState {
    counter: number,
    clicks: number
}

export const CounterBy = ({ initialValue = 5 }: Props) => {
    //Utilizando un objeto como estado inicial
    const [{counter, clicks}, setCounterState] = useState<CounterState>({
        counter: initialValue,
        clicks: 0
    })
    //Manejando el estado previo
    const handleClick = ( value: number) => {
        //setCounterState( ({clicks, counter})=> 
        setCounterState( prev => ({
            counter: prev.counter + value,
            clicks: prev.clicks +1
        }));
    }
    return (
        <>
            <h1>Counter by: { counter }</h1>
            <h1>Clicks: { clicks }</h1>

            <button onClick={ () => handleClick(1) }>
                +1
            </button>
            <button onClick={ () => handleClick(5) }>
                +5
            </button>
        </>
    )
}

