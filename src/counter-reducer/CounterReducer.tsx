import { useReducer } from "react"
import { CounterState } from './interface/interface';
import { counterReducer } from './stateReducer/counterReducer';

const INITIAL_STATE: CounterState = {
    changes: 0,
    counter: 0,
    previous: 0,
}

export const CounterReducerComponent = () => {
    
    const [ counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const onReset = () => {
        dispatch({type: 'reset'})
    }

    const increaseBy = ( value:number) => {
        dispatch({type: 'increaseBy', payload: {value: value}});
    }

    return (
        <>
            <h1>Counter Reducer Segmentado</h1>
            <pre>
                { JSON.stringify( counterState, null, 2) }
            </pre>

            <button onClick={ () => increaseBy(1) }>
                +1
            </button>
            <button onClick={ () => increaseBy(5) }>
                +5
            </button>
            <button onClick={ () => increaseBy(10) }>
                +10
            </button>
            <button onClick={ onReset }>
                Reset
            </button>
        </>
    )
}

