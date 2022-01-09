import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from 'gsap';

// const MAXIMUN_COUNT = 10;

export const useCounter = ({ maxCount = 10}) => {

    const [counter, setCounter] = useState(5)
    const elementToAnimate = useRef<any>(null);
    //Se almacena la referencia en memoria
    const tl = useRef( gsap.timeline());
    //el timeline es un controlador del tiempo de animacion
    const handleClick = () => {
        setCounter(prev => Math.min(prev + 1, maxCount));
    }

    useLayoutEffect(() => {

        if( !elementToAnimate.current) return;

        //El punto current hace referencia al objeto y no el objeto en si
        tl.current.to( elementToAnimate.current , { y: -10, duration: .2, ease: 'east.out'} )
                  .to( elementToAnimate.current , { y: 0, duration: 1, ease: 'bounce.out'} )
                  .pause();
    }, [])

    useEffect(() => {
        /*Valor maximo del estado
        if ( counter < 10 ) return;
        console.log('%cSe llego al valor maximo','color: blue; background-color: black;')
        */

        // if ( counter < maxCount) return;
        tl.current.play(0);
    }, [counter])

    return {
        counter,
        elementToAnimate,
        handleClick
    }
}