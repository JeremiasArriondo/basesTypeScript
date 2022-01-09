import { useState } from "react"
//Si quiero hacer opcional el initialValue simplemente agrego el ?
interface Props {
    initialValue?: number
}

export const CounterBy = ({ initialValue = 5 }: Props) => {
    //Utilizando un objeto como estado inicial
    const [counterState, setCounterState] = useState({
        counter: initialValue,
        clicks: 0
    })

    //Desestructuracion del estado
    const {counter, clicks} = counterState;
    //Manejando el estado previo
    const handleClick = ( value: number) => {
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

