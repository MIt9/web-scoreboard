import {useCallback, useEffect, useRef, useState} from "react";

const SECOND = 1000;

const useChronometer = (maxValue: number, revers: boolean, onEnd: () => void): [number, (() => void), (() => void), ((newValue: number) => void)] => {
    const [value, setValue] = useState<number>(revers ? maxValue : 0);
    const timer = useRef<ReturnType<typeof setInterval>>();

    const pause = useCallback(() => {
        if (timer.current) {
            clearInterval(timer.current);
        }
    }, []);

    useEffect(() => {
        if ((revers && value < 0) || (!revers && value > maxValue)) {
            pause();
            setValue(revers ? 0 : maxValue);
            onEnd();
        }
    }, [revers, onEnd, value, maxValue, pause]);

    const edit = useCallback((newValue) => {
        pause();
        setValue(newValue);
    }, [pause])

    const reset = useCallback(() => {
        edit(revers ? maxValue : 0);
    }, [edit, maxValue, revers]);


    const start = useCallback(() => {
        if (timer.current) {
            clearInterval(timer.current);
            timer.current = undefined;
        } else {
            timer.current = setInterval(() => {
                setValue((oldValue) => oldValue + (revers ? -1 : 1));
            }, SECOND);
        }

    }, [revers])

    return [value, start, reset, edit];
}

export default useChronometer;
