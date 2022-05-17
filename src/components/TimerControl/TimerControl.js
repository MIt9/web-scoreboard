import React from "react";

import "./TimerControl.css";

const TimerControl = ({startBreak, startMatch}) => {
    return <div className="timer-control__wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="2vh"
             height="2vh" viewBox="0 -0.5 17 17" version="1.1"
             onClick={startBreak}
             className="si-glyph-history">
            <defs/>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(1.000000, 1.000000)" fill="#ffffff">
                    <path
                        d="M7.479,0.046 C11.338,0.046 14.298,3.238 14.645,7.031 L15.969,7.031 L14.077,8.983 L12.012,7.031 L13.35,7.031 C13.02,3.802 10.604,1.073 7.414,1.073 C4.002,1.073 1.225,3.961 1.225,7.51 C1.225,11.059 4.002,13.948 7.414,13.948 C9.109,13.948 10.645,13.235 11.764,12.083 L12.586,12.909 C11.252,14.185 9.456,14.974 7.479,14.974 C3.387,14.974 0.0600000001,11.625 0.0600000001,7.51 C0.0600000001,3.395 3.387,0.046 7.479,0.046 L7.479,0.046 Z"
                        className="si-glyph-fill"/>
                    <path
                        d="M7.05800003,3.03076172 L7,7.952 L11,8 L11,7 L7.968,7.062 L7.96800003,3.03076172 C7.96900003,3.03076172 7.05800003,3.03076172 7.05800003,3.03076172 Z"
                        className="si-glyph-fill"/>
                </g>
            </g>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="2vh"
             height="2vh" viewBox="0 0 17 17" version="1.1"
             onClick={startMatch}
             className="si-glyph-clock">
            <defs/>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(1.000000, 1.000000)" fill="#ffffff">
                    <path
                        d="M8.008,15.929 C3.623,15.929 0.058,12.366 0.058,7.987 C0.058,3.606 3.623,0.043 8.008,0.043 C12.392,0.043 15.958,3.606 15.958,7.987 C15.958,12.365 12.392,15.929 8.008,15.929 L8.008,15.929 L8.008,15.929 Z M7.973,1.863 C4.619,1.863 1.889,4.605 1.889,7.974 C1.889,11.343 4.619,14.085 7.973,14.085 C11.328,14.085 14.058,11.343 14.058,7.974 C14.058,4.605 11.328,1.863 7.973,1.863 L7.973,1.863 L7.973,1.863 Z"
                        className="si-glyph-fill"/>
                    <rect x="7" y="4" width="0.959" height="3.978" className="si-glyph-fill"/>
                    <rect x="7" y="8" width="3.938" height="0.979" className="si-glyph-fill"/>
                </g>
            </g>
        </svg>
    </div>
}

export default TimerControl;
