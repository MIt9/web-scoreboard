import React, {FC} from "react";

import useUpdateNumberByClick from "../../hooks/useUpdateNumberByClick";

type PointsType = {
    maxValue: number;
    fromZero?: boolean;
    className?: string;
    circle?: boolean;
}

const Points: FC<PointsType> = ({maxValue, className, circle, fromZero, children}) => {
    const [points, onClick, onRightClick] = useUpdateNumberByClick(maxValue, fromZero, circle);

    return <div
        onClick={onClick}
        onContextMenu={onRightClick}
        className={className}
    >
        {children}
        {points}
    </div>
}

export default Points;
