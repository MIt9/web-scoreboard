import useChronometer from "../../hooks/useChronometer";
import React, {FC, useCallback, useEffect} from "react";
import {convertTime} from "../../utils";
import {COLOR_CODES, FULL_DASH_ARRAY} from "../../constants";

import "./Timer.css";

const { alert, warning, info } = COLOR_CODES;

type TimerType = {
    className?: string;
    maxValue: number;
    revers: boolean;
    size: "small" | "medium" | "large"
}
function calculateTimeFraction(timeLeft: number, timeLimit: number): number {
    const rawTimeFraction = timeLeft / timeLimit;
    return rawTimeFraction - (1 / timeLimit) * (1 - rawTimeFraction);
}

const audio = new Audio("./audio/beep.mp3");

const Timer: FC<TimerType> = ({children, size, className, maxValue, revers}) => {
    const [value, start, reset] = useChronometer(maxValue, revers, () => audio.play());
    const timeLeft = revers? value : maxValue - value;
    const remainingPathColor = timeLeft <= alert.threshold?
        alert.color : timeLeft <= warning.threshold?
            warning.color : info.color;

    const circleDasharray = `${(
        calculateTimeFraction(timeLeft, maxValue) * FULL_DASH_ARRAY
    ).toFixed(0)} ${FULL_DASH_ARRAY}`;

    const leftClick = useCallback(() => start(), [start]);
    const rightClick = useCallback((e) => {
        e.stopPropagation();
        e.preventDefault();
        reset();
    }, [reset]);

    useEffect(() => () => reset(), [reset, maxValue]);

    return <div className={`timer-wrapper timer-${size} ${className}`}>
        <svg className="timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g className="timer__circle">
                <circle className="timer__path-elapsed" cx="50" cy="50" r="45"/>
                <path
                    id="timer-path-remaining"
                    strokeDasharray={circleDasharray}
                    className={`timer__path-remaining ${remainingPathColor}`}
                    d="M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0"
                />
            </g>
        </svg>
        <h3 className="timer-content" onClick={leftClick} onContextMenu={rightClick}>{convertTime(value)}</h3>
        {children}
    </div>
};

export default Timer;
