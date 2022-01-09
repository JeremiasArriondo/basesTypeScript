import { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {
    
    const [counter, setCounter] = useState(5)
    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
        setCounter(prev => Math.min(prev + 1, MAXIMUN_COUNT));
    }

    useEffect(() => {
        //Valor maximo del estado
        if ( counter < 10 ) return;
        console.log('%cSe llego al valor maximo','color: blue; background-color: black;')
        //el timeline es un controlador del tiempo de animacion
        const tl = gsap.timeline();
        //El punto current hace referencia al objeto y no el objeto en si
        tl.to( counterElement.current , { y: -10, duration: .2, ease: 'east.out'} )
            .to( counterElement.current , { y: 0, duration: 1, ease: 'bounce.out'} )
        
    }, [counter])

    return (
        <>
            <h1>Counter Effect: </h1>
            <h2 ref={ counterElement }>{ counter }</h2>
            <button onClick={ handleClick }>
                +1
            </button>
        </>
    )
}

