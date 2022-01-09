import { useReducer } from "react"
import { doIncreaseBy, doReset } from "./actions/actions";
import { CounterState } from './interface/interface';
import { counterReducer } from './stateReducer/counterReducer';
// import * as actions from './actions/actions';

const INITIAL_STATE: CounterState = {
    changes: 0,
    counter: 0,
    previous: 0,
}

export const CounterReducerComponent = () => {
    
    const [ counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const onReset = () => {
        //Manda a llamar a la accion, que retorna un objeto que posee la accion correspondiente
        //Es decir se tranfiere la generación de una accion a una función
        dispatch( doReset() )
    }

    const increaseBy = ( value:number) => {
        // dispatch( actions.doIncreaseBy(value))
        dispatch( doIncreaseBy(value)) ;
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

